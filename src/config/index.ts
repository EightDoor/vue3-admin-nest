const config = {
  // 密码、jwt  secret
  secret: 'zhoukai',
  // jwt过期时间
  expiresIn: '604800s',

  // 七牛云配置
  qiniuSetting: {
    accessKey: 'USmI2xVzjc7ufYwFejo7i-nJyKwfBiVGfowtUAC5',
    secretKey: 'BNlFbUBC8ua0dI9w4K8ObYM9Wa7JT4QU9A5K5DOR',
    scope: 'vue3-admin-nest',
  },
};

export default config;
