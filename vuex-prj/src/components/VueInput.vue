<template>
  <div>
    <input v-model="val" v-on:keyup.enter="setMtVal()" placeholder="구구단" class="input_mt">
    <div>{{val}}단</div>

    <!-- clear btn -->
    <button v-on:click="clearAll()" class="del_btn">all clear</button>
  </div>
</template>

<script>
export default {
  computed: {
    setVal() {
      return this.$store.state.setVal;
    },
    mtTableData() {
      return this.$store.state.mtTableData;
    },
    mtShow() {
      return this.$store.state.mtShow;
    },
  },
  data() {
    return {
      val: ''
    }
  },
  methods: {
    modal(colorName, nameVal) { // (modal 창 배경색 ex:(red, rgb(0,0,0), hsl(hue, saturation, lightness)), modal 창 text)
      var modalCon = document.querySelector('.modal_container');
        
      this.$store.commit('changeModalColor', colorName);  
      this.$store.commit('changeModalName', nameVal);  

      modalCon.style.top='5%';  // show modal
      setTimeout(()=>{modalCon.style.top='-50%'}, 700); // del modal
    },
    setMtVal() {
      var copy = [...this.val];
      if(copy[0] == 0) {  // input 값의 숫자 형식이 올바르지 않을 때
        this.val = '';
        this.modal('rgba(83, 19, 244, 0.822)', '숫자 형식이 잘못되었습니다.');
      } 
      else if(isNaN(this.val)) {  // input 값이 문자일 때
        this.val = '';
        this.modal('rgba(83, 19, 244, 0.822)', '숫자를 입력해주세요.');
      } 
      else if(!this.val){ // input 값이 없을 때
        this.modal('rgb(255, 79, 79)', '입력해주세요.');
        return;
      } 
      else {
        this.$store.commit('setVal', this.val);
        this.$store.commit('mtTableReset'); // mtTableData 초기화  
  
        this.modal('rgb(82, 216, 78)', '업데이트');
  
        for(var i=0; i<this.setVal; i++) { //mtTableData push
          this.mtTableData.push({id: i+1});  //id mtLeftVal,      onOff v-if boolean
        }
      }
    },
    clearAll() {
      this.val = '';
      this.$store.commit('mtTableReset'); // mtTableData 초기화
      this.modal('rgb(255, 79, 79)', '전체삭제');
    },
  }
}
</script>

<style>

</style>