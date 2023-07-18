window.Config = {

  // 显示标题
  SiteName: 'Gestar Cloud 服务状态',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm794281947-03244686c99aa0892133425d', // Gestar Cloud 官网
    //'m794275245-7196164882c223cd8937f9e3', // Gestar Cloud Web 服务
    'm794275259-eb82fea71c2aa730aad3121e', // Gestar Gravatar 镜像服务
    'm794275251-d257a0e4dc8d5f4c802f488a', // Gestar Drive 面板
    'm794275254-d1a347d84c1f633612cd8dd0', // Gestar Drive 存储节点-01
    //'m794275262-3de485768e233569935bab03', // Gestar Cloud MCSManager
    'm794357341-2e3244494deed4cc64b5382c', // Gestar Cloud ChatGPT 官方镜像
    'm794828998-5af6aee60c39406d31c45edd' // Gestar Cloud 免费 ChatGPT 镜像
  ],

  // 日志天数
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://www.gestar.cloud/'
    }
  ]
};
