# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## 開発環境  
next.js 13 [document](https://nextjs.org/blog/next-13)  
node バージョン: v19.0.1  
npm  バージョン: 8.19.2  
typescript バージョン: "4.9.4"  
構築コマンド: "npx create-next-app -e with-tailwindcss my-app2"  

## Next.js13の気付き  
"generateStaticParams()"でbuild時にページを作成することができる。ページ数の指定もできる。  
fetchオプションの"{ cache: 'no-store' }"はリクエストがあれば毎度動作する  
fetchオプションの"デフォルト"はbuild時に
propsを必要としていないfetch処理,<Link/>での遷移先のページの読み込み＋リクエスト時に残りの処理を自動で最適化し、
実行cashの使用により、スクロールに合わせたデータ取得が自動でできる   
fetchオプションの"{ next: { revalidate: 10 } }"は指定した秒数毎にいいタイミングで(ページ遷移などのアクション時に)  
再度リクエストしてくれる(常に正しいバージョンを提供できる)  
デフォルト設定との違いがよくわからない。  



## チュートリアルで使用したツール
[youtube1](https://www.youtube.com/watch?v=6aP9nyTcd44)  
[youtube2](https://www.youtube.com/watch?v=dvRLrsPGqto&t=1475s)  
[Google Search API](https://serpapi.com/)  
[JSONPlaceholder](https://jsonplaceholder.typicode.com/)