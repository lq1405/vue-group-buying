import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
    {path: '/list/:id', component: () => import('@/views/List')},
    {path: '/detail/:id', component: () => import('@/views/Detail')},
    {path: '/buy', component: () => import("@/views/Buy")},
    {path: '*', component: Home}
]

const router = new VueRouter({
    routes
})

export default router
