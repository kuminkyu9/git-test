<template>
  <VueBody style="display: none"/>
  <TestVux />
</template>

<script>
import VueBody from './components/VueBody.vue'
import TestVux from './components/TestVux.vue'

export default {
  name: 'App',
  components: {
    VueBody,
    TestVux,
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
  margin-top: 60px;
}
</style>
