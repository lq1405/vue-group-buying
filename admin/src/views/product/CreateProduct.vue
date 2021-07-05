<template>
    <div class="create-product-page">
        <h1 class="page-title">{{title}}</h1>
        <el-form label-width="100px" :model="data" :rules="rules" ref="product">
            <el-form-item label="商品名称" prop="brandName">
                <el-input autocomplete="off" placeholder="请输入商品名称" v-model="data.brandName" type></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="title">
                <el-input
                    autocomplete="off"
                    placeholder="请输入商品描述"
                    v-model="data.title"
                    type="textarea"
                ></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
                <el-input
                    autocomplete="off"
                    placeholder="请输入商品价格"
                    v-model="data.price"
                    type="number"
                ></el-input>
            </el-form-item>
            <el-form-item label="商品原价" prop="originalPrice">
                <el-input
                    autocomplete="off"
                    placeholder="请输入商品原件"
                    v-model="data.originalPrice"
                    type="number"
                ></el-input>
            </el-form-item>
            <el-form-item label="商品评分" prop="averageScore">
                <el-rate v-model="data.averageScore" show-score allow-half disabled></el-rate>
            </el-form-item>
            <el-form-item label="商品分类" prop="types">
                <el-select v-model="data.types" placeholder="请选择分类">
                    <el-option
                        v-for="item in types"
                        :key="item.id"
                        :value="item.id"
                        :label="item.text"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品销量" prop="sold">
                <el-input
                    autocomplete="off"
                    :disabled="true"
                    placeholder="请输入商品销量"
                    v-model="data.sold"
                    type="number"
                ></el-input>
            </el-form-item>
            <el-form-item label="店铺地址" prop="shopAddr">
                <el-input autocomplete="off" placeholder="请输入店铺地址" v-model="data.shopAddr" type></el-input>
            </el-form-item>
            <el-form-item label="店铺分店" prop="subShop">
                <el-input
                    autocomplete="off"
                    placeholder="请输入店铺分店"
                    v-model="data.subShop"
                    type="number"
                ></el-input>
            </el-form-item>
            <el-form-item label="商品图片" prop="img">
                <el-upload
                    action="/admin/product/upload"
                    :show-file-list="false"
                    :on-success="uploadSuccess"
                    :on-error="uploadError"
                >
                    <el-button type="primary">点击上传</el-button>
                    <span class="upload-tip" slot="tip">选择上传的图片</span>
                </el-upload>
                <img v-if="data.img" class="upload-img" :src="data.img" />
            </el-form-item>
            <el-form-item label="商品内容" prop="content">
                <quill-editor v-model="data.content"></quill-editor>
            </el-form-item>
            <el-button style="margin-left: 100px" type="success" @click="submitProductData">提交</el-button>
        </el-form>
    </div>
</template>

<script>
import { types } from "@t/types";
export default {
    data() {
        let rules = {};
        [
            "brandName",
            "title",
            "price",
            "originalPrice",
            "shopAddr",
            "subShop",
            "img",
            "content",
            "types",
        ].forEach((item) => {
            rules[item] = [{ required: true, message: "请输入内容" }];
        });
        return {
            types,
            data: {
                sold: 0,
                averageScore: 1,
            },
            rules,
            title: "创建商品",
            submitUrl: "/admin/product/create",
        };
    },
    computed: {
        dealData() {
            ["originalPrice", "price", "subShop"].forEach((item) => {
                this.data[item] = +this.data[item];
            });
            return this.data;
        },
    },
    methods: {
        uploadSuccess(data) {
            if (data.state === 1) {
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
        submitProductData() {
            this.$refs.product.validate((valid) => {
                if (valid) {
                    this.$http
                        .post(this.submitUrl, this.dealData)
                        .then(({ data }) => {
                            if (data.state === 1) {
                                this.$message.success("创建成功");
                                setTimeout(() => {
                                    this.$router.replace("/product/list/1");
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