<template>
  <div>
    <input v-model="val" v-on:keyup.enter="setMtVal" placeholder="구구단" class="inputMt">
    <div>{{val}}단</div>

    <!-- all clear btn -->
    <button v-on:click="clearAll" class="delBtn">all clear</button>

    <div v-if="mtShow" class="container">
      <ul v-for="(mtDatas, index) in mtTableData" v-bind:key="mtDatas" class="box">
        <li v-for="mtRight in mtRightData" v-bind:key="mtRight">{{mtTableData[index].id}} x {{mtRight}} = {{mtTableData[index].id*mtRight}}</li>

        <!-- delete btn -->
        <div v-on:click="mtDel(index, mtTableData[index].id)" class="delBtn">{{mtTableData[index].id}}단 삭제하기</div>

        <!-- update btn -->
        <input v-on:keyup.enter="setNewMtData(index)" :class="[`inputMt updateBtn${index}`]" placeholder="입력후 enter update">
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
        // {id: i, mtRight: [1,2,3,4,5,6,7,8,9], onOff: true} this.mtTableData.push({id: i, mtRight: [1,2,3,4,5,6,7,8,9]})
      ],
      mtRightData: [1,2,3,4,5,6,7,8,9],
    }
  },
  methods: {
    setMtVal() { //string return
      if(isNaN(this.val)) {
        alert(this.val+'은 숫자가 아닙니다. 숫자를 입력해주세요.');
        this.val = '';
        return; // no reset
      } 

      this.mtTableData = []; // arr reset
      this.mtShow = true; //mt show 

      for(var i=0; i<this.val; i++) { //mtTableData push
        this.mtTableData.push({id: i+1});  //id mtLeftVal, onOff v-if boolean
      }
    },
    mtDel(id, mtIndex) { //del btn
      this.mtTableData.splice(id, 1);
      alert(`${mtIndex}단이 삭제되었습니다.`);
    },
    setNewMtData(index) { // update (string return)
      var copy = this.mtTableData[index].id; 
      this.mtTableData[index].id = document.querySelector(`.updateBtn${index}`).value;
      if(isNaN(this.mtTableData[index].id)) {
        alert(this.mtTableData[index].id+'는 숫자가 아닙니다. 숫자를 입력해주세요.');
        this.mtTableData[index].id = copy;
        return;
      }
      alert(this.mtTableData[index].id + "단으로 Update");
    },
    clearAll() {
      this.mtTableData = [];
      alert('전체 삭제되었습니다.');
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
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
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
    margin: 15px 0;
  }
  .inputMt:focus {
    animation: vibration .1s 2;
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
  button.delBtn{
    outline: none;
    border: none;
  }

  @keyframes vibration {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }
</style>