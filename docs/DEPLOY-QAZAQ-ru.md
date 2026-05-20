# Как выложить Qazaq Wallet в интернет (для отзывов и AI)

Три способа — от «быстро показать другу» до «постоянная ссылка».

---

## 1. Постоянная ссылка — GitHub Pages (бесплатно)

Подходит, чтобы **люди и боты** открывали сайт по URL без вашего компьютера.

### Шаг A — репозиторий на GitHub

1. Зарегистрируйтесь на [github.com](https://github.com).
2. **New repository** → имя, например `qazaq-wallet` → **Create** (без README, если проект уже локально).
3. В PowerShell в папке проекта:

```powershell
cd C:\Users\User\Documents\qazaq-wallet
git init
git add .
git commit -m "Qazaq Wallet: Kazakh UI and branding"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/qazaq-wallet.git
git push -u origin main
```

(Замените `ВАШ_ЛОГИН` и имя репозитория.)

### Шаг B — включить Pages

1. На GitHub: репозиторий → **Settings** → **Pages**.
2. **Build and deployment** → Source: **GitHub Actions**.

### Шаг C — запустить деплой

1. Вкладка **Actions** → workflow **「Qazaq Wallet — GitHub Pages」**.
2. **Run workflow** → Run.
3. Через 5–15 минут в том же run появится ссылка вида:

`https://ВАШ_ЛОГИН.github.io/qazaq-wallet/`

**Эту ссылку** можно слать друзьям, в чаты и AI («открой URL и оцени дизайн»).

При каждом `git push` в `main` сайт обновится сам.

---

## 2. Быстро на 1–2 часа — туннель с вашего ПК

Пока запущен `yarn workspace @tonkeeper/web dev` на порту 5173:

```powershell
npx --yes localtunnel --port 5173
```

В терминале появится URL вида `https://xxxx.loca.lt` — отдайте его для просмотра.  
Пока вы не закрыли терминал и dev-сервер, ссылка работает.

---

## 3. Cloudflare Pages (как у Tonkeeper)

Если есть аккаунт [Cloudflare](https://dash.cloudflare.com):

```powershell
cd C:\Users\User\Documents\qazaq-wallet
yarn
yarn workspace @tonkeeper/locales build
yarn build:web
npx wrangler pages deploy apps/web/dist --project-name=qazaq-wallet
```

Первый раз: `npx wrangler login`.

---

## 4. Vercel (qazaq-wallet.vercel.app)

В **Project Settings → General**:

| Поле | Значение |
|------|----------|
| Root Directory | `./` |
| Build Command | `yarn build:web` |
| Output Directory | `apps/web/dist` |
| Node.js | 20.x |

`vercel.json` в корне уже задаёт install через `yarn workspaces focus` — **без** `wrangler`/`workerd`, чтобы не падать на `GLIBC_2.35`.

### Ошибка `workerd` / `GLIBC_2.35` при Install

Причина: пакет **wrangler** (Cloudflare) тянет бинарник `workerd`, которому нужна новая glibc, чем на образе Vercel.

**Решение (уже в репо):** `wrangler` только в `apps/twa`, для web — `yarn workspaces focus @tonkeeper/web ...`.

После правок локально:

```powershell
cd C:\Users\User\Documents\qazaq-wallet
yarn install --no-immutable
git add package.json vercel.json apps/twa/package.json yarn.lock
git commit -m "fix(vercel): skip wrangler/workerd on web install"
git push
```

Затем **Redeploy** в Vercel.

---

## Ссылка на код для AI (без деплоя)

Можно дать боту **URL репозитория**:

`https://github.com/ВАШ_ЛОГИН/qazaq-wallet`

И текст, например:

> Это форк Tonkeeper Web — Qazaq Wallet. Язык по умолчанию kk, тема в цветах флага Казахстана. Оцени UX и переводы в `packages/locales` и `apps/web/src/theme/`.

---

## Важно

- Это **демо-кошелёк**, не продакшен: не вносите большие суммы.
- Секретные фразы никому не показывайте.
- Лицензия Apache 2.0 от Tonkeeper — при публичном репо укажите, что проект основан на Tonkeeper Web.
