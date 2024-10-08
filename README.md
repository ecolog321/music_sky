This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Открыть приложение

Вы можете открыть браузер по адресу [http://localhost:3000](http://localhost:3000).

## Функциональность
Для взаимодействия доступны следующие страницы:

1. Главная ["/tracks"]:
    — здесь можно увидеть спискок всех треков в приложении;
    — прослушать любой трек на экране;
    — переключать вперед и назад, ставить на паузу, перемешивать список треков или закицливать трек;
    — есть функционал поисковой строки, фильтры по автору, жанру или новизне;
    — добавление трека в избранное - только авторизованному пользователю;
    — просмотр подборок треков в sidebar;

2. Страница регестрации ["/singup"]:
    — регистрация нового пользователя с почтой и паролем;

3. Страница входа ["/singin"]:
    — войти в уже имеющийся аккаунт приложения;

4. Страница избранных треков ["/tracks/favorite"]:
    — только для авторизованных пользователей;
    — здесь можно увидеть спискок избранных треков (поставлено "сердечко");

5. Страница подробок ["/tracks/category/ID"]:
    — здесь можно список треков определенной тематики;