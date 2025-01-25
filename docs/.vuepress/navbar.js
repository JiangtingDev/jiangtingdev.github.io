/*
 * @Author: ShengXiaLio sapling2023@gmail.com
 * @Date: 2024-12-18 23:46:42
 * @LastEditors: ShengXiaLio sapling2023@gmail.com
 * @LastEditTime: 2025-01-25 17:27:23
 * @FilePath: \undefinedd:\Dev\Github\jiangtingdev.github.io\docs\.vuepress\navbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '将庭文档', icon: 'line-md:home-md-twotone', link: '/notes/将庭文档/' },
  { text: '将庭新闻', icon: 'line-md:bell-alert-filled-loop', link: '/blog/' },
  {
    text: '游戏工具',
    icon: 'line-md:cog-filled-loop',
    items: [
      { text: '服务器状态', icon: 'line-md:cloud-alt-print-filled-loop', link: '/notes/游戏工具/' },
      { text: '卫星地图', icon: 'line-md:compass-filled-loop', link: '/notes/游戏工具/' },
      { text: '启动器下载', icon: 'line-md:download-loop', link: 'https://www.123865.com/s/4qdeTd-uCmyv' },
      { text: 'Java 下载', icon: 'line-md:download-loop', link: 'https://www.123865.com/s/4qdeTd-7Cmyv' },
      { text: '客户端下载', icon: 'line-md:download-loop', link: 'https://www.123865.com/s/4qdeTd-lCmyv' },
    ]
  },
  { text: '联系我们', icon: 'line-md:phone-call-twotone-loop', link: '/notes/联系我们.md' },
  { text: '友情外链', 
    icon: 'line-md:person-add-twotone', 
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
  { text: '更新日志', icon: 'line-md:coffee-twotone-loop', link: '/notes/更新日志.md' }
])
