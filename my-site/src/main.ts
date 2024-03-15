import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import './styles/global.less'
import 'element-plus/dist/index.css'
import './mock/index.js'

// import './api/login.js'
// 创建 Axios 实例
// const axiosInstance = axios.create({
//   baseURL: 'https://localhost:3000', // 设置基础URL，包含协议和域名部分
//   // 其他配置项
// });

const app = createApp(App)
// 将 Axios 实例挂载到全局属性 $http 上
// app.config.globalProperties.$http = axiosInstance;

// app.use(ElementPlus)
// app.mount('#app')
app.use(store).use(router).use(ElementPlus).mount('#app')
