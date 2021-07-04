import Vue from 'vue';
import Router from 'vue-router';
import Home from '@v/Home';

//安装
Vue.use(Router);

export default new Router({
    //路由规则
    routes: [{
            path: '/',
            component: Home,
            children: [{
                    path: 'product/create',
                    component: () => import('@v/product/CreateProduct')
                },
                {
                    path: 'product/edit',
                    component: () => import('@v/product/EditProduct')
                },
                {
                    path: 'product/list',
                    component: () => import('@v/product/ProductList')
                },
                {
                    path: 'home/ads',
                    component: () => import('@v/home/Ads')
                },
                {
                    path: 'home/types',
                    component: () => import('@v/home/MenuTypes')
                },
                {
                    path: 'user/create',
                    component: () => import('@v/user/CreateUser')
                },
                {
                    path: 'user/edit',
                    component: () => import('@v/user/EditUser')
                },
                {
                    path: 'user/list',
                    component: () => import('@v/user/UserList')
                },
                {
                    path: 'user/manage',
                    component: () => import('@v/user/UserManage')
                }, {
                    path: "*",
                    component: () => import("@v/product/ProductList")
                }
            ]
        },

    ]
})