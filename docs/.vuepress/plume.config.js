import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,

  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: '将庭服服务台',
    description: '',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: '/' },
  ],

})