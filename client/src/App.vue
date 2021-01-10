<template>
  <div id="app">
    <router-view/>
    <st00pka />
  </div>
</template>
<script>
import st00pka from '@/components/st00pka.vue';

export default {
  components:{
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
  color: #358D9E;
}
</style>
