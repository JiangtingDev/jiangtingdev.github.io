/*
 * @Author: ShengXiaLio sapling2023@gmail.com
 * @Date: 2024-12-18 23:46:42
 * @LastEditors: ShengXiaLio sapling2023@gmail.com
 * @LastEditTime: 2025-02-03 18:56:27
 * @FilePath: \undefinedd:\Dev\Github\jiangtingdev.github.io\docs\.vuepress\notes\将庭文档.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '将庭文档',
  link: '/将庭文档/',
  sidebar: [
    'README.md',
    {
      text: '将庭文书',
      prefix: '将庭文书',
      items: [
        '将庭服史',
        '将庭公示',
        '将庭服公约',
        '将庭服赞助管理方案',
      ],
    },
    {
      text: '玩家指南',
      prefix: '玩家指南',
      items: [
        '概述',
      ],
    },
    {
      text: '管理员手册',
      prefix: '管理员手册',
      items: [
        '概述',
        {
          text: '服务器配置',
          prefix: '服务器配置',
          collapsed: true,
          items: [
            '服务器架构',
            '跨服问题',
          ],
        },
        {
          text: '插件配置',
          prefix: '插件配置',
          collapsed: true,
          items: [
            '简述',
            '前置',
            '基础',
            '拓展',
            '进阶',
          ]
        },
        {
          text: '网站配置',
          prefix: '网站配置',
          collapsed: true,
          items: [
            '',
          ],
        },
      ],
    },
    '备忘录',
  ],
})

