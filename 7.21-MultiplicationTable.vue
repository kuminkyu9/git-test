<template>
  <div>
    <input v-model="val" v-on:keyup.enter="setMtVal" placeholder="구구단">
    <div>{{val}}단</div>


    <div v-if="AA" class="container">
      <ul v-for="(mtDatas, index) in mtTableData" v-bind:key="mtDatas" class="box">
        <li v-for="gues in gu" v-bind:key="gues">{{mtTableData[index].id}} x {{gues}} = {{mtTableData[index].id*gues}}</li>
        <button v-on:click="testDel(index)">{{mtTableData[index].id}}단 Del</button>
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
      AA: false,

      mtTableData: [
        // {id: 1, mtRigh: [1,2,3,4,5,6,7,8,9], onOff: true} this.mtTableData.push({id: i, mtRight: [1,2,3,4,5,6,7,8,9]})
      ],

    }
  },
  methods: {
    setMtVal() {
      this.mtTableData = [] //arr reset

      this.AA = true;
      var copy = this.val;
      var numCopy = Number(copy); //String=>Number
      this.setVal = numCopy;
      console.log(this.setVal)
      for(var i=0; i<numCopy; i++) {
        this.data[i]=i+1;

// test
        this.mtTableData.push({id: i+1, mtRight: [1,2,3,4,5,6,7,8,9], onOff: true});  //id mtLeftVal, onOff v-if boolean
        console.log(this.mtTableData[i].id, this.mtTableData[i].mtRight, this.mtTableData[i].onOff);
      }
    },
    testDel(id) {
      console.log(id);
      // var index = id + 1;
      this.mtTableData.splice(id, 1);
      // if(id===0) {
      //   this.mtTableData.shift()
      // }
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