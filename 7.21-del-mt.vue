<template>
  <div>
    <input v-model="val" v-on:keyup.enter="setMtVal" placeholder="구구단" class="inputMt">
    <div>{{val}}단</div>


    <div v-if="mtShow" class="container">
      <ul v-for="(mtDatas, index) in mtTableData" v-bind:key="mtDatas" class="box">
        <li v-for="mtRight in mtTableData[index].mtRight" v-bind:key="mtRight">{{mtTableData[index].id}} x {{mtRight}} = {{mtTableData[index].id*mtRight}}</li>
        <div v-on:click="testDel(index)" class="delBtn">{{mtTableData[index].id}}단 삭제하기</div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      mtShow: false,
      mtTableData: [
        // {id: 1, mtRight: [1,2,3,4,5,6,7,8,9], onOff: true} this.mtTableData.push({id: i, mtRight: [1,2,3,4,5,6,7,8,9]})
      ],
    }
  },
  methods: {
    setMtVal() {
      this.mtTableData = [] //arr reset

      this.mtShow = true; //mt show 

      for(var i=0; i<this.val; i++) { //mtTableData push
        this.mtTableData.push({id: i+1, mtRight: [1,2,3,4,5,6,7,8,9], onOff: true});  //id mtLeftVal, onOff v-if boolean
      }
    },
    testDel(id) { //del btn
      this.mtTableData.splice(id, 1);
    }
  }
}
</script>

<style>
  li {
    list-style: none;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .container .box {
    transition: .2s;
    padding: 20px;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
  }
  .container .box:hover {
    transition: .2s;
    transform: translateY(-5%);
  }
  .inputMt {
    padding: 5px;
    border: 1px solid gray;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
    outline: none;
  }
  .inputMt:focus {
    animation-name: test;
    animation-duration:2s;
    animation-iteration-count:5;
    animation-direction:alternate;
    animation-fill-mode: forwards;
  }
  .delBtn {
    transition: .3s;
    margin-top: 15px;
    padding: 5px;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
    cursor: pointer;
  }
  .delBtn:hover {
    transition: .3s;
    background: rgba(255, 6, 6, 0.493);
  } 

  @keyframes test {
    0% {
      transform: translateX(1%);
    }
    100% {
      transform: translateX(-2%);
    }
  }
</style>