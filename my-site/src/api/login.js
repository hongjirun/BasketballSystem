// 获取登录信息
// import request from './request.js';

// export async function getLogin() {
//   return await request.post('http://localhost:3000/login', {
//     userName:"浪漫百事猪脚饭",
//     telephone:"15913921974",
//     password:"Qa29045!!!"
//   }).then(res => {
//     console.log(res);
//   });
// }
import axios from 'axios'
export async function getLogin(data) { 
  console.log(data);
  return await axios.post('http://localhost:3000/login', data)
  // .catch(error => {
  //   console.error('发送数据失败:', error);
  // });

}

export async function getLoginRegist(data) { 
  console.log(data);
  return await axios.post('http://localhost:3000/login/regist', data)
  // .catch(error => {
  //   console.error('发送数据失败:', error);
  // });

}

export async function getLoginForget(data) { 
  console.log(data);
  return await axios.post('http://localhost:3000/login/forget', data)
  // .catch(error => {
  //   console.error('发送数据失败:', error);
  // });

}
