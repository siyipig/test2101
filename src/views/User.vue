<template>
    <h2>用户来了</h2>
    <router-link to="/user/news">用户新闻</router-link>|
    <router-link to="/user/msg">用户信息</router-link>
    <router-view/>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped>

</style>