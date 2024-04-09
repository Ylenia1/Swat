<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Jumbotron />
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';
import Jumbotron from './components/Jumbotron.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron 
  }
}
</script>
<style>
html body {
  font-family: 'Montserrat','Poppins', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #212529; /* Nero */
  margin-top: 40px;
}


</style>