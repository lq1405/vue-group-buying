<template>
    <div class="product-list-page">
        <h1 class="page-title">商品列表</h1>

        <div class="page-list">
            <el-card v-for="item in data" :key="item.id">
                <img :src="'/static/home/home/img/lovelyFile/'+ item.img" alt />
                <h3>{{item.content}}</h3>
                <h4>售价￥{{item.discount}}</h4>
                <span class="type-span">111</span>
                <p>原价￥{{item.normalPrice}}</p>
                <p>已销售{{item.sold}}</p>
                <el-button type="success" @click="toEditPage(item.id)">修改</el-button>
                <el-button type="danger" @click="goodsDelete(item.content,item.id)">删除</el-button>
            </el-card>
        </div>

        <div class="list-btn">
            <router-link
                tag="el-button"
                :to="'/product/list/'+(page>1? page-1: 1)"
                class="is-round"
            >&larr;上一页</router-link>
            <router-link tag="el-button" :to="'/product/list/'+(page+1)" class="is-round">下一页&rarr;</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["page"],
    data() {
        return {
            data: [],
        };
    },
    methods: {
        getData() {
            let { params } = this.$route;
            console.log(params);
            this.$http
                .get("/admin/product/list", { params })
                .then(({ data }) => {
                    this.data = data.goods;
                });
        },
        toEditPage(id) {
            console.log(id);
            this.$router.replace("/product/edit/" + id);
        },
        goodsDelete(title, id) {
            this.$confirm(`确认是否删除“${title}”商品`, "温馨提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.$http
                        .post("/admin/product/delete", { id })
                        .then(({ data }) => {
                            if (data.state === 1) {
                                this.$message.success("删除成功");
                                setTimeout(() => {
                                    this.$router.go(0);
                                }, 1000);
                            } else {
                                this.$message.closeAll();
                                this.$message.error(data.msg);
                            }
                        });
                })
                .catch(() => {
                    this.$message.closeAll();
                    this.$message.info("已取消删除");
                });
        },
    },
    watch: {
        $route() {
            this.getData();
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style lang="scss" scoped>
.el-main {
    padding: 0;
}
.product-list-page {
    .list-btn {
        text-align: center;
    }
    .el-button {
        margin: 10px 20px;
    }
    .page-list {
        display: flex;
        flex-wrap: wrap;
        .el-card {
            position: relative;
            padding: 0;
            width: 21%;
            margin: 20px;
            img {
                width: 100%;
            }
            h3 {
                font-weight: normal;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            h4 {
                color: #f00;
            }
            .type-span {
                position: absolute;
                right: 10%;
                top: 65%;
            }
        }
    }
}
</style>