---
layout: home

title: Next.js

hero:
  name: Next.js
  text: React Web框架
  tagline: Next.js被世界上一些最大的公司使用，使您能够使用React组件创建高质量的web应用程序
  actions:
    - theme: brand
      text: 开始
      link: /appRouter/getting-started
    - theme: alt
      text: 查看GitHub
      link: https://github.com/vercel/next.js
  image:
    src: /logo.svg
    alt: Next.js

features:
  - icon: 📝
    title: 内置优化
    details: 自动图像、字体和脚本优化，以改进用户体验和核心Web Vitals

  - icon:
      src: /html5.svg
    title: 动态HTML流
    details: 即时从服务器流式传输UI，与App Router和React Suspense集成

  - icon:
      src: /react.svg
    title: React服务器组件
    details: 添加组件而不发送额外的客户端JavaScript。基于最新的React功能构建

  - icon: 🚀
    title: 数据获取
    details: 使您的React组件异步，并等待您的数据。Next.js同时支持服务器和客户端数据提取

  - icon:
      src: /css.webp
    title: CSS支持
    details: 使用您喜欢的工具设计应用程序的样式，包括对CSS模块、Tailwind CSS和流行的社区库的支持

  - icon:
      src: /side-render.webp
    title: 客户端和服务端双端渲染
    details: 灵活的渲染和缓存选项，包括每页级别的增量静态再生（ISR）

  - icon:
      src: /server-actions.webp
    title: Server Actions
    details: 通过调用函数运行服务器代码，跳过API。然后，在一次网络往返中轻松地重新验证缓存的数据并更新您的UI

  - icon:
      src: /route.svg
    title: 路由操作
    details: 构建API端点，以便与第三方服务安全连接，以处理身份验证或监听webhook

  - icon:
      src: /advance-route.svg
    title: 高级路由和嵌套布局
    details: 使用文件系统创建路由，包括支持更高级的路由模式和UI布局

  - icon:
      src: /middleware.svg
    title: 中间件
    details: 控制传入的请求。使用代码定义用于身份验证、实验和国际化的路由和访问规则。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
