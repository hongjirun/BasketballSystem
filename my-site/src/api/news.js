// 获取新闻内容
import request from './request.js';

export async function getNbaNews() { 
  return await request.get('/news/nba');
};
export async function getCbaNews() { 
  return await request.get('/news/cba');
}
