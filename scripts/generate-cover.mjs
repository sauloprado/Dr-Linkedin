import sharp from 'sharp';
import { readFileSync } from 'fs';

const W = 1280, H = 640;

// Carrega o ícone do app
const iconBuffer = readFileSync('app/assets/icon-512.png');
const iconResized = await sharp(iconBuffer).resize(180, 180).toBuffer();

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Fundo degradê escuro-azul -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0A1628"/>
      <stop offset="60%"  stop-color="#0F2347"/>
      <stop offset="100%" stop-color="#0A1628"/>
    </linearGradient>

    <!-- Brilho dourado suave -->
    <radialGradient id="glow" cx="38%" cy="50%" r="45%">
      <stop offset="0%"  stop-color="#C9A84C" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#0A1628" stop-opacity="0"/>
    </radialGradient>

    <!-- Máscara circular para o ícone -->
    <clipPath id="circle">
      <circle cx="220" cy="320" r="90"/>
    </clipPath>

    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Fundo -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Linhas decorativas sutis -->
  <line x1="0" y1="1" x2="${W}" y2="1" stroke="#C9A84C" stroke-width="2" opacity="0.6"/>
  <line x1="0" y1="${H-1}" x2="${W}" y2="${H-1}" stroke="#C9A84C" stroke-width="2" opacity="0.6"/>

  <!-- Círculo de fundo do ícone -->
  <circle cx="220" cy="320" r="100" fill="#C9A84C" opacity="0.12" filter="url(#shadow)"/>
  <circle cx="220" cy="320" r="92" fill="#0F2347" stroke="#C9A84C" stroke-width="1.5" opacity="0.7"/>

  <!-- Ícone (inserido via imagem embutida) -->
  <image href="data:image/png;base64,ICON_BASE64"
         x="130" y="230" width="180" height="180"
         clip-path="url(#circle)"/>

  <!-- Linha separadora vertical -->
  <line x1="370" y1="180" x2="370" y2="460" stroke="#C9A84C" stroke-width="1" opacity="0.4"/>

  <!-- Textos -->
  <text x="420" y="270"
        font-family="Georgia, serif"
        font-size="64"
        font-weight="bold"
        fill="#FFFFFF"
        letter-spacing="1">Dr. LinkedIn</text>

  <text x="424" y="330"
        font-family="Arial, sans-serif"
        font-size="26"
        fill="#C9A84C"
        letter-spacing="3"
        font-weight="300">APLICATIVO PROFISSIONAL</text>

  <text x="424" y="390"
        font-family="Arial, sans-serif"
        font-size="20"
        fill="#8BAFD4"
        letter-spacing="1">Transforme seu LinkedIn em uma</text>

  <text x="424" y="418"
        font-family="Arial, sans-serif"
        font-size="20"
        fill="#8BAFD4"
        letter-spacing="1">máquina de oportunidades</text>

  <!-- Badges -->
  <rect x="424" y="455" width="110" height="34" rx="17" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" stroke-width="1"/>
  <text x="479" y="477" font-family="Arial, sans-serif" font-size="13" fill="#C9A84C" text-anchor="middle" letter-spacing="1">Android</text>

  <rect x="548" y="455" width="90" height="34" rx="17" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" stroke-width="1"/>
  <text x="593" y="477" font-family="Arial, sans-serif" font-size="13" fill="#C9A84C" text-anchor="middle" letter-spacing="1">iOS</text>

  <rect x="652" y="455" width="80" height="34" rx="17" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" stroke-width="1"/>
  <text x="692" y="477" font-family="Arial, sans-serif" font-size="13" fill="#C9A84C" text-anchor="middle" letter-spacing="1">PWA</text>
</svg>`;

// Embedda o ícone em base64 no SVG
const iconBase64 = iconResized.toString('base64');
const svgFinal = svg.replace('ICON_BASE64', iconBase64);

await sharp(Buffer.from(svgFinal))
  .resize(W, H)
  .png()
  .toFile('brand/github-cover.png');

console.log('Capa gerada: brand/github-cover.png');
