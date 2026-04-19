# Dr. LinkedIn — App Mobile (PWA)

App-hub da marca **Dr. LinkedIn** (Alessandro Feijó). Protótipo HTML/React com 5 telas e suporte PWA (instalável, funciona offline).

## Estrutura

```
App Dr. LinkedIn.html      # Entrypoint
manifest.webmanifest       # PWA manifest
service-worker.js          # Cache offline
styles.css                 # Design system (navy + dourado)
app.jsx                    # Shell: device frame + navegação
components/
  icons.jsx                # Ícones SVG
  tabbar.jsx               # Tab bar inferior
screens/
  home.jsx                 # Hero rotativo (3 variantes)
  consultoria.jsx          # 4 planos → WhatsApp
  livro.jsx                # Livro → Amazon
  sobre.jsx                # Missão, 5 pilares
  contato.jsx              # Canais e info
assets/
  alessandro-*.png         # 3 fotos do hero
  book-cover.png           # Capa do livro
  icon-*.png               # Ícones PWA
```

## Links ativos

- **Plataforma** (Canva): `drlinkedin.my.canva.site`
- **Amazon livro**: `B0GKJG5VF1`
- **WhatsApp**: `(71) 99413-3180` (mensagens pré-preenchidas por plano)
- **LinkedIn/Instagram/Website/E-mail**: todos os canais oficiais

## Rodar localmente

Precisa servir via HTTP (service worker não funciona em `file://`):

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Acesse `http://localhost:8080/App%20Dr.%20LinkedIn.html`.

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
