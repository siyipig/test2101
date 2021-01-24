<template>
    <h2>我是Profile文件</h2>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <button @click="userClick"></button>
    <router-view/>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                profileId: '/test'
            }
        },
        created() {
            // document.title = "我的"
        },
        methods: {
            userClick() {
                this.$router.replace({
                    path: '/profile' + this.profileId,
                    query: {
                        name: 'ww',
                        age: '33',
                        height: '186'
                    }
                } );
            }

        }

    }
</script>

<style scoped>

</style>