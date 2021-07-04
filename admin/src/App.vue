<template>
    <div id="app">
        <router-view v-if="$store.state.username"></router-view>
        <Login v-else></Login>
    </div>
</template>
<script>
import Login from "./views/Login.vue";
export default {
    components: { Login },
    created() {
        this.$store.dispatch("userLoginInfo");
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html,
body {
    background-color: #eee;
    height: 100%;
}
#app {
    height: 100%;
}
</style>