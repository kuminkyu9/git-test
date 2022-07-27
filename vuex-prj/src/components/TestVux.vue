<template>
  <div>
    <h1>Vuex test with composition api</h1>
    {{counter}}
    {{$store.getters.getTwoPowerCounter}}
    <button @click="increase">increase</button> 
  </div>  
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {  
  setup() {
    const store = useStore();
    const counter = computed(()=>store.state.counter+1);
    const increase = () => store.commit("setCounter", ++counter.value);

    return {counter, increase}
  }
}
</script>

<style>

</style>