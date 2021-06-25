<template>
    <div class="shopping-cart">
        <div class="some-product">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <div class="product-num"><span>{{ $store.state.products.length }}</span></div>
        </div>
        <div class="total-price">
            <p class="pay-total-price">共￥{{ $store.state.totalPrice }}</p>
            <p class="discount-price">优惠{{ $store.state.discount }}</p>
        </div>
        <router-link to="/buy" tag="div" :class="{
        'num-null':true,
         'to-pay-it': hasNum
        }">去结算
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hasNum: false,
        }
    },
    watch: {
        '$store.state.totalPrice'(n) {
            n > 0 ? this.hasNum = true : this.hasNum = false
        }
    },
    name: "shoppingCart",
    methods: {
    }
}
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.shopping-cart {
    margin-top: 10px;
    background-color: #333;
    display: flex;
    height: 50px;
    text-align: center;
    color: #fff;

    .total-price {
        colorr: #fff;
        font-size: 18px;

        .discount-price {
            font-size: 12px;
        }
    }

    .num-null {
        flex: 2;
        margin: {
            top: 5px;
            right: 5px;
        }
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: #ccc;
    }

    .to-pay-it {
        background-color: #e52c1c;
    }

    .some-product {
        line-height: 50px;
        background-color: #333;
        flex: 1;

        i {
            font-size: 30px;
            color: coral;
        }

        .product-num {
            position: relative;
            top: -45px;
            left: 35px;
            line-height: 15px;
            font-size: 12px;
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            color: #fff;
        }
    }

    .total-price {
        flex: 3;
    }

}

</style>