<template>
    <div id="app">
        <Headers title="1111">
            <div slot="right">关闭</div>
        </Headers>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
import Headers from "./components/Headers";
// import LovelyFood from "./components/LovelyFood";

export default {
    components: {Headers},
    data() {
        return {
        }
    }
    , created() {
        console.log(this.page)
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

body {
    background-color: #F0EFED;
}

</style>

