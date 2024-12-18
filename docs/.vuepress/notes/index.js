import { defineNotesConfig } from 'vuepress-theme-plume'
import 将庭文档 from './将庭文档'
import 联系我们 from './联系我们'
import 更新日志 from './更新日志'

export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: '/notes/',
  link: '/',
  // 在这里添加 note 配置
  notes: [ 
    将庭文档,
    联系我们,
    更新日志,
  ]
})