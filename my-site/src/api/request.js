// 用axios封装请求
import axios from 'axios';

const ins = axios.create();
ins.interceptors.response.use(resp => { 
  return resp.data;
})

export default ins;