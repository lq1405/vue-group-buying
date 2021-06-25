<template>
    <div class="buy-page">
        <div class="show-money">
            <div class="buy-page-message">订单总览</div>
            <div class="one-price">单价:<span>{{ $store.state.totalPrice }}元</span></div>
            <div class="product-count">数量:
                <div class="size-tool"></div>
                <div :class="{'num-sub':true, 'share-style':true,'click-style':hasStyle}" @click="subNum">-</div>
                <div class="buy-num share-style">{{ num }}</div>
                <div class="num-plus share-style" @click="addNum">+</div>
            </div>
            <div class="pay-total-money">总价: <span>{{ $store.state.totalPrice * num }}元</span></div>
            <div class="need-pay">还需支付: <span>{{ $store.state.totalPrice * num }}元</span></div>
        </div>
        <div class="submit-order">提交订单</div>
        <div class="product-bought">
            <div class="bought-page-message">已购商品</div>
            <LovelyFood :list="$store.state.products" :msg="msg"></LovelyFood>
        </div>
    </div>
</template>

<script>
import LovelyFood from "@/components/LovelyFood";

export default {
    components: {LovelyFood},
    data() {
        return {
            num: this.$store.state.products.length,
            hasStyle: true,
            msg: {
                name: 'brandName',
                content: "title",
                discount: "price",
                sold: 'solds',
                normalPrice: 'originalPrice',
                distance: null
            }
        }
    },
    watch: {
        num(n) {
            n > 1 ? this.hasStyle = false : this.hasStyle = true;
        }
    },
    methods: {
        addNum() {
            this.num++;
        },
        subNum() {
            this.num--;
            this.num < 1 ? this.num = 1 : this.num;
        }
    },
    name: "Buy",
    created() {
        document.body.style.backgroundColor = '#eee'
    }
}
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0
}

.show-money {
    margin-top: 5px;
    font-size: 16px;

    div {
        height: 40px;
        padding-left: 10px;
        background-color: #fff;
        line-height: 40px;
        border-bottom: 1px dashed #ccc;
        margin-bottom: 3px;
    }

    span {
        position: relative;
    }

    .one-price {
        margin-top: 3px;

        span {
            right: -255px;
        }
    }

    .product-count {
        display: flex;
        text-align: center;

        .size-tool {
            flex: 6;
        }


        .share-style {
            border: 1px solid #ff0000;
            margin: {
                top: 6px;
                left: 2px;
                right: 2px;
                bottom: 5px;
            }
            height: 28px;
            line-height: 28px;
        }

        .click-style {
            background-color: #ccc;
            border-style: none;
            color: #555;
        }

        .num-sub {
            flex: 1;
            padding: 0;
        }

        .num-plus {
            flex: 1;
            padding: 0;
        }

        .buy-num {
            flex: 2;
            padding: 0;
        }

    }

    .pay-total-money {
        span {
            left: 250px;
            color: #f00;
        }
    }

    .need-pay {
        margin-top: 30px;

        span {
            left: 220px;
            color: #f00;
        }
    }

}

.submit-order {
    text-align: center;
    margin: {
        top: 20px;
        left: 10px;
        right: 10px;
    };
    height: 40px;
    line-height: 40px;
    background-color: #e52c1c;
    color: #fff;
    border-radius: 5px;
}
</style>