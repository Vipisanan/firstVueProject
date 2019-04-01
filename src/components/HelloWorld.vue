<template>
  <div class="hello ">
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Home from "./room/Home/Home";
  import NavBar from "./room/Home/NavBar/NavBar";
  import Footer from "./room/Home/Footer/Footer";
  import About from "./room/Home/NavBar/About/About";
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my first Vue.js Application'
    }
  },
    components : {Home,NavBar,Footer,About}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
