# Rotação da senha do keystore — Dr. LinkedIn

**Status:** executado em 2026-07-20. Senha rotacionada, `build.gradle` corrigido (não hardcoda mais senha),
secrets do GitHub atualizados, build de release testado com sucesso no CI. Histórico do git limpo da senha antiga.

**Contexto:** a senha antiga ficou exposta no histórico público do GitHub (via `build.gradle`).
O **arquivo** do keystore (`drlinkedin-release.keystore`) **nunca** foi versionado — só a senha vazou.

> A chave de assinatura NÃO muda com esse processo. Portanto **nada precisa ser feito no Google Play Console.**
> Seus próximos AABs continuam sendo aceitos com a mesma chave/certificado.

Rode tudo abaixo no PowerShell, dentro da pasta do projeto:
`cd "C:\Users\saulo.prado\OneDrive\Área de Trabalho\2026\00 - Dr Linkedin\Aplicativo\Final"`

Escolha uma senha nova forte (chame de `NOVA_SENHA` abaixo). Use a MESMA para store e key para manter simples.

---

## 1. Fazer backup do keystore (segurança)
```powershell
Copy-Item android\app\drlinkedin-release.keystore android\app\drlinkedin-release.keystore.bak
```

## 2. Trocar a senha do keystore (store password)
```powershell
keytool -storepasswd -keystore android\app\drlinkedin-release.keystore
```
Vai pedir: **senha atual** (a senha antiga, já rotacionada) → **nova senha** → **confirmar nova senha**.

## 3. Trocar a senha da chave (key password)
```powershell
keytool -keypasswd -alias drlinkedin -keystore android\app\drlinkedin-release.keystore
```
Vai pedir: **senha do keystore** (já a NOVA, do passo 2) → **senha atual da chave** (a senha antiga, já rotacionada) → **nova senha da chave** → **confirmar**.

> **Nota de execução:** para keystores PKCS12 (padrão do keytool moderno), `-keypasswd` não é suportado —
> store password e key password são sempre iguais. Trocar a senha do passo 2 já resolve as duas.

## 4. Verificar que o keystore abre com a nova senha
```powershell
keytool -list -v -keystore android\app\drlinkedin-release.keystore
```
Deve listar o alias `drlinkedin` sem erro. Anote/compare o **SHA-256 fingerprint** — ele NÃO deve mudar (prova de que a chave é a mesma).

## 5. Atualizar o `keystore.properties` local (NÃO versionado)
Edite `android\keystore.properties` e troque as duas linhas de senha:
```
storePassword=NOVA_SENHA
keyPassword=NOVA_SENHA
keyAlias=drlinkedin
storeFile=drlinkedin-release.keystore
```

## 6. Regerar o base64 para o secret do GitHub
O arquivo mudou ao trocar a senha, então o `KEYSTORE_BASE64` precisa ser regenerado:
```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("android\app\drlinkedin-release.keystore")) | Out-File -Encoding ascii keystore.b64.txt
```
Abra `keystore.b64.txt`, copie TODO o conteúdo (é o novo valor do secret). **Apague esse arquivo depois de usar.**

## 7. Atualizar os secrets no GitHub
Repositório → **Settings → Secrets and variables → Actions**. Atualize:
- `KEYSTORE_PASSWORD` → NOVA_SENHA
- `KEY_PASSWORD` → NOVA_SENHA
- `KEYSTORE_BASE64` → conteúdo do `keystore.b64.txt`
- `KEY_ALIAS` → `drlinkedin` (não muda, só confira)

## 8. Testar
- Rode o workflow de build (`build-aab.yml`) no GitHub e confirme que a assinatura passa.
- Ou build local: `cd android && .\gradlew.bat bundleRelease`

## 9. Limpeza
```powershell
Remove-Item keystore.b64.txt
Remove-Item android\app\drlinkedin-release.keystore.bak   # só depois de confirmar que tudo funciona
```

---

## (Opcional, mais forte) Apagar a senha antiga do histórico do git
A senha antiga continua visível em commits antigos. Trocá-la (acima) já a torna inútil.
Se quiser remover do histórico também, use `git filter-repo` ou o BFG Repo-Cleaner — isso **reescreve o histórico** e exige `git push --force`. Faça só com backup e avisando quem mais usa o repo. Posso te orientar nisso separadamente.
