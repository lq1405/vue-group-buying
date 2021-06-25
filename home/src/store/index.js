import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        search: '',
        products: [],
        totalPrice: 0,
        discount: 0
    },
    mutations: {
        searchFoodData(state, search) {
            state.search = search;
        },
        addGoods(state, data) {
            console.log(data);
            this.state.totalPrice += data.price;
            this.state.discount += data.originalPrice - data.price;
            this.state.products.push(data);
        },
        removeGoods(state, data) {
            console.log(data);
            let index = this.state.products.findIndex(item => item.id === data.id);
            if (index >= 0) {
                this.state.totalPrice -= data.price;
                this.state.discount -= data.originalPrice - data.price;
                this.state.products.splice(index, 1);
            }
        }
    },
})
