# Next.js 项目结构

此页面提供 Next.js 应用程序的项目结构概述。它涵盖了`app`和`pages`中的顶级文件和文件夹、配置文件以及路由约定。

单击文件和文件夹名称以了解有关每个约定的详细信息。

## 顶级目录

顶级文件夹用于组织应用程序的代码和静态资产。

![alt top-level-folders.png](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftop-level-folders.png&w=1920&q=75&dpl=dpl_DCtH3CdUprp1CVB8tivKY8y2wMuB)

| 目录        | 详情                 |
| ----------- | -------------------- |
| [app](/)    | App Router           |
| [pages](/)  | Pages Router         |
| [public](/) | 静态资源             |
| [src](/)    | 资源应用文件（可选） |

## 顶级文件

顶级文件用于配置应用程序、管理依赖关系、运行中间件、集成监控工具和定义环境变量。

| 文件                    | 详情                                  |
| ----------------------- | ------------------------------------- |
| [next.config.js](/)     | Next.js 配置文件                      |
| [package.json](/)       | 项目依赖和脚本                        |
| [instrumentation.ts](/) | OpenTelemetry 和 Instrumentation 文件 |
| [middleware.ts](/)      | Next.js 请求中间件                    |
| [.env](/)               | 环境变量                              |
| [.env.local](/)         | 本地环境变量                          |
| [.env.production`](/)   | 生产环境变量                          |
| [.env.development](/)   | 开发环境变量                          |
| [.eslintrc.json](/)     | ESLint 配置文件                       |
| `.gitignore`            | Git 忽略文件和文件夹                  |
| `next-env.d.ts`         | Next.js TypeScript 声明文件           |
| `tsconfig.json`         | TypeScript 配置文件                   |
| `jsconfig.json`         | JavaScript 配置文件                   |

## `app` 路由约定

以下文件约定用于定义路由并处理`app`路由中的元数据。

### 路由文件

| 名称              | 后缀                | 详情             |
| ----------------- | ------------------- | ---------------- |
| [layout](/)       | `.js` `.jsx` `.tsx` | 布局             |
| [page](/)         | `.js` `.jsx` `.tsx` | 页面             |
| [loading](/)      | `.js` `.jsx` `.tsx` | 加载页面         |
| [not-found](/)    | `.js` `.jsx` `.tsx` | 页面找不到页面   |
| [error](/)        | `.js` `.jsx` `.tsx` | 错误处理页面     |
| [global-error](/) | `.js` `.jsx` `.tsx` | 全局错误处理页面 |
| [route](/)        | `.js` `.jsx`        | API 端点         |
| [template](/)     | `.js` `.jsx` `.tsx` | 复用布局         |
| [default](/)      | `.js` `.jsx` `.tsx` | 平行路由兜底页面 |

### 嵌套路由

| 名称               | 详情     |
| ------------------ | -------- |
| [folder](/)        | 路由     |
| [folder/folder](/) | 嵌套路由 |

### 动态路由

| 名称               | 详情         |
| ------------------ | ------------ |
| [[folder]](/)      | 动态路由     |
| [[...folder]](/)   | 通配路由     |
| [[[...folder]]](/) | 可选通配路由 |

### 平行和拦截路由

| 名称                | 详情       |
| ------------------- | ---------- |
| [@folder](/)        | 命名插槽   |
| [(.)folder](/)      | 拦截同级   |
| [(..)folder](/)     | 拦截上一级 |
| [(..)(..)folder](/) | 拦截上两级 |
| [(...)folder](/)    | 从根部拦截 |

## 元数据文件约定

### 应用图标

| 名称            | 后缀                                | 详情               |
| --------------- | ----------------------------------- | ------------------ |
| [favicon](/)    | `.ico`                              | Favicon 文件       |
| [icon](/)       | `.ico` `.jpg` `.jpeg` `.png` `.svg` | App 图标文件       |
| [icon](/)       | `.js` `.ts` `.tsx`                  | App 图标生成方法   |
| [apple-icon](/) | `.jpg` `.jpeg` `.png`               | Apple 图标文件     |
| [apple-icon](/) | `.js` `.ts` `.tsx`                  | Apple 图标生成方法 |

### SEO

| 名称         | 后缀        | 详情                 |
| ------------ | ----------- | -------------------- |
| [sitemap](/) | `.xml`      | Sitemap 文件         |
| [sitemap](/) | `.js` `.ts` | Sitemap 文件生成方法 |
| [robots](/)  | `.txt`      | Robots 文件          |
| [robots](/)  | `.js` `.ts` | Robots 文件生成方法  |

## `pages` 路由约定

[pages](/)路由使用以下文件约定来定义路由。

### 特殊文件

| 名称            | 后缀                | 详情            |
| --------------- | ------------------- | --------------- |
| [\_app](/)      | `.js` `.jsx` `.tsx` | 自定义 App      |
| [\_document](/) | `.js` `.jsx` `.tsx` | 自定义 document |
| [\_error](/)    | `.js` `.jsx` `.tsx` | 自定义错误页面  |
| [404](/)        | `.js` `.jsx` `.tsx` | 404 错误页面    |
| [500](/)        | `.js` `.jsx` `.tsx` | 500 错误页面    |

### 路由文件

#### 文件夹约定

| 名称              | 后缀                | 详情     |
| ----------------- | ------------------- | -------- |
| [index](/)        | `.js` `.jsx` `.tsx` | 主页     |
| [folder/index](/) | `.js` `.jsx` `.tsx` | 嵌套页面 |

#### 文件约定

| 名称       | 后缀                | 详情     |
| ---------- | ------------------- | -------- |
| [index](/) | `.js` `.jsx` `.tsx` | 主页     |
| [file](/)  | `.js` `.jsx` `.tsx` | 嵌套页面 |

### 动态路由

#### 文件夹约定

| 名称                     | 后缀                | 详情         |
| ------------------------ | ------------------- | ------------ |
| [[folder]/index](/)      | `.js` `.jsx` `.tsx` | 动态路由     |
| [[...folder]/index](/)   | `.js` `.jsx` `.tsx` | 通配路由     |
| [[[...folder]]/index](/) | `.js` `.jsx` `.tsx` | 可选通配路由 |

#### 文件约定

| 名称           | 后缀                | 详情         |
| -------------- | ------------------- | ------------ |
| [file](/)      | `.js` `.jsx` `.tsx` | 动态路由     |
| [...file](/)   | `.js` `.jsx` `.tsx` | 通配路由     |
| [[...file]](/) | `.js` `.jsx` `.tsx` | 可选通配路由 |
