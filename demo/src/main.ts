import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入路由
import router from './router'

// 引入element-plus
import 'element-plus/dist/index.css'

// 引入pinia
import {createPinia} from "pinia";
const pinia = createPinia()

const app = createApp(App)
// 使用路由
app.use(router)
app.use(pinia)
app.mount("#app")