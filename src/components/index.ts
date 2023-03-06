import { App } from 'vue'

import menu from './menu'


const components = [
    menu,
]

//让这个组件可以通过use方式使用
export default {
    install(app:App){
        components.map(item => {
            app.use(item)
        })
        
    }
}

