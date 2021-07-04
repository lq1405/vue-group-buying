<template>
    <div class="login-page">
        <div class="login-form">
            <h1>Login</h1>
            <el-form label-width="100px" :rules="rules" :model="login" ref="login">
                <el-form-item label="账号" prop="username">
                    <el-input
                        v-model="login.username"
                        class="input-botton"
                        placeholder="请输入账号"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        v-model="login.password"
                        class="input-botton"
                        type="password"
                        placeholder="请输入密码"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-button type="success" class="login-button" @click="submitLoginData">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import { username, password } from "@t/validators";

export default {
    data() {
        return {
            login: {
                username: "admin",
                password: "1111ddd",
            },
            rules: {
                username: { trigger: "blur", validator: username },
                password: { trigger: "blur", validator: password },
            },
        };
    },
    methods: {
        submitLoginData() {
            this.$refs.login.validate((valid) => {
                if (valid) {
                    this.$store.dispatch("login", this.login);
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.login-form {
    width: 25%;
    height: 250px;
    border-radius: 5px;
    border: 1px solid #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: {
        top: -125px;
        left: -10%;
    }
    h1 {
        text-align: center;
        padding-bottom: 5px;
        margin-bottom: 10px;
        border-bottom: 1px dashed #ccc;
    }
    .input-botton {
        width: 80%;
    }
    .login-button {
        width: 20%;
        position: relative;
        left: 40%;
    }
}
</style>