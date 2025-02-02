/*
 * @Author: ShengXiaLio sapling2023@gmail.com
 * @Date: 2024-12-18 23:46:42
 * @LastEditors: ShengXiaLio sapling2023@gmail.com
 * @LastEditTime: 2025-02-02 21:38:58
 * @FilePath: \undefinedd:\Dev\Github\jiangtingdev.github.io\docs\.vuepress\notes\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineNotesConfig } from 'vuepress-theme-plume'
import 将庭文档 from './将庭文档'
import 联系我们 from './联系我们'
import 更新日志 from './更新日志'
import 友情外链 from './友情外链'

export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: '/notes/',
  link: '/',
  // 在这里添加 note 配置
  notes: [ 
    将庭文档,
    联系我们,
    更新日志,
    友情外链
  ]
})