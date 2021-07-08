<template>
    <div class="home-page">
        <ul class="type-list">
            <li v-for="item in type" :key="item.id">
                <router-link :to="'/list/' + item.id" tag="a">
                    <img :src="item.img" alt />
                    <p>{{ item.name }}</p>
                </router-link>
            </li>
        </ul>
        <p class="lovely">猜你喜欢</p>
        <LovelyFood :list="list"></LovelyFood>
    </div>
</template>
<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.home-page {
    .type-list {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        width: 100%;
        margin-top: 5px;
    }
    .lovely {
        background-color: #ffffff;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        padding-left: 10px;
        border-bottom: 1px dashed #555;
    }

    li {
        //flex: 1;
        margin-bottom: 10px;
        width: 20%;
        padding-top: 10px;

        a {
            text-decoration: none;
            color: #333333;

            img {
                width: 60%;
                margin-left: 12px;
            }

            p {
                font-size: 12px;
                text-align: center;
            }
        }
    }
}
</style>

<script>
import LovelyFood from "../components/LovelyFood";

export default {
    name: "Home",
    components: { LovelyFood },
    data() {
        return {
            type: [],
            list: [],
        };
    },
    created() {
        this.$http
            .get("/home/lovely")
            .then(({ data }) => {
                // console.log(data);
                this.list = data;
            })
            .catch((data) => {
                console.log(data);
            });
        this.$http
            .get("/home/icons")
            .then(({ data }) => {
                this.type = data;
            })
            .catch((data) => {
                console.log(data);
            });
    },
    beforeCreate() {
        document
            .querySelector("body")
            .setAttribute("style", "background-color:#F0EFED");
    },
    beforeDestroy() {
        document.body.removeAttribute("style");
    },
};
</script>

