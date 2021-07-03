import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        search: '',
        products: [],
        totalPrice: 0,
        discount: 0,
        hasSelectId: []
    },
    mutations: {
        searchFoodData(state, search) {
            state.search = search;
        },
        addGoods(state, data) {
            this.state.totalPrice += data.price;
            this.state.discount += data.originalPrice - data.price;
            this.state.products.push(data);
            this.state.hasSelectId.push(data.id);
        },
        removeGoods(state, data) {
            let index = this.state.products.findIndex(item => item.id === data.id);
            if (index >= 0) {
                this.state.totalPrice -= data.price;
                this.state.discount -= data.originalPrice - data.price;
                this.state.products.splice(index, 1);
                this.state.hasSelectId.splice(index, 1);
            }
        }
    },
})
