import type { SidebarConfig } from '@vuepress/theme-default'

const sidebar: SidebarConfig = {
  '/': [{
      text: '首頁',
      children: [
        '/',
      ]
    }, {
      text: '玩家',
      children: [
        '/player/',
        '/player/ServerInfo'
      ]
    }, {
      text: '服主',
      children: [
        '/owner/server-create',
        '/owner/server-verify',
        '/owner/server-done'
      ]
    }, {
      text: '廣告',
      children: [
        '/advertise/permission'
      ]
    }, {
      text: '其他',
      children: [
        '/other/bind-discord'
      ]
    }
  ]
}

export default sidebar