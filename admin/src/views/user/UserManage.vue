<template>
    <div class="user-manage-page">
        <h1 class="page-title">修改密码</h1>
        <el-form label-width="100px" :rules="rules" :model="manage" ref="manage">
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="manage.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="manage.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="conformPassword">
                <el-input placeholder="请输入确认密码" v-model="manage.conformPassword" type="password"></el-input>
            </el-form-item>
            <el-button type="success" class="submit-btn" @click="submitNewPassword">修改</el-button>
            <el-button type="warning" class="submit-btn" @click="resetPassword">重置</el-button>
        </el-form>
    </div>
</template>

<script>
import { username, password, checkValue } from "@t/validators";
export default {
    data() {
        return {
            manage: {
                username: "111a",
                password: "111a",
                conformPassword: "111a",
            },
            rules: {
                //trigger设置位blur是在失去焦点的时候校验
                username: [{ trigger: "blur", validator: username }],
                password: [{ trigger: "blur", validator: password }],
                conformPassword: [
                    {
                        trigger: "blur",
                        validator: (...args) => {
                            checkValue(
                                this.manage.password,
                                "确认密码",
                                ...args
                            );
                        },
                    },
                ],
            },
        };
    },
    methods: {
        submitNewPassword() {
            const { username, password } = this.manage;
            this.$refs.manage.validate((valid) => {
                if (valid) {
                    this.$http
                        .post("/admin/manage/updatePassword", {
                            username,
                            password,
                        })
                        .then(({ data }) => {
                            if (data.state === 1) {
                                this.$router.go(0);
                            } else {
                                this.$message.closeAll();
                                this.$message.error(data.msg);
                            }
                        });
                }
            });
        },
        resetPassword() {
            //重置密码，执行this.$refs.manage中的resetField函数实现
            //单纯的清除表单中的数据
            this.$refs.manage.resetFields();
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
.el-form {
    width: 50%;
    margin: {
        top: 30px;
        left: 100px;
    }
    .el-form-item {
        margin-bottom: 23px;
    }
    .submit-btn {
        width: 100px;
        height: 30px;
        position: relative;
        left: 40%;
        margin-top: 30px;
    }
}
</style>