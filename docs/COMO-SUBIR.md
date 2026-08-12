# Como subir o projeto Dr. LinkedIn

## Todo dia, para navegar no app

### Passo 1 — Abrir o terminal

No VS Code: pressione **`Ctrl + J`**

Confirme que a linha do terminal termina com:
```
...\Final>
```
Se não, rode:
```
cd "c:\Users\saulo\OneDrive\Área de Trabalho\2026\00 - Dr Linkedin\Aplicativo\Final"
```

---

### Passo 2 — Subir o servidor

```
npx.cmd serve app -l 3000 --no-clipboard
```

Quando aparecer esta linha, está pronto:
```
INFO  Accepting connections at http://localhost:3000
```

---

### Passo 3 — Abrir no navegador

Acesse:
```
http://localhost:3000/App%20Dr.%20LinkedIn.html
```

> Deixe o terminal aberto enquanto navega. Fechar o terminal derruba o servidor.

---

### Passo 4 — Encerrar

No terminal, pressione **`Ctrl + C`**.

---

## Atalho: npm start

Se preferir um comando mais curto, também funciona:
```
npm start
```
> Requer que o terminal seja **Command Prompt** ou um **novo** PowerShell.
> Se der erro de política, use o comando completo do Passo 2.

---

## Problemas comuns

| Sintoma | Causa | Solução |
|---------|-------|---------|
| `ERR_CONNECTION_REFUSED` no navegador | Servidor não está rodando | Volte ao Passo 2 |
| `npm.ps1 não pode ser carregado` | Política do PowerShell | Use `npx.cmd serve app -l 3000 --no-clipboard` |
| Página abre mas telas somem | Arquivo `site/` desatualizado | Fale com Claude Code |
| Porta 3000 já em uso | Outro processo usando a porta | Troque por `-l 3001` e acesse na porta 3001 |

---

## Estrutura rápida do projeto

```
Final/
├── app/                     ← o app em si
│   ├── App Dr. LinkedIn.html  ← entrada principal (navegador)
│   ├── app.jsx                ← lógica de navegação entre telas
│   ├── screens/                ← as 5 telas do app
│   │   ├── home.jsx
│   │   ├── consultoria.jsx
│   │   ├── livro.jsx
│   │   ├── sobre.jsx
│   │   └── contato.jsx
│   ├── components/             ← peças reutilizáveis (ícones, tabbar)
│   ├── assets/                 ← imagens e ícones
│   └── styles.css              ← visual do app
├── site/                    ← cópia usada pelo Android/iOS (Capacitor)
├── android/                 ← projeto Android (para gerar APK/AAB)
├── ios/                     ← projeto iOS
├── docs/                    ← documentação e guias de publicação
├── scripts/                 ← scripts geradores (ícones, capa, screenshots)
├── builds/                  ← pacotes .aab/.7z gerados localmente
└── brand/                   ← logos, imagens de referência, material de marca
```

---

## Quando fizer alterações nos arquivos

Se editar qualquer arquivo em `app/screens/`, `app/components/`, `app/app.jsx` ou `app/styles.css`:

**1. Copiar para `site/`** (mantém o Android atualizado):
```
npx.cmd cap sync android
```

**2. Recarregar o navegador** — as mudanças aparecem automaticamente com `F5`.

---

## Para publicar na Play Store (quando chegar a hora)

O guia completo está em:
```
docs/Documentacao/Guia-Google-Play-Store.md
```
