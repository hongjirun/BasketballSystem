import Mock from 'mockjs';

Mock.mock('/login', 'get', {
  code: 0,
  msg: '',
  data: [
    {telephone:'15913921974',password:'111111',question:'你的名字是:',answer:'洪基润'},
  ]
})