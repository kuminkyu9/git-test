<template>
  <VueInput />
  <VueBody v-for="(selectKey, index) in selectNoR" :class="[`select_${index+1}`]" :key="selectKey"/>  <!-- store.js의 selectNoR(반복횟수) state값 만큼 VueBody 컴포넌트 생성 -->
  <VueModal />
</template>

<script>
import VueInput from './components/VueInput.vue'
import VueBody from './components/VueBody.vue'
import VueModal from './components/VueModal.vue'

export default {
  name: 'App',
  components: {
    VueInput,
    VueBody,
    VueModal
  },
  mounted() {
    document.querySelector(`.select_${this.selectNoR}`).classList.add('select');  // life circle mount >> VueBody 컴포넌트 마지막 요소에 select class >> select=display:none => block 처리
  },
  computed: {
    selectNoR() { // VueBody 반복 횟수 
      return this.$store.state.selectNoR;
    }          
  },
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
*{
  margin: 1%;
}
li {
  list-style: none;
}
.input_mt {
  padding: 5px;
  border: 1px solid gray;
  border-radius: 7px;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
  outline: none;
  margin: 15px 0;
}
.input_mt:focus {
  animation: vibration .1s 2;
}

.del_btn {
  transition: .3s;
  margin-top: 15px;
  padding: 5px;
  border-radius: 7px;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
  cursor: pointer;
}
.del_btn:hover {
  transition: .3s;
  background: rgba(255, 6, 6, 0.493);
} 
button.del_btn{
  outline: none;
  border: none;
}

/* animation vibration */
@keyframes vibration {
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(-1deg);
  }
}
</style>
