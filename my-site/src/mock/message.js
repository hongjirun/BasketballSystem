import Mock from 'mockjs';

Mock.mock('/message', 'get', {
  code: 200,
  msg: '',
  data: [
    {
      userName: '奥特男',
      img: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      messageContent: '计算机爱就爱就',
      messageTime:'2020-11-12 12:00'
    },
     {
      userName: '肠粉哥',
      img: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      messageContent: '勇士永远总冠军',
      messageTime:'2024-2-22 11:50'
    },
  ]
})