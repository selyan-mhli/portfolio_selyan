// Verifie les en-tetes de securite declares dans next.config.mjs (headers()).
// Lancement : npm run test:headers
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const configUrl = new URL("../next.config.mjs", import.meta.url);

async function loadHeaders(nodeEnv) {
  const previous = process.env.NODE_ENV;
  process.env.NODE_ENV = nodeEnv;
  try {
    // Query distincte : une instance de module par environnement.
    const { default: config } = await import(`${configUrl.href}?env=${nodeEnv}`);
    const rules = await config.headers();
    const catchAll = rules.find((rule) => rule.source === "/(.*)");
    assert.ok(catchAll, "regle headers() sur /(.*) absente");
    return catchAll.headers;
  } finally {
    process.env.NODE_ENV = previous;
  }
}

function parseCsp(value) {
  return new Map(
    value
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const [name, ...sources] = part.split(/\s+/);
        return [name, sources];
      }),
  );
}

async function loadCsp(nodeEnv) {
  const headers = await loadHeaders(nodeEnv);
  const csp = headers.filter((h) => h.key.toLowerCase() === "content-security-policy");
  assert.equal(csp.length, 1, "exactement un en-tete Content-Security-Policy attendu");
  return parseCsp(csp[0].value);
}

test("production : directives CSP attendues", async () => {
  const csp = await loadCsp("production");

  assert.deepEqual(csp.get("default-src"), ["'self'"]);
  assert.deepEqual(csp.get("script-src"), ["'self'", "'unsafe-inline'"]);
  assert.deepEqual(csp.get("style-src"), ["'self'", "'unsafe-inline'"]);
  assert.deepEqual(csp.get("img-src"), ["'self'", "https://cdn.simpleicons.org"]);
  assert.deepEqual(csp.get("font-src"), ["'self'"]);
  assert.deepEqual(csp.get("connect-src"), ["'self'", "https://api.web3forms.com"]);
  assert.deepEqual(csp.get("object-src"), ["'none'"]);
  assert.deepEqual(csp.get("base-uri"), ["'self'"]);
  assert.deepEqual(csp.get("form-action"), ["'self'"]);
  assert.deepEqual(csp.get("frame-ancestors"), ["'self'"]);
  assert.ok(csp.has("upgrade-insecure-requests"));
});

test("production : jamais de unsafe-eval ni de joker", async () => {
  const csp = await loadCsp("production");
  for (const [name, sources] of csp) {
    assert.ok(!sources.includes("'unsafe-eval'"), `${name} contient 'unsafe-eval'`);
    assert.ok(!sources.includes("*"), `${name} contient *`);
    assert.ok(!sources.includes("http:"), `${name} autorise http:`);
  }
});

test("dev : unsafe-eval tolere pour next dev, sans upgrade-insecure-requests", async () => {
  const csp = await loadCsp("development");
  assert.ok(csp.get("script-src").includes("'unsafe-eval'"));
  assert.ok(!csp.has("upgrade-insecure-requests"));
});

test("frame-src couvre chaque apercu live de projet (lib/data.ts)", async () => {
  const csp = await loadCsp("production");
  const source = await readFile(new URL("../lib/data.ts", import.meta.url), "utf8");
  const start = source.indexOf("export const projects");
  assert.ok(start >= 0, "tableau projects introuvable dans lib/data.ts");
  const end = source.indexOf("export const", start + 1);
  const block = source.slice(start, end === -1 ? undefined : end);
  const origins = [...block.matchAll(/href:\s*"(https:\/\/[^"]+)"/g)].map(
    ([, href]) => new URL(href).origin,
  );
  assert.ok(origins.length > 0, "aucune href de projet trouvee");
  for (const origin of new Set(origins)) {
    assert.ok(csp.get("frame-src").includes(origin), `frame-src ne couvre pas ${origin}`);
  }
});

test("en-tetes de securite existants conserves, sans doublon", async () => {
  const headers = await loadHeaders("production");
  const keys = headers.map((h) => h.key.toLowerCase());
  assert.equal(new Set(keys).size, keys.length, "en-tete duplique");
  const byKey = Object.fromEntries(headers.map((h) => [h.key.toLowerCase(), h.value]));
  assert.equal(byKey["strict-transport-security"], "max-age=31536000");
  assert.equal(byKey["x-content-type-options"], "nosniff");
  assert.equal(byKey["x-frame-options"], "SAMEORIGIN");
  assert.equal(byKey["referrer-policy"], "strict-origin-when-cross-origin");
});
