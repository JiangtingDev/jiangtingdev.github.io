import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import  notes from './notes/index.js'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://github.com/jiangtingdev.png',

  appearance: true,

  profile: {
    avatar: 'https://github.com/jiangtingdev.png',
    name: '将庭服服务台',
    description: '',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=Vf7x-jsnWoRPs6yjgDLnr_Gq36Zy6Acj&jump_from=webapi&authKey=mGu7v2dyhqSUf31/2DPzNliwCvI6KMEopUA1ok0h9799g9ydoz1HqPFbaKtV3E7x' },
  ],
  navbarSocialInclude: ['qq'],
})
