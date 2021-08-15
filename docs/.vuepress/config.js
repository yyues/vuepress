const path = require('path')
const sidebar = require('../myImport')

module.exports = {
  lang: 'zh-CN',
  title: 'BingZhiXia',
  description: '这是我的第一个 VuePress 站点',
  themeConfig: {
    navbar: [
      { text: 'Vue', link: '/Vue/' },
      { text: '参考网站', link: 'https://baidu.com' }
    ],
    sidebar: sidebar,
    sidebarDepth: 2, // 侧边栏显示2级
    backToHome: '加载错误呀，请稍候再试!'
  },
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/avatar.jpg' }]
  ],
  alias: {
    '@': path.resolve(__dirname, './public')
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/plugin-search'],
  themePlugins: {
    activeHeaderLinks: true
  }
}
