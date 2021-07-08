<template>
    <div class="create-menu-page">
        <h1 class="page-title">创建分类图标</h1>

        <el-form label-width="100px" :rules="rules" :model="data" ref="data">
            <el-form-item label="编号" prop="id">
                <el-input v-model="data.id"></el-input>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="data.name"></el-input>
            </el-form-item>
            <el-form-item label="图标" prop="img">
                <el-upload
                    action="/admin/product/upload"
                    :show-file-list="false"
                    :on-success="uploadSuccess"
                    :on-error="uploadError"
                >
                    <el-button type="primary">点击上传</el-button>
                    <span class="upload-tip" slot="tip">选择上传的图片</span>
                </el-upload>
                <img v-if="data.img" :src="data.img" />
            </el-form-item>
            <el-button class="submit-btn" type="success" @click="submitIcons">提交</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        let rules = {};
        ["id", "name", "img"].forEach((item) => {
            rules[item] = [{ required: true, message: "请输入内容" }];
        });
        return {
            data: {},
            rules,
        };
    },
    methods: {
        uploadSuccess(data) {
            if (data.errno === 0) {
                this.$set(this.data, "img", data.img);
            } else {
                this.$message.closeAll();
                this.$message.error(data.msg);
            }
        },
        uploadError() {
            this.$message.closeAll();
            this.$message.error("上传错误，请重新上传");
        },
        submitIcons() {
            this.$refs.data.validate((valid) => {
                if (valid) {
                    this.$http
                        .post("/home/icons/create", this.data)
                        .then(({ data }) => {
                            if (data.errno === 0) {
                                this.$message.success(data.msg);
                                setTimeout(() => {
                                    this.$router.go(1);
                                }, 1000);
                            } else {
                                this.$message.closeAll();
                                this.$message.error(data.msg);
                            }
                        });
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.el-form {
    .submit-btn {
        margin-left: 100px;
    }
    img {
        margin-top: 20px;
    }
}
</style>