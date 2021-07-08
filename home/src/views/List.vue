<template>
    <div class="food-list-page">
        <Search placeholder="请输入搜索内容" :search="showSearchValue"></Search>
        <ul class="sort-choose">
            <li v-for="order in sortGoods" :key="order.id" @click="sortList(order.id)">
                {{ order.text }}
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </li>
        </ul>
        <LovelyFood :list="list" :noShow="others"></LovelyFood>
        <div class="tip-no-show" v-if="others.length" @click="showAllGoods">
            显示其他{{ others.length }}
            件未显示商品
            <i
                class="fa fa-chevron-down"
                aria-hidden="true"
            ></i>
        </div>
    </div>
</template>

<script>
import Search from "@/components/Search";
import LovelyFood from "@/components/LovelyFood";

export default {
    name: "List",
    components: { Search, LovelyFood },
    data() {
        return {
            list: [],
            sortGoods: [
                { text: "价格排序", id: "avgPrice" },
                { text: "销量排序", id: "lng" },
                { text: "好评排序", id: "avgScore" },
                { text: "距离排序", id: "distance" },
            ],
            others: [],
            arr: [],
        };
    },
    computed: {
        search() {
            return this.$store.state.search;
        },
    },
    watch: {
        search(value) {
            console.log(value);
        },
    },
    methods: {
        showSearchValue(value) {
            // console.log(value);
            this.$store.commit("searchFoodData", value);
            this.list = this.arr
                .filter((item) => item.name.indexOf(this.search) >= 0)
                .slice(0, 3);
            this.others = this.arr
                .filter((item) => item.name.indexOf(this.search) >= 0)
                .slice(3);
        },
        showAllGoods() {
            this.list = this.arr;
            this.others = [];
        },
        sortList(id) {
            this.list.sort((a, b) => {
                return b[id] - a[id];
            });
        },
    },
    created() {
        let params = this.$route.params;

        let types = +params.id;

        this.$http.post(`/home/getFoodList`, { types }).then(({ data }) => {
            console.log(data);
            if (data.errno === 0) {
                this.arr = data.data;
                this.list = this.arr.slice(0, 3);
                this.others = this.arr.slice(3);
            } else {
                alert(data.msg);
            }
        });
    },
};
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.tip-no-show {
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: coral;
    background-color: #fff;
}

.sort-choose {
    display: flex;
    height: 40px;
    border-bottom: 1px dashed #555;

    li {
        flex: 1;
        font-size: 12px;
        text-align: center;
        line-height: 40px;
        background-color: #ffffff;
    }
}
</style>