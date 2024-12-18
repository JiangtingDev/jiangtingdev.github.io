import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '将庭文档', link: '/notes/将庭文档/' },
  { text: '将庭新闻', link: '/blog/' },
  {
    text: '游戏工具',
    items: [
      { text: '服务器状态', link: '/notes/游戏工具/' },
      { text: '卫星地图', link: '/notes/游戏工具/' },
      { text: '启动器下载', link: 'https://www.123865.com/s/4qdeTd-uCmyv' },
      { text: 'Java 下载', link: 'https://www.123865.com/s/4qdeTd-7Cmyv' },
      { text: '客户端下载', link: 'https://www.123865.com/s/4qdeTd-lCmyv' },
    ]
  },
  { text: '联系我们', link: '/notes/联系我们.md' },
  { text: '友情外链', 
    items: [
      { text: 'Minecraft', link: 'https://www.minecraft.net/zh-hans' },
      { text: 'Minecraft Wiki', link: 'https://zh.minecraft.wiki/' },
      { text: 'PaperMC', link: 'https://papermc.io/' },
      { text: 'PurpurMC', link: 'https://purpurmc.org/' },
      { text: 'Velocity', link: 'https://papermc.io/software/velocity' },
      { text: 'SpigotMC', link: 'https://www.spigotmc.org/' },
      { text: 'MineBBS', link: 'https://www.minebbs.com/' },
      { text: 'Vuepress', link: 'https://vuepress.vuejs.org/' },
      { text: 'Plume Theme', link: 'https://theme-plume.vuejs.press/' },
    ]
  },
  { text: '更新日志', link: '/notes/更新日志.md' }
])
