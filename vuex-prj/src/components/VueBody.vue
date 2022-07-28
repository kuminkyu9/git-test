<template>
    <div class="container">

        <!-- VueBody 처음 컴포넌트 제외하고 display:block -->
        <div class="choose_bx"> 
            <select v-on:change="selChangeVal($event)">
                <option v-for="(swf) in SwfList" :value="swf.value" :key="swf">{{swf.text}}</option> <!-- :class="[`select_${index+1}`]" -->
            </select>
        </div>


        <ul v-for="(mtDatas, index) in mtTableData" v-bind:key="mtDatas" class="box">
            <li v-for="mtRight in mtRightData" v-bind:key="mtRight">{{mtDatas.id*cmpSelectVal}} x {{mtRight*cmpSelectVal}} = {{mtDatas.id*mtRight}}</li>

            <div v-on:click="mtDel(index)" class="del_btn">{{mtDatas.id*cmpSelectVal}}단 삭제하기</div>  <!-- VueBody 처음 컴포넌트 제외하고 display:none -->
            
            <div class="select_btn">{{mtDatas.id*cmpSelectVal}}단</div>  <!-- VueBody 처음 컴포넌트 제외하고 display:block -->
         
            <input v-on:keyup.enter="setNewMtData(index)" :class="[`input_mt updateBtn${index} input_new_btn`]" placeholder="입력후 enter update">  <!-- VueBody 처음 컴포넌트 제외하고 display:none -->
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
        },
    },
    data() {
        return {
            cmpSelectVal: 1 // 컴포넌트별로 줘서 각각 값을 설정할 수 있도록 sotre.js에 값을 안넣음.
        }
    },
    methods: {
        modal(colorName, nameVal) { // (modal 창 배경색 ex:(red, rgb(0,0,0), hsl(hue, saturation, lightness)), modal 창 text)
            var modalCon = document.querySelector('.modal_container');

            this.$store.commit('changeModalColor', colorName); //  modal
            this.$store.commit('changeModalName', nameVal);

            modalCon.style.top='5%'; // show modal
            setTimeout(()=>{modalCon.style.top='-50%'}, 700); // del modal
        },
        selChangeVal(event) {
            this.cmpSelectVal = event.target.value;
            this.modal('rgb(82, 216, 78)', '업데이트');
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

            console.log(document.querySelector(`.updateBtn${index}`).value);

            // errors
            if(!setBtnVal) { // no set event
                this.modal('rgb(255, 79, 79)', '입력해주세요.'); // no set modal
                return;
            }else if(copy2[0] == 0) { // 숫자 error
                this.val = '';
                this.modal('rgba(83, 19, 244, 0.822)', '숫자형식이 잘못되었습니다.'); // numerr modal
                return;
            }else if(isNaN(setBtnVal)) { // 문자입력 return
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
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: rgb(248, 248, 248);
    padding: 5%;
    margin: 5% 0;
    border-radius: 5px;
    position: relative;
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

/* select css */
.choose_bx {
    display: none;
    position: absolute;
    top: 2px;
    left: 2px;
}
.select .input_new_btn, .select .del_btn, .select_btn{
    display: none;
}
.select .choose_bx, .select .select_btn {
    display: block;
}
.select_btn {
    transition: .3s;
    margin-top: 15px;
    padding: 5px;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
    min-width: 170px;
    cursor: pointer;
}
.select_btn:hover {
    transition: .3s;
    background: rgba(44, 243, 77, 0.493);
} 
select {
    cursor: pointer;
    padding: .2em .8em; 
    outline: none;
    border: 1px solid #999;
    appearance: none;
}
</style>