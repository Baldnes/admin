import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        component: () => import("../views/Login.vue")
    },
    {
        path:"/home",
        name:"Home",
        component:() => import("../views/Home.vue")
    },
    {
        path:"/about",
        name:"About",
        component: () => import("../views/About.vue")
    },
    {
        path:"/course",
        name:"Course",
        component: () => import("../views/Course.vue")
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router