# Dr. LinkedIn — App Mobile (PWA)

App-hub da marca **Dr. LinkedIn** (Alessandro Feijó). Protótipo HTML/React com 5 telas e suporte PWA (instalável, funciona offline).

## Estrutura

```
app/
  App Dr. LinkedIn.html    # Entrypoint
  manifest.webmanifest     # PWA manifest
  service-worker.js        # Cache offline
  styles.css               # Design system (navy + dourado)
  app.jsx                  # Shell: device frame + navegação
  components/
    icons.jsx              # Ícones SVG
    tabbar.jsx              # Tab bar inferior
  screens/
    home.jsx                # Hero rotativo (3 variantes)
    consultoria.jsx         # 4 planos → WhatsApp
    livro.jsx               # Livro → Amazon
    sobre.jsx               # Missão, 5 pilares
    contato.jsx             # Canais e info
  assets/
    alessandro-*.png        # 3 fotos do hero
    book-cover.png          # Capa do livro
    icon-*.png              # Ícones PWA
site/                     # Cópia usada pelo Capacitor (Android/iOS)
android/ · ios/           # Projetos nativos
docs/                     # Documentação e guias de publicação
scripts/                  # Scripts geradores (ícones, capa, screenshots)
builds/                   # Pacotes .aab/.7z gerados localmente
brand/                    # Logos e material de marca
```

## Links ativos

- **Plataforma (SSI)**: `www.linkedin.com/sales/ssi`
- **Amazon livro**: `B0GTYRKXGJ` (versão física + e-book)
- **WhatsApp**: `(31) 97186-3031` (mensagens pré-preenchidas por plano)
- **LinkedIn/Instagram/Website/E-mail**: todos os canais oficiais

## Rodar localmente

Precisa servir via HTTP (service worker não funciona em `file://`):

```bash
# Python
cd app && python3 -m http.server 8080

# Node
npx serve app
```

Acesse `http://localhost:8080/App%20Dr.%20LinkedIn.html`. Guia completo em [`docs/COMO-SUBIR.md`](docs/COMO-SUBIR.md).

## Próxima fase — empacotamento nativo (Capacitor)

Para publicar na Google Play e App Store, embrulhar este PWA com [Capacitor](https://capacitorjs.com):

```bash
npm init @capacitor/app
npx cap add ios
npx cap add android
# apontar webDir para esta pasta
npx cap sync
npx cap open ios       # precisa Mac + Xcode
npx cap open android   # Android Studio
```

**Bundle ID sugerido**: `com.drlinkedin.app`

### Recomendações para evitar rejeição da Apple
- Adicionar notificações push (Capacitor Push Notifications plugin)
- Adicionar compartilhamento nativo (Capacitor Share plugin)
- Splash screen animada com branding

## Identidade visual

- **Cores**: Navy `#0F1B2E` + Dourado `#D4A53A`
- **Tipografia**: Cormorant Garamond (títulos) + Inter (corpo)
- **Tema**: Executivo / concierge premium

## Contato do projeto

Cliente: Alessandro Feijó (Dr. LinkedIn) · contato@drlinkedin.com.br
