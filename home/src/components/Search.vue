<template>
    <div class="search-input">
        <input type="text" name="" id="" :placeholder="placeholder" @keyup.enter="searchValue" v-model="msg">
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: ''
        }
    },
    name: "Search",
    props: ['placeholder', 'search'],
    methods:{
        searchValue(){
            this.search(this.msg);
            this.msg='';
        }
    },
    created() {
        document.getElementsByTagName('body')[0].style.backgroundColor='#eeeeee';
    }

}
</script>

<style scoped lang="scss">
.search-input {
 display: flex;
    padding: 5px;
    input {
       flex: 1;
        height: 25px;
        border-radius: 20px;
        margin: 0 20px 0 20px;
        padding-left: 10px;
    }
}

</style>