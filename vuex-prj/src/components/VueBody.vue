<template>
    <div class="container">

        <div class="choose_bx">
            <select>
                <!-- <option v-for="(SWF, index) in SList" :value="SWF[index].value" v-bind:key="SWF">{{ SWF[index].text }}</option> -->
                <option v-for="(swf, index) in SwfList" :value="SwfList[index].text" :key="swf">{{SwfList[index].text}}</option>
            </select>
        </div>

        <ul v-for="(mtDatas, index) in mtTableData" v-bind:key="mtDatas" class="box">
            <li v-for="mtRight in mtRightData" v-bind:key="mtRight">{{mtTableData[index].id}} x {{mtRight}} = {{mtTableData[index].id*mtRight*test}}</li>

            <div v-on:click="mtDel(index)" class="delBtn">{{mtTableData[index].id}}단 삭제하기</div>
         
            <input v-on:keyup.enter="setNewMtData(index)" :class="[`inputMt updateBtn${index}`]" placeholder="입력후 enter update">
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        mtTableData() {
            return this.$store.state.mtTableData;
        },
        mtRightData() {
            return this.$store.state.mtRightData;
        },
        SwfList() {
            return this.$store.state.SwfList;
        }
    },
    data() {
        return {
            test: 1
        }
    },
    methods: {
        testChange(obj) {
            obj.style.backgroundColor='red'
        },
        changeSelect() {
            var itemIdSelect = document.querySelector('#select_total_val');
            var itemName = itemIdSelect.options[itemIdSelect].text;
            console.log(itemName)
        },
        mtDel(id) { //del btn
            this.mtTableData.splice(id, 1);
            this.modal('rgb(255, 79, 79)', '삭제되었습니다.'); // del modal
        },
        setNewMtData(index) { // update (string return)
            var copy = this.mtTableData[index].id; 
            var setBtnVal = document.querySelector(`.updateBtn${index}`).value; 
            var copy2 = [...setBtnVal];

            if(!setBtnVal) { // no set event
                this.modal('rgb(255, 79, 79)', '입력해주세요.'); // no set modal
                return;
            } 
            if(copy2[0] == 0) { // 숫자 error
                this.val = '';
                this.modal('rgba(83, 19, 244, 0.822)', '숫자형식이 잘못되었습니다.'); // numerr modal
                return;
            }  
            if(isNaN(setBtnVal)) { // 문자입력 return
                this.mtTableData[index].id = copy;
                this.modal('rgba(83, 19, 244, 0.822)', '숫자를 입력해주세요.'); // string error modal
                return;
            }

            for(var i=0; i<this.mtTableData.length; i++) { // duplicate 
                var copySetVal = setBtnVal;

                if(this.mtTableData[i].id == copySetVal) {
                    this.modal('rgba(83, 19, 244, 0.822)', '중복'); // duplicate modal
                    return;
                }
            }

            this.mtTableData[index].id = setBtnVal; // set val
            this.modal('rgb(82, 216, 78)', '업데이트'); // update modal
        },
        modal(colorName, nameVal) {
            var modalCon = document.querySelector('.modal_container');

            this.$store.commit('changeModalColor', colorName); //  modal
            this.$store.commit('changeModalName', nameVal);

            modalCon.style.top='5%'; // show modal
            setTimeout(()=>{modalCon.style.top='-50%'}, 700); // del modal
        },
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
.container {
    background: rgb(248, 248, 248);
    padding: 5%;
    margin: 5% 0;
    border-radius: 5px;
    position: relative;
}
.choose_bx {
    display: none;
    position: absolute;
    top: 2px;
    left: 2px;
}
.select .choose_bx {
    display: block;
}

/* test */
select {
    cursor: pointer;
    padding: .2em .8em; 
    outline: none;
    border: 1px solid #999;
    appearance: none;
}
</style>