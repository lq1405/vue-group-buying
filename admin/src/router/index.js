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
                    path: 'product/edit/:id',
                    component: () => import('@v/product/EditProduct')
                },
                {
                    path: 'product/list/:page',
                    component: () => import('@v/product/ProductList'),
                    props(route) {
                        return {
                            page: +route.params.page
                        }
                    }
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
                    path: 'user/edit/:id',
                    component: () => import('@v/user/EditUser')
                },
                {
                    path: 'user/list/:page',
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