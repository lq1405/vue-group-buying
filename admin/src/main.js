import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router'
import axios from 'axios';
import ElementUI from 'element-ui';
//引入element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'

//安装axios
Vue.prototype.$http = axios;
Vue.use(ElementUI);


new Vue({
    //注册store
    store,
    //注册路由
    router,
    render: h => h(App)
}).$mount('#app')