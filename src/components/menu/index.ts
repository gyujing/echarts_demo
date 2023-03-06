import { App } from 'vue'

import menu from './src/index.vue'


//让这个组件可以通过use方式使用
export default {
    install(app:App){
        app.component("ai-menu",menu)
    
    }
}

