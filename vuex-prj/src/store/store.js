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
        
        // select val
        SwfList: [
            {
                text: 'X 1',
                value: 1
            },
            {
                text: 'X 2',
                value: 2
            },
            {
                text: 'X 3',
                value: 3
            },
            {
                text: 'X 4',
                value: 4
            },
            {
                text: 'X 5',
                value: 5
            },
        ]
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