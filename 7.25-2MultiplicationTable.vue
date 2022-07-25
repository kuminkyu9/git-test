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
        <div v-on:click="mtDel(index)" class="delBtn">{{mtTableData[index].id}}단 삭제하기</div>

        <!-- update btn -->
        <input v-on:keyup.enter="setNewMtData(index)" :class="[`inputMt updateBtn${index}`]" placeholder="입력후 enter update">
      </ul>
    </div>


    <!-- modal -->
    <div class="modal-container">
      <div class="modal del-modal" v-if="eventModal == 'del'">삭제완료</div>
      <div class="modal update-modal" v-else-if="eventModal == 'update'">업데이트</div>
      <div class="modal duplicate-modal" v-else-if="eventModal == 'duplicate'">중복</div>
      <div class="modal clear-modal" v-else-if="eventModal == 'clear'">전체삭제</div>
      <div class="modal string-modal" v-else-if="eventModal == 'string'">숫자를입력해주세요</div>
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


      eventModal: 'del'
    }
  },
  methods: {
    setMtVal() { //string return
      if(isNaN(this.val)) {
        this.val = '';
        // 문자입력모달event
        this.eventModal = 'string';
      } 

      this.mtTableData = []; // arr reset
      this.mtShow = true; //mt show 

      for(var i=0; i<this.val; i++) { //mtTableData push
        this.mtTableData.push({id: i+1});  //id mtLeftVal, onOff v-if boolean
      }
    },
    mtDel(id) { //del btn
      this.mtTableData.splice(id, 1);
      // 삭제모달event
      this.eventModal = 'del'
    },
    setNewMtData(index) { // update (string return)
      var copy = this.mtTableData[index].id; 
      
      // duplicate 
      for(var i=0; i<this.mtTableData.length; i++) {
        var copySetVal = document.querySelector(`.updateBtn${index}`).value;
        if(this.mtTableData[i].id == copySetVal) {
          console.log('duplicate');
          // 중복모달event
          this.eventModal = 'duplicate'
          return
        }
      }

      // set val
      this.mtTableData[index].id = document.querySelector(`.updateBtn${index}`).value;
      // 업데이트모달event
      this.eventModal = 'update'
      if(isNaN(this.mtTableData[index].id)) {
        this.mtTableData[index].id = copy;
        // 문자입력모달event
        this.eventModal = 'string'
        return;
      }
    },
    clearAll() {
      this.mtTableData = [];
      // 전체삭제모달event
      this.eventModal = 'clear'
    },
    showModal() {
    }
  }
}
</script>

<style scoped>
  *{
    margin: 1%;
  }
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


  /* modal */
  .modal-container {
    position: fixed;
    top: -100%; 
    left: 2%;
  }
  .modal-container .modal {
    border-radius: 5px;
    background: rgb(255, 79, 79);
    color: #fff;
    font-weight: 30;
    padding: 10px;
    letter-spacing: 3px;
    width: 100px;
    line-height: 30px;
  }
  .modal-container .modal.update-modal {
    background: rgb(82, 216, 78);
  }
</style>