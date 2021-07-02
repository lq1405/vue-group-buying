<template>
    <div class="lovely-food">
        <ul class="food-list">
            <li v-for="item in list" :key="item.id">
                <router-link :to="'/detail/' + item.id" tag="a">
                    <div class="food-list-img">
                        <img src="/home/img/lovelyFile/00.jpg" alt />
                    </div>
                    <div class="food-list-describe">
                        <p class="food-name" v-if="msg.name">{{ item[msg.name] }}</p>
                        <p class="food-content" v-if="msg.content">{{ item[msg.content] }}</p>
                        <span class="food-discount" v-if="msg.discount">{{ item[msg.discount] }}元</span>
                        <span v-if="msg.normalPrice">门市价:{{ item[msg.normalPrice] }}</span>
                        <span v-if="msg.sold" class="sold-food">已售{{ item[msg.sold] }}</span>
                        <span v-if="msg.distance" class="sold-food">距离{{item[msg.distance]}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props: ["list", "msg", "noShow"],
};
</script>
<style scoped lang="scss">
* {
    list-style: none;
    margin: 0;
    padding: 0;
}

.lovely-food {
    hr {
        width: 340px;
        height: 1px;
    }
    li {
        padding: {
            top: 10px;
            bottom: 10px;
            left: 10px;
        }
        border-bottom: 1px dashed #ccc;
        background-color: #ffffff;

        a {
            text-decoration: none;
            color: #666;

            height: 80px;
            display: flex;
            overflow: hidden;
            position: relative;

            .food-list-img {
                flex: 1;

                img {
                    width: 123px;
                    height: 80px;
                }
            }

            .food-list-describe {
                margin-left: 5px;
                flex: 3;

                p {
                    white-space: nowrap;
                }

                .food-name {
                    margin-top: 10px;
                    font-size: 16px;
                }

                .food-content {
                    font-size: 10px;
                    margin-bottom: 10px;
                }

                span {
                    font-size: 12px;
                }

                .sold-food {
                    position: absolute;
                    right: 10px;
                    bottom: 2px;
                    margin-left: 22px;
                }

                .food-discount {
                    color: #ff0000;
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
