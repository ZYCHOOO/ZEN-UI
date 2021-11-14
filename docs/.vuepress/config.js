module.exports = {
  title: 'ZEN-UI组件库', // 设置网站标题
  base: '/zen-ui/',
  description: '用于后台管理系统的组件库', //描述
  dest: './dist',   // 设置输出目录
  port: 2233, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件', link: '/base/' },
      { text: '知识库', link: '/knowledge/' }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/base/': [
        '/base/',
        {
          title: '开发指南',
          collapsable: false, // 是否设置为可展开，false-不可点击
          children: [
            'guide/install',
            'guide/quickStart'
          ]
        },
        {
          title: '常用组件',
          collapsable: false, // 是否设置为可展开，false-不可点击
          children: [
            'components/button',
            'components/select',
            'components/cascader',
            'components/overflowTip',
            'components/editor'
          ]
        },
        {
          title: '业务组件',
          collapsable: false, // 是否设置为可展开，false-不可点击
          children: []
        }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]
    }
  }
}