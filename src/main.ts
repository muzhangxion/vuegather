import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Global from '@/components/global/global' // 页面文件目录

let app = createApp(App)

// 注册全局组件
Global.forEach( (item: any, index: any) => {
    app.component(item.name, item.componentb)
})

app.use(store).use(router).mount('#app')
