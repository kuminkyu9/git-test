<template>
  <div>
    <input v-model="val" v-on:keyup.enter="a" placeholder="구구단">
    <div>{{val}}단</div>


    <div v-if="AA" class="container">
      <ul v-for="(datas, index) in data" v-bind:key="datas" class="box">
        <li v-for="gues in gu" v-bind:key="gues">{{index+1}} x {{gues}} = {{(index+1)*gues}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      data: [],
      setVal: '',
      gu: [1,2,3,4,5,6,7,8,9],
      AA: false
    }
  },
  methods: {
    a: function() {
      this.AA = true;

      var copy = this.val;
      var numCopy = Number(copy); //String=>Number
      this.setVal = numCopy;
      console.log(this.setVal)
  
      for(var i=0; i<numCopy; i++) {
        this.data[i]=i+1;
        
      }
      
      console.log(this.data)
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .container .box {
    margin: 20px 40px;
  }
</style>