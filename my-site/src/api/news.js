// // 获取新闻内容
// import request from './request.js';

// export async function getNbaNews() { 
//   return await request.get('/news/nba');
// };
// export async function getCbaNews() { 
//   return await request.get('/news/cba');
// }
import axios from 'axios'
export async function getNbaNews() { 
  
  return await axios.get('http://localhost:3000/news/nba');

};
export async function getCbaNews() { 
  
  return await axios.get('http://localhost:3000/news/nba');

}
