//使用混合的方式，复用相同的组件
<script>
import CreateProduct from "@v/product/CreateProduct";
export default {
    mixins: [CreateProduct],
    data() {
        return {
            title: "编辑商品",
            submitUrl: "/admin/product/edit",
            data: {},
        };
    },
    methods: {
        getDate() {
            let { params } = this.$route;
            this.$http
                .get("/admin/product/detail", { params })
                .then(({ data }) => {
                    this.data = data;
                });
        },
    },
    watch: {
        $$route() {
            this.getDate();
        },
    },
    created() {
        this.getDate();
    },
};
</script>