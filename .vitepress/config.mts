import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  base: '/',
  title: "DBLOG",
  description: "学而不思则罔",
  srcDir: 'docs',
  // lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    //文档末尾上下导航
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },

    //本地搜索框
    search: {
      provider: 'local'
    },

    //文档分级显示,否则只有前两级
    outline:"deep",

    // 详细文档目录显示位置
    aside: 'left',

    //文档右侧标题
    outlineTitle:"页面导航",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dwxlrf' }
    ]
  }
})
