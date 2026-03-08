import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const dir = './public/logos';

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on('finish', () => { file.close(resolve); });
    }).on('error', reject);
  });
}

const urls = [
  ['https://upload.wikimedia.org/wikipedia/commons/7/70/INRS_France_Logo.png', 'inrs.png'],
  ['https://upload.wikimedia.org/wikipedia/commons/b/b1/LVMH_logo.svg', 'lvmh.svg'],
  ['https://upload.wikimedia.org/wikipedia/commons/5/54/SIELE_logo.png', 'siele.png'],
];

for (const [url, file] of urls) {
  try {
    await download(url, path.join(dir, file));
    const size = fs.statSync(path.join(dir, file)).size;
    console.log(`${file}: ${size} bytes`);
  } catch(e) {
    console.error(`${file} FAILED: ${e.message}`);
  }
}
