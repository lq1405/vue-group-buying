<template>
    <div class="menu-types-page">
        <h1 class="page-title">首页分类管理</h1>
        <el-button class="create-new-button" type="primary" @click="toCreateMenu">创建新分类</el-button>

        <el-table :data="data" stripe style="width:60%" border>
            <el-table-column prop="id" label="编号" width="100px"></el-table-column>
            <el-table-column prop="name" label="名称" width="200px"></el-table-column>
            <el-table-column prop="img" label="图标" width="500px">
                <template slot-scope="scope">
                    <el-popover placement="top-start" title trigger="hover">
                        <img :src="scope.row.img" alt style="width: 150px;height: 150px" />
                        <img slot="reference" :src="scope.row.img" style="width: 25px;height: 25px" />
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="200px">
                <el-button type="text" >编辑</el-button>
                <el-button type="text">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
        };
    },
    created() {
        this.getData();
    },
    methods: {
        toCreateMenu() {
            this.$router.replace("/home/types/create");
        },
        getData() {
            this.$http.get("/home/icons/list").then(({ data }) => {
                this.data = data;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.create-new-button {
    margin-top: 20px;
    position: relative;
    left: 50%;
}
.el-table {
    .el-button {
        margin-left: 20px;
        padding: 0;
    }
    margin-top: 20px;
    .icons-img {
        width: 10px;
        height: 10px;
    }
}
</style>