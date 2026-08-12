# Publicar no Google Play — Do zero

## Etapa 1 — Criar conta de desenvolvedor Google Play

1. Acesse **play.google.com/console**
2. Faça login com uma conta Google (pode ser a sua pessoal ou criar uma específica para o app)
3. Clique em **"Começar"**
4. Pague a **taxa única de US$ 25** (cartão de crédito/débito internacional)
5. Preencha os dados do desenvolvedor:
   - Nome do desenvolvedor (ex: "Alessandro Feijó" ou "Dr. LinkedIn")
   - E-mail de contato público
   - Telefone (para verificação)
6. Aguarde a **verificação de identidade** — pode levar até 48h, mas normalmente é imediato

---

## Etapa 2 — Gerar o APK/AAB do app

Com a conta criada, você precisa gerar o arquivo do app para upload. No projeto, rode:

```bash
# 1. Sincronizar os arquivos web com o Android
npx cap sync android

# 2. Abrir no Android Studio
npx cap open android
```

No **Android Studio**:
- Menu **Build → Generate Signed Bundle / APK**
- Escolha **Android App Bundle (.aab)** — obrigatório para Google Play
- Crie uma **keystore** (chave de assinatura) — guarde esse arquivo com segurança, você precisará dele sempre
- Gere o arquivo `.aab`

---

## Etapa 3 — Criar o app no Play Console

1. No Play Console, clique em **"Criar app"**
2. Preencha:
   - Nome: `Dr. LinkedIn`
   - Idioma padrão: Português (Brasil)
   - Tipo: App
   - Grátis ou pago: Grátis
3. Aceite as políticas e clique em **Criar**

---

## Etapa 4 — Preencher as informações do app

O Play Console vai pedir uma série de informações antes de permitir o envio:

**Ficha da loja** (o que o usuário vê):
- Descrição curta (80 caracteres)
- Descrição completa (4.000 caracteres)
- Screenshots (mínimo 2, tamanho específico)
- Ícone de alta resolução (512x512 PNG) — já disponível em `app/assets/icon-512.png`
- Imagem de capa (1024x500)

**Classificação de conteúdo:**
- Responder questionário para definir a faixa etária

**Política de privacidade:**
- URL obrigatória — precisa criar uma página simples com a política

**Público-alvo e conteúdo:**
- Definir faixa etária do público

---

## Etapa 5 — Upload e revisão

1. Vá em **Produção → Criar nova versão**
2. Faça upload do arquivo `.aab`
3. Escreva as notas da versão (ex: "Versão inicial do Dr. LinkedIn")
4. Clique em **Revisar versão → Enviar para produção**

A revisão do Google leva normalmente **3 a 7 dias** na primeira publicação.

---

## Pré-requisitos

| Item | Onde conseguir |
|------|----------------|
| Cartão internacional (US$ 25) | Banco / cartão de crédito |
| Android Studio instalado | developer.android.com/studio |
| Java JDK 17+ | adoptium.net |
| Política de privacidade (URL pública) | Criar uma página simples |
| Screenshots do app | Tirar do simulador ou do device frame |
