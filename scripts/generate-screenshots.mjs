import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE   = 'http://localhost:3000/App%20Dr.%20LinkedIn.html';
const OUT    = 'app/assets/screenshots';

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox'],
});

const page = await browser.newPage();

// Tamanho de celular (1080×1920 — padrão Play Store)
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2.77 });

const screens = [
  { name: '1-home',        tab: 'Home'        },
  { name: '2-consultoria', tab: 'Consultoria' },
  { name: '3-livro',       tab: 'Livro'       },
  { name: '4-sobre',       tab: 'Sobre'       },
  { name: '5-contato',     tab: 'Contato'     },
];

await page.goto(BASE, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1000));

for (const s of screens) {
  // Clica na tab pelo texto do label
  await page.evaluate((label) => {
    const items = [...document.querySelectorAll('.tabbar-item')];
    const btn = items.find(el => el.textContent.trim().includes(label));
    if (btn) btn.click();
  }, s.tab);
  await new Promise(r => setTimeout(r, 700));
  const path = `${OUT}/${s.name}.png`;
  await page.screenshot({ path, fullPage: false });
  console.log(`✓ ${path}`);
}

await browser.close();
console.log('\nScreenshots salvas em app/assets/screenshots/');
