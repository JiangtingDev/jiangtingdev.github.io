import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '将庭文档', icon: 'material-symbols-light:collections-bookmark-outline', link: '/notes/将庭文档/' },
  { text: '将庭新闻', icon: 'material-symbols-light:brand-awareness-outline', link: '/blog/' },
  {
    text: '游戏工具',
    icon: 'material-symbols-light:build-outline',
    items: [
      { text: '服务器状态', icon: 'material-symbols-light:dns-outline', link: '/notes/游戏工具/' },
      { text: '卫星地图', icon: 'material-symbols-light:explore-outline', link: '/notes/游戏工具/' },
      { text: '启动器下载', icon: 'material-symbols-light:download-2-outline', link: 'https://www.123865.com/s/4qdeTd-uCmyv' },
      { text: 'Java 下载', icon: 'material-symbols-light:download-2-outline', link: 'https://www.123865.com/s/4qdeTd-7Cmyv' },
      { text: '客户端下载', icon: 'material-symbols-light:download-2-outline', link: 'https://www.123865.com/s/4qdeTd-lCmyv' },
    ]
  },
  { text: '联系我们', icon: 'material-symbols-light:3p-outline', link: '/notes/联系我们.md' },
  { text: '友情外链', 
    icon: 'material-symbols-light:handshake-outline', 
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
  { text: '更新日志', icon: 'material-symbols-light:shoppingmode-outline', link: '/notes/更新日志.md' }
])
