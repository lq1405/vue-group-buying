import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {
    Message
} from 'element-ui';

Vue.use(Vuex);

export default new Vuex.Store({
    //数据
    state: {
        username: ""
    },
    //同步消息
    mutations: {
        loginSuccessUsername(state, data) {
            state.username = data.username;
        }
    },
    actions: {
        login(store, data) {
            axios.post('/admin/login', data)
                .then(({
                    data
                }) => {
                    if (data.state === 1) {
                        store.commit("loginSuccessUsername", data);
                    } else if (data.state === 0) {
                        Message.closeAll();
                        Message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                    }
                })
        },
        userLoginInfo(store) {
            axios.get('/admin/userLoginInfo')
                .then(({
                    data
                }) => {
                    if (data.state === 1) {
                        store.commit("loginSuccessUsername", data);
                    }
                })
        }
    }
})