<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Jumbotron />
    <Features />
    <frecciaSu />

    <appFooter />
 



  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';
import Jumbotron from './components/Jumbotron.vue';
import frecciaSu from './components/frecciaSu.vue';
import Features from './components/Features.vue'; 
import appFooter from './components/appFooter.vue';/*
import nuovazona from './components/nuovazona.vue';*/




export default {
  name: 'App',
  components: {
    Navbar,
    Jumbotron,
    frecciaSu,
    Features,/*
    nuovazona,*/
    appFooter,
 

  }  }

</script>


<style>

html body {
  font-family: 'Montserrat','Poppins', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #212529; 
  margin-top: 40px;
}


</style>
