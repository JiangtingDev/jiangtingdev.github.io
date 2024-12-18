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
        '将庭服史.md',
        '将庭公示.md',
        '将庭服公约.md',
        '将庭服赞助管理方案.md',
      ],
    },
    {
      text: '玩家指南',
      prefix: '玩家指南',
      items: [
        '',
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
            '服务器架构.md',
            '跨服问题.md',
          ],
        },
        {
          text: '插件配置',
          prefix: '插件配置',
          collapsed: true,
          items: [
            '概述.md',
            '前置.md',
            '基础.md',
            '拓展.md',
            '进阶.md',
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
    '备忘录.md',
  ],
})

