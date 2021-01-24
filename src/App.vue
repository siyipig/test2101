<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/user">User</router-link>|
    <router-link :to="'/product/' + productId ">Product</router-link>|
    <router-link :to="{path: '/profile', query: {name: 'lisi', age: 18}}">Profile</router-link>
  </div>
  <router-view/>
  <button @click="increment"></button>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        productId : 'dici'
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment')
        console.log(this.$store.state.count)
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

