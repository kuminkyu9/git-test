import {createStore} from "vuex";


export default createStore({
    state: {
        setVal: '',
        mtRightData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        mtTableData: [
            // {id: i} this.mtTableData.push({id: i});{id: i, mtRight: [1,2,3,4,5,6,7,8,9], onOff: true} this.mtTableData.push({id: i, mtRight: [1,2,3,4,5,6,7,8,9]})
        ],
        modalName: '',
        modalColor: '',



        // 배수 on/off class 명으로 줘서 하위에 display on off
    },
    getters: {
    },
    mutations: {
        

        // setVal
        setVal(state, setVal) {
            return state.setVal = setVal;
        },


        // modal
        changeModalColor(state, colorName) {
            return state.modalColor = colorName;
        },
        changeModalName(state, nameVal) {
            return state.modalName = nameVal;
        },
    },
    actions: {

    },
    modules: {

    },
});