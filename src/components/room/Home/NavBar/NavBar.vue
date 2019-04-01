<template>
  <div class="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">
            <router-link to="/">Home</router-link>
            <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">
            <router-link to="about">test 1</router-link>
          </a>
          <a class="nav-item nav-link" href="#">
            <router-link to="about">test 2</router-link>
          </a>
          <a class="nav-item nav-link " href="about">
            <router-link to="about">About</router-link>
          </a>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {},
  };
</script>
