## Приступая к работе

### Git

Проект можно скачать напрямую или клонировать используя <code>**git clone URL**</code>

```bash
git clone https://github.com/Sade216/cyberia_test.git
```

### Установка зависимостей

Перед первым запуском необходимо установить все использующиеся зависимости в проекте. Для этого в корне проекта используем следующую команду.

```bash
npm install
# или
yarn install
# или
pnpm install
# или
bun install
```

### .env

Для начала работы необходимо обозначить **env** переменные. Для этого в корне проекта необходимо создать файл <code>**.env**</code> и указать следующие значения:

```bash
API_URL = "URL_сервера"
```

***

## Запуск проекта

Запуск dev сервера:

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```

Теперь сервер запущен по адресу [http://localhost:3000](http://localhost:3000) (В случае если порт **3000** занят, он автоматически измениться на другой доступный, об этом так же будет указано при запуске проекта).


***

## Ссылки:
[Next.js](https://nextjs.org) проект, развернутый при помощи - [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
<br/>
[Zod](https://zod.dev/).
<br/>
[Redux](https://redux.js.org/introduction/getting-started).
<br/>
[Redux Toolkit](https://redux.js.org/introduction/why-rtk-is-redux-today).
<br/>
[axios](https://axios-http.com/docs/intro).


