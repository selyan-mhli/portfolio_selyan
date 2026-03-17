import { t, type Lang } from "@/lib/i18n";
import ClientApp from "@/components/ClientApp";

const lang: Lang = "fr";

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden" role="main">
      {/* ── SEO Content: server-rendered, readable by crawlers ── */}
      {/* Visually hidden but present in the DOM for search engines and AI bots */}
      <article className="sr-only">
        <h1>Portfolio de Selyan Mouhali</h1>

        {/* About */}
        <section>
          <h2>{t("label_polyhedron", lang)}</h2>
          <p>
            {t("about_hello", lang)} Selyan Mouhali
            {t("about_desc", lang)}
          </p>
          <p>{t("about_skills", lang)}</p>
          <p>{t("about_sub", lang)}</p>
          <h3>{t("about_langTitle", lang)}</h3>
          <ul>
            <li>{t("lang_french", lang)}</li>
            <li>{t("lang_english", lang)}</li>
            <li>{t("lang_spanish", lang)}</li>
          </ul>
          <nav aria-label="Social links">
            <a href="https://github.com/selyan-mhli">GitHub</a>
            <a href="https://www.linkedin.com/in/selyanmouhali/">LinkedIn</a>
          </nav>
        </section>

        {/* Experience */}
        <section>
          <h2>{t("label_phone", lang)}</h2>
          {[
            { company: "Néréides", role: "exp_nereides_role", period: "exp_nereides_period", bullets: ["exp_nereides_b1", "exp_nereides_b2"] },
            { company: "Ici Store", role: "exp_icistore_role", period: "exp_icistore_period", bullets: ["exp_icistore_b1", "exp_icistore_b2"] },
            { company: "Little Bagel", role: "exp_littlebagel_role", period: "exp_littlebagel_period", bullets: ["exp_littlebagel_b1", "exp_littlebagel_b2", "exp_littlebagel_b3"] },
            { company: "Villas Helios", role: "exp_helios_role", period: "exp_helios_period", bullets: ["exp_helios_b1", "exp_helios_b2"] },
            { company: "Henry Duffaut Hospital", role: "exp_hospital_role", period: "exp_hospital_period", bullets: ["exp_hospital_b1", "exp_hospital_b2"] },
            { company: "Pediatric Office", role: "exp_pediatric_role", period: "exp_pediatric_period", bullets: ["exp_pediatric_b1", "exp_pediatric_b2"] },
          ].map((exp) => (
            <div key={exp.company}>
              <h3>{t(exp.role, lang)} — {exp.company}</h3>
              <p>{t(exp.period, lang)}</p>
              <ul>
                {exp.bullets.map((b) => (
                  <li key={b}>{t(b, lang)}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2>{t("label_textCard", lang)}</h2>
          {[
            { title: "edu_utt_title", period: "edu_utt_period", desc: "edu_utt_desc" },
            { title: "edu_mariepila_title", period: "edu_mariepila_period", desc: "edu_mariepila_desc" },
            { title: "edu_reynolds_title", period: "edu_reynolds_period", desc: "edu_reynolds_desc" },
          ].map((edu) => (
            <div key={edu.title}>
              <h3>{t(edu.title, lang)}</h3>
              <p>{t(edu.period, lang)}</p>
              <p>{t(edu.desc, lang)}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2>{t("label_cubes", lang)}</h2>
          <div>
            <h3>Site_Londres_MM01</h3>
            <p>{t("proj_londres_desc", lang)}</p>
            <p>HTML, CSS, Responsive Design</p>
            <a href="https://selyan-mhli.github.io/Site_Londres_MM01/">Site_Londres_MM01</a>
          </div>
          <div>
            <h3>Projet_LO02</h3>
            <p>{t("proj_lo02_desc", lang)}</p>
            <p>Java, OOP, MVC, JUnit</p>
            <a href="https://github.com/selyan-mhli/Projet_LO02">Projet_LO02</a>
          </div>
          <div>
            <h3>projet_Natran</h3>
            <p>{t("proj_natran_desc", lang)}</p>
            <p>TypeScript, Node.js, Unit Testing</p>
            <a href="https://selyan-mhli.github.io/projet_Natran/">projet_Natran</a>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2>{t("label_toggleStack", lang)}</h2>
          <p>{t("tech_intro", lang)}</p>
          <h3>{t("tech_frontend", lang)}</h3>
          <p>React, Next.js, TypeScript, TailwindCSS</p>
          <h3>{t("tech_backend", lang)}</h3>
          <p>Node.js, Firebase, Supabase, PostgreSQL, Stripe</p>
          <h3>{t("tech_aidata", lang)}</h3>
          <p>Gemini API, LangChain, Python, TensorFlow, ML/DL, Computer Vision, LLM/RAG</p>
          <h3>{t("tech_tools", lang)}</h3>
          <p>Git, Vercel, Docker, ROS2, Figma, Java, UML, JavaSwing</p>
          <h3>{t("tech_softSkills", lang)}</h3>
          <p>
            {t("skill_teamwork", lang)}, {t("skill_communication", lang)}, {t("skill_organization", lang)},{" "}
            {t("skill_adaptability", lang)}, {t("skill_curiosity", lang)}, {t("skill_customer", lang)}
          </p>
        </section>

        {/* Passions */}
        <section>
          <h2>{t("label_palette", lang)}</h2>
          <p>{t("passions_intro", lang)}</p>
          {[
            { title: "passion_karate", desc: "passion_karate_d" },
            { title: "passion_football", desc: "passion_football_d" },
            { title: "passion_motorsport", desc: "passion_motorsport_d" },
            { title: "passion_travel", desc: "passion_travel_d" },
            { title: "passion_economy", desc: "passion_economy_d" },
            { title: "passion_ai", desc: "passion_ai_d" },
          ].map((p) => (
            <div key={p.title}>
              <h3>{t(p.title, lang)}</h3>
              <p>{t(p.desc, lang)}</p>
            </div>
          ))}
        </section>

        {/* Internship Search */}
        <section>
          <h2>{t("label_ai", lang)}</h2>
          <p>{t("intern_intro", lang)}</p>
          <div>
            <h3>{t("intern_stage_title", lang)}</h3>
            <p>{t("intern_stage_desc", lang)}</p>
          </div>
          <div>
            <h3>{t("intern_summer_title", lang)}</h3>
            <p>{t("intern_summer_desc", lang)}</p>
          </div>
          <p>{t("intern_open", lang)}</p>
        </section>

        {/* Certifications */}
        <section>
          <h2>{t("label_dots", lang)}</h2>
          <ul>
            <li>{t("cert_karate", lang)}</li>
            <li>{t("cert_inrs", lang)} — {t("cert_inrs_detail", lang)}</li>
            <li>{t("cert_lvmh", lang)}</li>
            <li>{t("cert_pse1", lang)}</li>
            <li>{t("cert_linguaskill", lang)}</li>
            <li>{t("cert_siele", lang)}</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2>Contact</h2>
          <p>{t("contactDesc", lang)}</p>
          <a href="mailto:selyan.mouhali@gmail.com">selyan.mouhali@gmail.com</a>
          <a href="https://www.linkedin.com/in/selyanmouhali/">LinkedIn — Selyan Mouhali</a>
          <a href="https://github.com/selyan-mhli">GitHub — selyan-mhli</a>
        </section>
      </article>

      {/* ── Interactive App: client-side rendered on top ── */}
      <ClientApp />
    </main>
  );
}
