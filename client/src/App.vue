<template>
  <div id="app">
    <navBar />
    <router-view/>
    <st00pka />
  </div>
</template>
<script>
import navBar from '@/components/navbar.vue';
import st00pka from '@/components/st00pka.vue';

export default {
  components:{
    navBar,
    st00pka
  }  
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
