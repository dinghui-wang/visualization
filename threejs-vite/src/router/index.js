import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        redirect: "/heart"
    },
    {
        path: "/basic",
        name: "基础场景",
        component: () => import("@/views/Basic/index.vue")
    },
    {
        path: "/line",
        name: "三维线",
        component: () => import("@/views/Line/index.vue")
    },
    {
        path: "/heart",
        name: "心跳",
        component: () => import("@/views/Heart/index.vue")
    },
    {
        path: "/rotation",
        name: "自转",
        component: () => import("@/views/Rotation/index.vue")
    },
    {
        path: "/cube",
        name: "自转",
        component: () => import("@/views/Cube/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})


export default router