<template>
  <div class="hello bg-danger">
    <h1>{{ msg }}</h1>
  <Home></Home>
  </div>
</template>

<script>
  import Home from "./home/Home/Home";
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my first Vue.js Application'
    }
  },
    components : {Home: Home}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
