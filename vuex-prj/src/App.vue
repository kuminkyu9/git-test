<template>
  <VueInput />
  <VueBody/>
  <VueBody class="select"/>
  <VueModal />

  <!-- for문으로 돌려서 -->

  <!-- <VueOrigin style="display: block"/> -->
</template>

<script>
import VueInput from './components/VueInput.vue'
import VueBody from './components/VueBody.vue'
// import VueOrigin from './components/VueOrigin.vue'
import VueModal from './components/VueModal.vue'

export default {
  name: 'App',
  components: {
    VueInput,
    VueBody,
    // VueOrigin,
    VueModal
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
