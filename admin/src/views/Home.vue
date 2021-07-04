<template>
    <el-container class="home-page">
        <el-header>
            <div class="status">
                <span>你好</span>
                <span class="username">{{$store.state.username}}</span>
                <span class="user-quit">退出</span>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                >
                    <el-submenu v-for="(item,index) in menu" :index="index.toString()" :key="index">
                        <template slot="title" width="160px">
                            <i class="el-icon-goods" v-if="index===0"></i>
                            <i class="el-icon-menu" v-else-if="index===1"></i>
                            <i class="el-icon-s-custom" v-else-if="index===2"></i>

                            <span>{{item.title}}</span>
                        </template>
                        <el-menu-item
                            v-for="(item,index) in item.children"
                            :index="item.href"
                            :key="index"
                        >{{item.title}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: "商品模块",
                    children: [
                        { title: "创建商品", href: "/product/create" },
                        { title: "商品列表", href: "/product/list" },
                    ],
                },
                {
                    title: "首页模块",
                    children: [
                        { title: "分类按钮", href: "/home/types" },
                        { title: "首页广告", href: "/home/ads" },
                    ],
                },
                {
                    title: "用户模块",
                    children: [
                        { title: "创建用户", href: "/user/create" },
                        { title: "用户列表", href: "/user/list" },
                        { title: "账号管理", href: "/user/manage" },
                    ],
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.home-page {
    height: 100%;
    .el-header {
        background-color: #fff;
        margin-bottom: 10px;
        .status {
            text-align: right;
            line-height: 60px;
            margin-right: 30px;
            span {
                margin: 5px;
            }
            .user-quit {
                cursor: pointer;
                color: rgb(238, 52, 52);
            }
        }
    }

    .el-aside {
        background-color: #545c64;
        margin-right: 10px;
        .el-menu {
            li {
                width: 200px;
            }
        }
    }
    .el-main {
        background-color: #fff;
        .page-title {
            border-bottom: 1px dashed #ccc;
            padding-bottom: 10px;
        }
    }
}
</style>