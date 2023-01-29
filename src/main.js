import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入Vuex配置
import store from "./store"

// 引入路由配置檔案
import router from "./router"

const app = createApp(App)
app.use(router).use(store);
app.mount('#tpk')

// Element plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
