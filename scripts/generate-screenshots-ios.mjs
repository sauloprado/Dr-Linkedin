import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'fs';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE   = 'http://localhost:3000/App%20Dr.%20LinkedIn.html';
const OUT    = 'app/assets/screenshots-ios';

// Tamanhos exigidos pela App Store (classe de tela, não modelo exato).
// CONFIRMAR no App Store Connect no momento do upload — a Apple ajusta essa
// lista quando lança telas novas de iPhone/iPad.
const DEVICES = [
  { folder: '6.9-iphone', width: 440, height: 956, deviceScaleFactor: 3 }, // 1320x2868 — obrigatório
  { folder: '6.7-iphone', width: 430, height: 932, deviceScaleFactor: 3 }, // 1290x2796 — obrigatório
  // iPad só é necessário se o app for distribuído também para iPad.
  // { folder: '13-ipad', width: 1032, height: 1376, deviceScaleFactor: 2 }, // 2064x2752
];

const screens = [
  { name: '1-home',        tab: 'Home'        },
  { name: '2-consultoria', tab: 'Consultoria' },
  { name: '3-livro',       tab: 'Livro'       },
  { name: '4-sobre',       tab: 'Sobre'       },
  { name: '5-contato',     tab: 'Contato'     },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox'],
});

for (const device of DEVICES) {
  const dir = `${OUT}/${device.folder}`;
  mkdirSync(dir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({
    width: device.width,
    height: device.height,
    deviceScaleFactor: device.deviceScaleFactor,
  });

  await page.goto(BASE, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  for (const s of screens) {
    await page.evaluate((label) => {
      const items = [...document.querySelectorAll('.tabbar-item')];
      const btn = items.find(el => el.textContent.trim().includes(label));
      if (btn) btn.click();
    }, s.tab);
    await new Promise(r => setTimeout(r, 700));
    const path = `${dir}/${s.name}.png`;
    await page.screenshot({ path, fullPage: false });
    console.log(`✓ ${path}`);
  }

  await page.close();
}

await browser.close();
console.log(`\nScreenshots iOS salvas em ${OUT}/`);
