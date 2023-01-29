import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        redirect: "/basic"
    },
    {
        path: "/basic",
        name: "基础地图",
        component: () => import("@/views/BasicCesium/index.vue")
    },
    {
        path: "/entity",
        name: "实体",
        component: () => import("@/views/Entity/index.vue")
    },
    {
        path: "/tiles",
        name: "切片",
        component: () => import("@/views/Tiles/index.vue")
    },
    {
        path: "/wms",
        name: "wms",
        component: () => import("@/views/Wms/index.vue")
    },
    {
        path: "/model",
        name: "model",
        component: () => import("@/views/Model/index.vue")
    },
    {
        path: "/tdt",
        name: "tdt",
        component: () => import("@/views/Tdt/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
})


export default router