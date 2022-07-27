<template>
  <div>
    <input v-model="val" v-on:keyup.enter="setMtVal" placeholder="구구단" class="inputMt">
    <div>{{val}}단</div>

    <!-- clear btn -->
    <button v-on:click="clearAll" class="delBtn">all clear</button>

    <div v-if="mtShow" class="container">
      <ul v-for="(mtDatas, index) in mtTableData" v-bind:key="mtDatas" class="box">
        <li v-for="mtRight in mtRightData" v-bind:key="mtRight">{{mtTableData[index].id}} x {{mtRight}} = {{mtTableData[index].id*mtRight}}</li>

        <div v-on:click="mtDel(index)" class="delBtn">{{mtTableData[index].id}}단 삭제하기</div>

        <input v-on:keyup.enter="setNewMtData(index)" :class="[`inputMt updateBtn${index}`]" placeholder="입력후 enter update">
      </ul>
    </div>


    <div class="modal-container">
      <div class="modal">{{eventModal}}</div>
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
          // {id: i} this.mtTableData.push({id: i});{id: i, mtRight: [1,2,3,4,5,6,7,8,9], onOff: true} this.mtTableData.push({id: i, mtRight: [1,2,3,4,5,6,7,8,9]})
        ],
        mtRightData: [1,2,3,4,5,6,7,8,9],
        eventModal: '',
    }
  },
  methods: {
    setMtVal() { 
        var copy = [...this.val];
        if(copy[0] == 0) { // 숫자 error
            this.val = '';
            this.modal('올바른 숫자를 입력해주세요.', 'rgb(255, 79, 79)');
        } else if(isNaN(this.val)) { //string return
            this.val = '';
            this.modal('문자X', 'rgb(255, 79, 79)'); // string error modal
        } else if(!this.val){
            this.modal('입력해주세요!', 'rgba(83, 19, 244, 0.822)'); // no set modal
            return;
        } 
        else {
            this.mtTableData = []; // arr reset
            this.mtShow = true; //mt show 
    
            this.modal('업데이트', 'rgb(82, 216, 78)'); // update modal
            // this.testModal('green', 'green')
    
            for(var i=0; i<this.val; i++) { //mtTableData push
                this.mtTableData.push({id: i+1});  //id mtLeftVal, onOff v-if boolean
            }
        }
    },
    mtDel(id) { //del btn
        this.mtTableData.splice(id, 1);
        this.modal('삭제되었습니다.', 'rgb(255, 79, 79)'); // del modal
    },
    setNewMtData(index) { // update (string return)
        var copy = this.mtTableData[index].id; 
        var setBtnVal = document.querySelector(`.updateBtn${index}`).value; 
        var copy2 = [...setBtnVal];

        if(!setBtnVal) { // no set event
            this.modal('입력해주세요!', 'rgba(83, 19, 244, 0.822)'); // no set modal
            return;
        } else if(copy2[0] == 0) { // 숫자 error
            this.val = '';
            this.modal('올바른 숫자를 입력해주세요.', 'rgb(255, 79, 79)');
            return;
        } else if(isNaN(setBtnVal)) { // 문자입력 return
            this.mtTableData[index].id = copy;
            this.modal('문자X', 'rgb(255, 79, 79)'); // string error modal
            return;
        }

        for(var i=0; i<this.mtTableData.length; i++) { // duplicate 
            var copySetVal = setBtnVal;
            
            if(this.mtTableData[i].id == copySetVal) {
                this.modal('중복', 'rgb(255, 79, 79)'); // duplicate modal
                return;
            }
        }

        this.mtTableData[index].id = setBtnVal; // set val
        this.modal('업데이트', 'rgb(82, 216, 78)'); // update modal
    },
    clearAll() {
        this.val = '';
        this.mtTableData = [];
        this.modal('전체삭제', 'rgb(255, 79, 79)'); // clear modal
    },
    modal(modalName, color) {
        var modalCon = document.querySelector('.modal-container');

        document.querySelector('.modal').style.backgroundColor = color; // modal color change
        
        this.eventModal = modalName; 
        modalCon.style.top='5%'; // show modal
        setTimeout(()=>{modalCon.style.top='-50%'}, 700); // del modal
    },
    testModal(color) {
        document.querySelector('.modal').style.backgroundColor= color;
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

  /* animation vibration */
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
    transition: .4s;
  }
  .modal-container .modal {
    border-radius: 5px;
    color: #fff;
    font-weight: 30;
    padding: 10px;
    letter-spacing: 3px;
    width: 100px;
    line-height: 30px;
  }
</style>