<template>
  <div class="Home">
    <br>
    <div v-for="post in posts">
      <h1>{{post.title}}</h1>
    </div>
    <table class="table table-info">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        posts:[]
      }
    },
    mounted(){
      var self = this;
      axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(function (res) {
          console.log(res.data);
          self.posts = res.data;
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    created() {
      console.log('Component has been created!');
    },
    destroyed() {
      console.log('Component has been destroyed!');
    }
  };

  export function get(url, data) {
    return axios.get(url, data, {
      console: log("can i get data?")
    })
  }
</script>
