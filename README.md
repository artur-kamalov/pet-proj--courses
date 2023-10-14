In developing

Этот проект был создан в целях обучения

This project was created in educational purposes

## Getting Started

.env file example 

В качестве СУБД использовалась MySQL, вы можете создать свою базу данных с помощью MySQL workbench

Using MySQL fro this proj, you can create tour own db with MySQL workbench

DATABASE_URL="mysql://username:dbpassword:dbhost/dbname"

После создания базы данных и добавления DATABASE_URL в .env, используйте команду "npx prisma db push" для добавления таблиц в базу данных

After creating db and adding DATABASE_URL in .env use command "npx prisma db push" to craete tables in your db
# CREDENTIALS

Реквизиты для входа должны быть сгенирированы с помощью Google cloud

Google credentials must be generated with google cloud

GOOGLE_CLIENT_ID=""

GOOGLE_SECRET=""

NEXTAUTH_SECRET="anySecret"

NEXTAUTH_URL="http://localhost:3000/"


Реквизиты для библиотеки uploadthing, бесплатна для пользования и хранения до файлов общим размеров до 2гб.
Библиотека используется для загрузки файлов, видео в том числе.

Credentials for the uploadthing library, free for use and storage of up to files with a total size of up to 2GB.
The library is used to download files, videos included.

UPLOADTHING_SECRET="sk_live_" | начинается с sk_live_ / starts with sk_live_

UPLOADTHING_APP_ID=""


Теперь вы можете протестировать данный проект 

Now you can test this project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
