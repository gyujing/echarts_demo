import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn';//中文
import locale from 'element-plus/lib/locale/lang/zh-cn';//中文


import components from './components'

const app = createApp(App);

app.use(ElementPlus, { locale })

app.use(components)

app.use(router)

app.mount('#app')
