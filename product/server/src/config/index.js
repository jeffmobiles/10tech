
const config = {
  db: 'mongodb://127.0.0.1/node_club_dev',
   // redis 配置，默认是本地
   redis_host: '127.0.0.1',
   redis_port: 6379,
   redis_db: 0,
   redis_password: '',
   // 程序运行的端口
    port: 3000,

    // 话题列表显示的话题数量
    list_topic_count: 20,
    // RSS配置
    rss: {
      title: 'CNode：Node.js专业中文社区',
      link: 'http://cnodejs.org',
      language: 'zh-cn',
      description: 'CNode：Node.js专业中文社区',
      //最多获取的RSS Item数量
      max_rss_items: 50
    },
    // 邮箱配置
    mail_opts: {
      host: 'smtp.126.com',
      port: 25,
      auth: {
        user: 'club@126.com',
        pass: 'club'
      },
      ignoreTLS: true,
    },
      // 是否允许直接注册（否则只能走 github 的方式）
    allow_sign_up: true,
}

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

export default config;