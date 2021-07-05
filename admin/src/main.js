import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router'
import axios from 'axios';
import ElementUI from 'element-ui';
import VueQuillEditor from 'vue-quill-editor'
//引入element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'
//引入vue-quill-editor的样式
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"



//安装axios
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

new Vue({
    //注册store
    store,
    //注册路由
    router,
    render: h => h(App)
}).$mount('#app')