import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const sidebars = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'Concepts',
    collapsed: true,
    items: [
      { text: 'Motivation', link: '/concepts/motivation' },
      { text: 'Routers', link: '/concepts/routers' },
      { text: 'Benchmarks', link: '/concepts/benchmarks' },
      { text: 'Web Standard', link: '/concepts/web-standard' },
      { text: 'Middleware', link: '/concepts/middleware' },
      { text: 'Developer Experience', link: '/concepts/developer-experience.md' },
      { text: 'Hono Stacks', link: '/concepts/stacks' },
    ],
  },
  {
    text: 'Getting Started',
    collapsed: true,
    items: [
      { text: 'Basic', link: '/getting-started/basic' },
      { text: 'Cloudflare Workers', link: '/getting-started/cloudflare-workers' },
      { text: 'Cloudflare Pages', link: '/getting-started/cloudflare-pages' },
      { text: 'Deno', link: '/getting-started/deno' },
      { text: 'Bun', link: '/getting-started/bun' },
      { text: 'Fastly Compute', link: '/getting-started/fastly' },
      { text: 'Lagon', link: '/getting-started/lagon' },
      { text: 'Vercel', link: '/getting-started/vercel' },
      { text: 'Netlify', link: '/getting-started/netlify' },
      { text: 'AWS Lambda', link: '/getting-started/aws-lambda' },
      { text: 'Lambda@Edge', link: '/getting-started/lambda-edge' },
      { text: 'Node.js', link: '/getting-started/nodejs' },
      { text: 'Others', link: '/getting-started/others' },
    ],
  },
  {
    text: 'API',
    collapsed: true,
    items: [
      { text: 'App', link: '/api/hono' },
      { text: 'Routing', link: '/api/routing' },
      { text: 'Context', link: '/api/context' },
      { text: 'HonoRequest', link: '/api/request' },
      { text: 'Exception', link: '/api/exception' },
      { text: 'Presets', link: '/api/presets' },
    ],
  },
  {
    text: 'Guides',
    collapsed: true,
    items: [
      { text: 'Middleware', link: '/guides/middleware' },
      { text: 'Helpers', link: '/guides/helpers' },
      {
        text: 'JSX',
        link: '/guides/jsx',
      },
      { text: 'Testing', link: '/guides/testing' },
      {
        text: 'Validation',
        link: '/guides/validation',
      },
      {
        text: 'RPC',
        link: '/guides/rpc',
      },
      {
        text: 'Best Practices',
        link: '/guides/best-practices',
      },
      {
        text: 'Examples',
        link: '/guides/examples',
      },
      {
        text: 'Miscellaneous',
        link: '/guides/others',
      },
    ],
  },
  {
    text: 'Helpers',
    collapsed: true,
    items: [
      { text: 'Adapter', link: '/helpers/adapter' },
      { text: 'Cookie', link: '/helpers/cookie' },
      { text: 'Factory', link: '/helpers/factory' },
      { text: 'html', link: '/helpers/html' },
      { text: 'JWT', link: '/helpers/jwt' },
      { text: 'Streaming', link: '/helpers/streaming' },
      { text: 'Testing', link: '/helpers/testing' },
    ],
  },
  {
    text: 'Middleware',
    collapsed: true,
    items: [
      { text: 'Basic Authentication', link: '/middleware/builtin/basic-auth' },
      { text: 'Bearer Authentication', link: '/middleware/builtin/bearer-auth' },
      { text: 'Cache', link: '/middleware/builtin/cache' },
      { text: 'Compress', link: '/middleware/builtin/compress' },
      { text: 'CORS', link: '/middleware/builtin/cors' },
      { text: 'ETag', link: '/middleware/builtin/etag' },
      { text: 'JSX Renderer', link: '/middleware/builtin/jsx-renderer' },
      { text: 'JWT', link: '/middleware/builtin/jwt' },
      { text: 'Timing', link: '/middleware/builtin/timing' },
      { text: 'Logger', link: '/middleware/builtin/logger' },
      { text: 'Pretty JSON', link: '/middleware/builtin/pretty-json' },
      { text: 'Secure Headers', link: '/middleware/builtin/secure-headers' },
      { text: '3rd-party Middleware', link: '/middleware/third-party' },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/', 
  lang: 'zh-CN',
  title: "Road Side University",
  description: "露天学堂是路邊大學的一个对所有人完全开放式的交互式学习空间，利用免费资源与所有人共享，福荫承泽， 露天學堂在树下。",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '101',
        collapsed: true,
        items: [
          {text: 'Github 101', link:'/101/github'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RoadSideUniversity' }
    ],
    editLink: {
      pattern: 'https://github.com/RoadSideUniversity/website/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present ',
    },
  }
})
