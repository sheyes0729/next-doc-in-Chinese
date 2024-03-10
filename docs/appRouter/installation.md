# 安装

系统配置需求：

- [Node.js 18.17](https://nodejs.org/en)或者更高版本
- 支持 macOS，windows(包括 WSL)和 Linux

## 自动安装

我们建议使用[create-next-app](/)启动一个新的 Next.js 应用程序，该应用程序会自动为您设置所有内容。要创建项目，请运行：

```sh
npx create-next-app@latest
```

在安装的过程中，你将看到一下选项：

```sh
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

在选择完后，`create-next-app`将根据您提供的名称创建项目，然后安装相关的依赖。

如果你刚接触 Next.js，请查看[项目结构](/)文档对您的应用可能存在的文件有一个大概的印象。

> 提示
>
> - Next.js 现在默认提供 [TypeScript](/)、[ESLint](/) 和 [Tailwind CSS](/) 配置。
> - 您能可选择性的使用`src`目录来分割您的代码

## 手动安装

手动创建一个 Next.js 项目，需要安装以下包：

```sh
npm install next@latest react@latest react-dom@latest
```

打开 package.json 文件，添加以下内容：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

不同的 script 代表应用开发的不同阶段：

- `dev`: 运行 [next dev](/)开启一个开发服务器，用于开发和调试
- `build`: 运行[next build](/)进行项目打包
- `start`: 运行[next start](/)开启一个生产环境的服务器
- `lint`: 运行[next lint](/)对应用程序进行代码检查

## 创建目录

Next.js 使用文件系统路由，这意味着应用程序中的路由由文件的结构决定。

### `app`目录

对于新应用程序，我们建议使用 App Router。该路由器允许您使用 React 的最新功能，是基于社区反馈的 Pages Router 的演变。

创建一个 `app/`文件夹，然后添加`layout.tsx` 和`page.tsx` 文件。这些将在用户访问应用程序的根目录（`/`）时呈现。

![alt app-getting-started](/app-getting-started.avif)

在`app/layout.tsx`文件中创建一个根布局，包括`html`和`body`:

```TypeScript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

最后，创建一个主页`app/page.tsx`：

```TypeScript
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

> 提示：如果忘记创建`layout.tsx`，当运行`next dev`时，Next.js 会自动创建该文件

### `pages`目录（可选）

如果你想使用`Pages Router`代替`App Router`，你可以在根目录创建一个`pages/`文件夹。
然后，在`pages`目录新建一个`index.tsx`文件。这将是你的应用程序的根路由（`/`）。

```TypeScript
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

接下来，在`pages/`目录下添加`_app.tsx`文件作为全局布局组件。

```TypeScript
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

最后，在`pages/`目录下添加`_document.tsx`文件来控制服务器的初始响应。

```TypeScript
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

了解更多关于[使用 Pages Router](/)

> 提示：尽管您能够在项目中同时使用两种路由模式，但是`app`目录下的路由优先级更高。我们推荐您在新项目中只是用一种路由避免冲突。

### `public`目录（可选）

创建一个公共文件夹来存储静态资产，如图像、字体等。然后，公共目录中的文件可以由代码从基本 URL（`/`）开始引用。

## 运行开发服务

1. 运行 `npm run dev`启动开发服务器
2. 访问 `http://localhost:3000`查看应用
3. 修改 `app/page.tsx`(或者`pages/index.tsx`)文件并保存，然后在您的浏览器中查看更新后的结果
