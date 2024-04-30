<template>
    <div>
      <div class="jumbotron" ref="jumbotron">

      </div>
      

      <Transition name="fade">
        <div v-if="showCircle" class="circle-container">
          <div class="circle">
            <a href="#"> <i class="fas fa-arrow-up"></i></a>
           
          </div>
        </div>
      </Transition>
    </div>
  </template>

<script>


export default {
name: 'frecciaSu',
  data() {
    return {
      showCircle: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
handleScroll() {
  if (this.$refs.jumbotron) { 
    if (window.scrollY > this.$refs.jumbotron.offsetHeight) {
      this.showCircle = true;
    } else {
      this.showCircle = false;
    }
  }
}
  }
};
</script>

<style scoped>
.jumbotron{
    background-color: #212529; 
    height: 10px;
    padding: 0px;
 
}

.circle-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: opacity 0.5s;
  z-index: 999;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color:rgb(57, 57, 57); 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.circle i {
  color: white;
}

/* Stili per l'animazione */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>