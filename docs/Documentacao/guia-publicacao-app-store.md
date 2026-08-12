# Guia de Publicação — Dr. LinkedIn na Apple App Store

## Visão Geral

| Item | Valor |
|---|---|
| Nome do app | Dr. LinkedIn |
| Bundle ID | com.drlinkedin.app (mesmo do Android) |
| Conta Apple Developer | Ainda não criada — usar o Gmail de Alessandro (alessandrofvbh@gmail.com) como Apple ID |
| Tipo de inscrição | Individual (não Organização — mais rápido, sem D-U-N-S) |
| Repositório GitHub | https://github.com/sauloprado/Dr-Linkedin |

---

## Diferenças-chave em relação ao Google Play

1. **Custo recorrente:** US$ 99/ano (Google foi taxa única de US$ 25).
2. **Build exige macOS/Xcode.** Resolvido via GitHub Actions com runner `macos-latest` (workflow `Build IPA`) — não precisa de um Mac físico.
3. **Revisão manual**, geralmente 1–3 dias úteis, mais rigorosa que a do Google.

---

## Pré-requisitos (só o usuário/Alessandro pode fazer)

1. Criar Apple ID em [appleid.apple.com](https://appleid.apple.com) usando o Gmail de Alessandro
2. Inscrever no Developer Program em [developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll) — escolher **Individual**, pagar US$ 99/ano
3. Aguardar aprovação (24–48h típico para conta Individual)

Sem isso concluído, os passos abaixo (App ID, certificados, App Store Connect) não podem ser feitos.

---

## Infraestrutura já pronta (reaproveitada do Android)

- **GitHub Pages / Política de Privacidade:** `https://sauloprado.github.io/Dr-Linkedin/politica-de-privacidade.html` — mesma URL serve para os dois apps
- **Projeto Xcode:** já existe em `ios/App` (gerado pelo Capacitor via `npx cap add ios`)
- **Bundle ID:** `com.drlinkedin.app` — mesmo identificador do Android, mantém consistência de marca

---

## Passo a passo técnico (depois que a conta Apple for aprovada)

### 1. App ID
Em **Certificates, Identifiers & Profiles** → Identifiers → criar App ID `com.drlinkedin.app`.

### 2. Certificado de Distribuição
Gerar um certificado **Apple Distribution** (.cer), exportar como **.p12** (com senha) a partir do Keychain Access (ou via `openssl`).

### 3. Provisioning Profile
Criar um **App Store** provisioning profile vinculado ao App ID acima.

### 4. App Store Connect API Key
Em App Store Connect → **Users and Access → Integrations → App Store Connect API** → gerar uma chave (.p8) com acesso "App Manager". Isso permite ao GitHub Actions enviar builds ao TestFlight sem login interativo (nem 2FA).

### 5. GitHub Secrets a configurar
| Secret | Descrição |
|---|---|
| `APPLE_CERTIFICATE_BASE64` | Certificado .p12 codificado em base64 |
| `APPLE_CERTIFICATE_PASSWORD` | Senha do .p12 |
| `APPLE_PROVISIONING_PROFILE_BASE64` | Provisioning profile (.mobileprovision) em base64 |
| `APPLE_PROVISIONING_PROFILE_NAME` | Nome exato do profile (definido ao criá-lo) |
| `APPLE_TEAM_ID` | Team ID da conta Apple Developer (10 caracteres, visível no Developer Portal) |
| `KEYCHAIN_PASSWORD` | Senha qualquer, só para o keychain temporário do runner (não é senha da Apple) |
| `APPSTORE_API_KEY_ID` *(opcional, para upload automático)* | Key ID da API Key do App Store Connect |
| `APPSTORE_ISSUER_ID` *(opcional)* | Issuer ID da API Key |
| `APPSTORE_API_KEY_BASE64` *(opcional)* | Arquivo .p8 da API Key, em base64 |

### 6. Criar o app no App Store Connect
Em [appstoreconnect.apple.com](https://appstoreconnect.apple.com) → My Apps → **+** → New App, usando o Bundle ID já registrado.

### 7. Rodar o workflow
```
gh workflow run build-ipa.yml --repo sauloprado/Dr-Linkedin
```
Gera o `.ipa` como artefato do GitHub Actions (mesmo fluxo do `app-release-vXXX.aab` do Android). Se os secrets opcionais de API Key estiverem configurados e o passo "Upload to TestFlight" for habilitado (`if: false` → `if: true` no workflow), o envio ao TestFlight acontece automaticamente dentro do próprio CI — não precisa de Mac nem do app Transporter.

---

## Pendência técnica resolvida: ícone com canal alfa

O ícone em `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` (1024×1024) já é gerado achatado sobre fundo branco opaco (sem canal alfa), evitando a rejeição da Apple no App Store Connect.

---

## Assets — Screenshots

Script pronto: `generate-screenshots-ios.mjs` (mesmo princípio do `generate-screenshots.mjs` do Android, via Puppeteer contra o servidor local).

| Classe de tela | Pasta gerada | Resolução | Obrigatório? |
|---|---|---|---|
| iPhone 6.9" (16/15 Pro Max) | `app/assets/screenshots-ios/6.9-iphone/` | 1320×2868 | Sim |
| iPhone 6.7"/6.5" (14/15 Plus) | `app/assets/screenshots-ios/6.7-iphone/` | 1290×2796 | Sim |
| iPad 13" | `app/assets/screenshots-ios/13-ipad/` | 2064×2752 | Só se o app suportar iPad |

> Apple ajusta esses tamanhos de tempos em tempos (novos modelos de iPhone/iPad). **Confirmar os valores exatos exigidos dentro do App Store Connect** no momento do upload, antes de gerar as imagens finais.

Para gerar (com o servidor local rodando em `localhost:3000`):
```
node generate-screenshots-ios.mjs
```

---

## Ficha do App Store Connect

Conteúdo completo (nome, subtítulo, descrição, keywords, categoria, App Privacy) em:
```
Documentacao/ficha-app-store.md
```

---

## Checklist de Publicação

### Concluído
- [x] Projeto Xcode (`ios/App`) já existe via Capacitor
- [x] Bundle ID definido (`com.drlinkedin.app`)
- [x] Política de Privacidade reaproveitável (GitHub Pages já ativo)
- [x] Ficha adaptada para os campos do App Store Connect
- [x] Workflow `build-ipa.yml` criado (pausado até secrets de assinatura)
- [x] Script de screenshots iOS criado

### Pendente
- [ ] Apple ID + inscrição no Developer Program (Individual, US$ 99/ano)
- [ ] App ID, certificado de distribuição e provisioning profile
- [ ] App Store Connect API Key (para upload automático opcional)
- [ ] Configurar os GitHub Secrets listados acima
- [ ] Corrigir o ícone 1024×1024 (remover canal alfa)
- [ ] Gerar screenshots iOS definitivos (confirmar resoluções exatas no App Store Connect)
- [ ] Criar o app no App Store Connect
- [ ] Rodar `build-ipa.yml`, validar o `.ipa`, enviar ao TestFlight
- [ ] Preencher classificação etária e App Privacy
- [ ] Enviar para revisão da Apple

---

## Referências

- App Store Connect: https://appstoreconnect.apple.com
- Developer Portal: https://developer.apple.com/account
- Repositório: https://github.com/sauloprado/Dr-Linkedin
- Política de Privacidade: https://sauloprado.github.io/Dr-Linkedin/politica-de-privacidade.html
