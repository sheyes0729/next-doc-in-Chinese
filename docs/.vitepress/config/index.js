import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-cmn-Hans",
  title: "首页",
  titleTemplate: ":title | Next.js中文文档",
  description: "Next.js中文文档",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess (code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "",
        href: "/favicon.ico",
      },
    ],
  ],
  themeConfig: {
    siteTitle: "Next.js中文文档",

    logo: { src: '/favicon.ico', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vercel/next.js' }
    ],

    search: {
      // provider: 'algolia',
      // options: {
      //   appId: '05U7WUMT5H',
      //   apiKey: '81dac9b377bb5117023174965f78db00',
      //   indexName: 'nextjs-doc-in-Chinese',
      //   locales: { ...enSearch }
      // }
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: '搜索文档...',
            buttonAriaLabel: '搜索文档...'
          },
          modal: {
            resetButtonTitle: "清空搜索",
            backButtonTitle: "返回",
            noResultsText: "未找到相关内容",
            displayDetails: "展示详情",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "选择",
              navigateText: "导航",
              navigateUpKeyAriaLabel: "向上",
              navigateDownKeyAriaLabel: "向下",
              closeText: "关闭",
              closeKeyAriaLabel: "关闭",
            }
          }
        }
      }
    },

    nav: createNav(),

    sidebar: {
      '/appRouter/': { base: '/appRouter/', items: createAppSidebar() },
      '/pagesRouter/': { base: '/pagesRouter/', items: createPagesSidebar() }
    },

    footer: {
      message: '基于MIT许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 溪叶`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
});

function createNav () {
  return [
    {
      text: '使用App Router',
      link: '/appRouter/getting-started',
      activeMatch: '/appRouter/'
    },
    // {
    //   text: '使用Pages Router',
    //   link: '/pagesRouter/getting-started',
    //   activeMatch: '/pagesRouter/'
    // },
  ]
}

function createAppSidebar () {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '快速开始', link: 'getting-started' },
        { text: '安装', link: 'installation' },
        { text: '项目结构', link: 'project-structure' },
      ]
    },
    {
      text: "构建应用",
      collapsed: false,
      items: [
        {
          text: "路由",
          collapsed: true,
          items: [
            {
              text: "路由定义",
              link: "build/route/defining-routes"
            },
            {
              text: "页面和布局",
              link: "build/route/pages-and-layouts"
            },
            {
              text: "链接与导航",
              link: "build/route/linking-and-navigation"
            },
            {
              text: "加载UI和流",
              link: "build/route/loading-UI-and-streaming"
            },
            {
              text: "错误处理",
              link: "build/route/error-handling"
            },
            {
              text: "重定向",
              link: "build/route/redirecting"
            },
            {
              text: "路由分组",
              link: "build/route/route-groups"
            },
            {
              text: "项目组织",
              link: "build/route/project-organization"
            },
            {
              text: "动态路由",
              link: "build/route/dynamic-routes"
            },
            {
              text: "平行路由",
              link: "build/route/parallel-routes"
            },
            {
              text: "拦截路由",
              link: "build/route/intercepting-routes"
            },
            {
              text: "路由处理器",
              link: "build/route/route-handlers"
            },
            {
              text: "中间件",
              link: "build/route/middleware"
            },
            {
              text: "国际化",
              link: "build/route/internationalization"
            },
          ]
        },
        {
          text: "数据获取",
          collapsed: true,
          items: [
            {
              text: "获取、缓存和重新验证",
              link: "build/dataFetching/fetching-caching-and-revalidating"
            },
            {
              text: "服务器操作和变体",
              link: "build/dataFetching/server-actions-and-mutations"
            },
            {
              text: "数据获取模式和最佳实践",
              link: "build/dataFetching/patterns-and-best-practices"
            },
          ]
        },
        {
          text: "渲染",
          collapsed: true,
          items: [
            {
              text: "服务端组件",
              link: "build/rendering/server-components"
            },
            {
              text: "客户端组件",
              link: "build/rendering/client-components"
            },
            {
              text: "组合模式",
              link: "build/rendering/composition-patterns"
            },
            {
              text: "边缘和Node.js运行时",
              link: "build/rendering/edge-and-nodejs-runtime"
            },
          ]
        },
        {
          text: "缓存",
          link: "build/caching"
        },
        {
          text: "样式",
          collapsed: true,
          items: [
            {
              text: "CSS模块",
              link: "build/styling/css-modules"
            },
            {
              text: "Tailwind CSS",
              link: "build/styling/tailwind-css"
            },
            {
              text: "CSS-in-JS",
              link: "build/styling/CSS-in-JS"
            },
            {
              text: "Sass",
              link: "build/styling/sass"
            },
          ]
        },
        {
          text: "优化",
          collapsed: true,
          items: [
            {
              text: "图片",
              link: "build/optimizing/images"
            },
            {
              text: "视频",
              link: "build/optimizing/videos"
            },
            {
              text: "字体",
              link: "build/optimizing/fonts"
            },
            {
              text: "元数据",
              link: "build/optimizing/meta-data"
            },
            {
              text: "脚本",
              link: "build/optimizing/scripts"
            },
            {
              text: "打包分析",
              link: "build/optimizing/bundle-analyzer"
            },
            {
              text: "懒加载",
              link: "build/optimizing/lazy-loading"
            },
            {
              text: "解析",
              link: "build/optimizing/analytics"
            },
            {
              text: "仪器",
              link: "build/optimizing/instrumentation"
            },
            {
              text: "开放性测试",
              link: "build/optimizing/open-telemetry"
            },
            {
              text: "静态资源",
              link: "build/optimizing/static-assets"
            },
            {
              text: "第三方库",
              link: "build/optimizing/third-party-libs"
            },
          ]
        },
        {
          text: "配置",
          items: [

          ]
        },
        {
          text: "测试",
          items: [

          ]
        },
        {
          text: "授权认证",
          items: [

          ]
        },
        {
          text: "部署",
          items: [

          ]
        },
        {
          text: "升级",
          items: [

          ]
        },
      ]
    },
    {
      text: "API参考",
      collapsed: false,
      items: [
        {
          text: "组件",
          collapsed: true,
          items: []
        },
        {
          text: "文件约定",
          collapsed: true,
          items: []
        },
        {
          text: "函数",
          collapsed: true,
          items: []
        },
        {
          text: "next.config.js配置选项",
          collapsed: true,
          items: []
        },
        {
          text: "create-next-app",
          link: ""
        },
        {
          text: "边缘函数",
          link: ""
        },
        {
          text: "Next.js CLI",
          link: ""
        },
      ]
    },
    {
      text: "结构",
      collapsed: false,
      items: [
        {
          text: "可访问性",
          link: ""
        },
        {
          text: "快速刷新",
          link: ""
        },
        {
          text: "Next.js编译器",
          link: ""
        },
        {
          text: "已支持的浏览器",
          link: ""
        },
        {
          text: "Turbopack",
          link: ""
        },
      ]
    },
    {
      text: "社区",
      collapsed: false,
      items: [
        {
          text: "贡献指导",
          link: ""
        }
      ]
    }
  ]
}

function createPagesSidebar () {
  return []
}
