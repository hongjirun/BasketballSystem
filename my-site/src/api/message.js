// 获取留言信息
import axios from 'axios'

export async function getMessage() {
  return await axios.get('/message');
}
