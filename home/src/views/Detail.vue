<template>
    <div class="detail-page">
        <div class="img-price-detail">
            <img :src="data.img" alt />
            <p class="detail-brandName">{{ data.title }}</p>
            <div class="detail-price-buy">
                <h1>
                    <span>￥</span>
                    {{ data.price }}
                </h1>
                <p class="detail-originalPrice">门市价￥{{ data.originalPrice }}</p>
                <span
                    :class="{
                    'buy-button' :true,
                    'choose-buy': hasBuy
                    }"
                    @click="switchPurchaseStatus"
                >{{ hasBuy ? '取消抢购' : '立即抢购' }}</span>
            </div>
            <div class="detail-support-sold">
                <span>支持随时退货</span>
                <span>支持过期自动退</span>
                <span>
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    已销售
                    {{ data.sold }}
                </span>
            </div>
        </div>
        <div class="detail-business">
            <div class="shop-tip">
                <span>商家信息</span>
                <span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
            </div>
            <div class="shop-name-score-phone">
                <div class="shop-name-score">
                    <p class="shop-name">{{ data.brandName }}</p>
                    <p class="shop-score">平均评分:{{ data.averageScore }}</p>
                </div>
                <div class="shop-phone">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
            </div>
            <p class="shop-address" v-if="data.shop">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                {{ }}
            </p>
        </div>
        <div class="shop-compare-tip" v-html="buyData"></div>
        <ShoppingCart></ShoppingCart>
    </div>
</template>


<script>
import ShoppingCart from "@/components/ShoppingCart";
export default {
    name: "Detail",
    components: { ShoppingCart },
    data() {
        return {
            list: [],
            data: {},
            buyData: "",
            hasBuy: false,
        };
    },
    watch: {},
    methods: {
        switchPurchaseStatus() {
            let index = this.$store.state.hasSelectId.indexOf(this.data.id);
            if (this.hasBuy) {
                this.$store.commit("removeGoods", this.data);
            } else if (index < 0) {
                this.$store.commit("addGoods", this.data);
            }
            this.hasBuy = !this.hasBuy;
        },
        getData() {
            let { params } = this.$route;
            this.$http
                .get("/home/detailMessage", { params })
                .then(({ data }) => {
                    console.log(data);
                    if (
                        this.$store.state.products.find(
                            (item) => item.id === data.id
                        )
                    ) {
                        this.hasBuy = false;
                    }
                    this.data = data;
                    this.buyData = data.content;
                });
        },
    },
    created() {
        document.body.style.backgroundColor = "#eeeeee";
        this.getData();
    },
    beforeUpdate() {
        let index = this.$store.state.hasSelectId.indexOf(this.data.id);
        index >= 0 ? (this.hasBuy = true) : (this.hasBuy = false);
    },
};
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.detail-page {
    margin-bottom: 60px;

    .shop-compare-tip {
        background-color: #fff;
        margin-top: 10px;

        .tc {
            padding-left: 20px;
        }
    }

    .detail-business {
        background-color: #fff;
        margin-top: 10px;

        .shop-tip {
            height: 40px;
            line-height: 40px;
            display: flex;
            border-bottom: 1px dashed #ccc;

            span:first-child {
                flex: 5;
                padding-left: 10px;
            }

            span:last-child {
                flex: 1;
                text-align: center;
                font-size: 20px;
            }
        }

        .shop-name-score-phone {
            height: 80px;
            display: flex;
            padding-left: 10px;
            border-bottom: 1px dashed #ccc;

            .shop-name-score {
                flex: 7;
                border-right: 1px dashed #ccc;

                .shop-name {
                    font-weight: bold;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .shop-name,
                .shop-score {
                    height: 40px;
                    line-height: 40px;
                }
            }

            .shop-phone {
                flex: 2;
                font-size: 40px;
                color: #00d3be;
                text-align: center;
                line-height: 80px;
            }
        }

        .shop-address {
            padding-left: 10px;
            height: 40px;
            line-height: 40px;
            font-size: 15px;
        }
    }

    .img-price-detail {
        position: relative;
        background-color: #ffffff;

        .detail-support-sold {
            display: flex;
            height: 30px;
            line-height: 30px;

            span {
                color: #79e37d;
                font-size: 12px;
                flex: 1;
            }

            span:last-child {
                color: #333333;
            }
        }

        img {
            width: 100%;
            height: 268px;
        }

        .detail-brandName {
            position: absolute;
            top: 200px;
            left: 10px;
            color: #fff;
            font-weight: bold;
        }

        .detail-price-buy {
            border-bottom: 1px dashed #ccc;
            display: flex;

            h1 {
                padding-left: 10px;
                color: #00d3be;
                flex: 2;

                span {
                    font-weight: normal;
                    font-size: 15px;
                }
            }

            .detail-originalPrice {
                flex: 2;
                font-size: 11px;
                padding-top: 18px;
            }

            .buy-button {
                flex: 1;
                font-size: 15px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                margin: auto 15px auto 0;
                padding-right: 10px;
                border-radius: 5px;
                background-color: coral;
            }

            .choose-buy {
                background-color: #aaa;
            }
        }
    }
}
</style>