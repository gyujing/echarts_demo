import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import Container from "../components/container/src/index.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect:"/bar"
    },
    {
        name: 'bar',
        path: '/bar',
        component: Container,
        children: [
            {
                name: "bar1",
                path: "/bar1",
                component: ()=>import("../views/bar/bar1.vue"),
            }
        ]
    },
    {
        name: 'line',
        path: '/line',
        component: Container,
        children: [
            {
                name: "line1",
                path: "/line1",
                component: ()=>import("../views/line/line1.vue"),
            }
        ]
    },
    {
        name: 'pie',
        path: '/pie',
        component: Container,
        children: [
            {
                name: "pie1",
                path: "/pie1",
                component: ()=>import("../views/pie/index.vue"),
            }
        ]
    },
]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

router.beforeEach((to: RouteLocationNormalized, from, next) => {
    if (to?.meta?.title) {
        document.title = to.meta.title as string;
    }
    next();
})


export default router;