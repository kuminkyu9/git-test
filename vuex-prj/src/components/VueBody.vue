<template>
    <div class="container">
        <ul v-for="(mtDatas, index) in mtTableData" v-bind:key="mtDatas" class="box">
            <li v-for="mtRight in mtRightData" v-bind:key="mtRight">{{mtTableData[index].id}} x {{mtRight}} = {{mtTableData[index].id*mtRight}}</li>

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
        }
    },
    methods: {
        mtDel(id) { //del btn
            this.mtTableData.splice(id, 1);
            this.modal('del', '삭제되었습니다.'); // del modal
        },
        setNewMtData(index) { // update (string return)
            var copy = this.mtTableData[index].id; 
            var setBtnVal = document.querySelector(`.updateBtn${index}`).value; 
            var copy2 = [...setBtnVal];

            if(!setBtnVal) { // no set event
                this.modal('noset', '입력해주세요'); // no set modal
                return;
            } 
            if(copy2[0] == 0) { // 숫자 error
                this.val = '';
                this.modal('numerr', '숫자형식이 잘못되었습니다.'); // numerr modal
                return;
            }  
            if(isNaN(setBtnVal)) { // 문자입력 return
                this.mtTableData[index].id = copy;
                this.modal('string', '숫자를 입력해주세요'); // string error modal
                return;
            }

            for(var i=0; i<this.mtTableData.length; i++) { // duplicate 
                var copySetVal = setBtnVal;

                if(this.mtTableData[i].id == copySetVal) {
                    this.modal('duplicate', '중복'); // duplicate modal
                    return;
                }
            }

            this.mtTableData[index].id = setBtnVal; // set val
            this.modal('update', '업데이트'); // update modal
        },
        modal(colorName, nameVal) {
            var modalCon = document.querySelector('.modal_container');

            this.$store.commit('changeModalColor', colorName); //  modal
            this.$store.commit('changeModalName', nameVal);

            modalCon.style.top='5%'; // show modal
            setTimeout(()=>{modalCon.style.top='-50%'}, 700); // del modal
        }
    }
}
</script>

<style>

</style>