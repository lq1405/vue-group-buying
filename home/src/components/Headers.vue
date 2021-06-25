<template>
    <div class="app-header">
        <div class="header-left" @click="goBack">
            <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
        </div>
        <div class="search">
            <h1 class="search-h1">{{ title }}</h1>
        </div>
        <div class="header-right">
           <p>关闭</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.app-header {
    background-color: #00D3BE;
    display: flex;
    margin: 0;
    height: 50px;
    .header-left,.header-right {
        color: #eeeeee;
        flex: 1;
        font-size: 13px;
        text-align: center;
        line-height: 50px;
    }
    .header-left{
        & i{
            margin-top: 12px;
        }
    }
    .search {
        flex: 6;
        & .search-h1 {
            font-size: 25px;
            text-align: center;
            line-height: 50px;
        }
    }
}
</style>
<script>
import ('../assets/font-awesome-4.7.0/css/font-awesome.css')
export default {
    props: ['title'],
    methods:{
        goBack(){
            history.back();
        }
    }
}
</script>

