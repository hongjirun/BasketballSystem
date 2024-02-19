import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import './styles/global.less'
import 'element-plus/dist/index.css'
import './mock/index.js'


// const app = createApp(App)
 
// app.use(ElementPlus)
// app.mount('#app')
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
