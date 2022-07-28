import {createStore} from "vuex";


export default createStore({
    state: {
        setVal: '', // 입력값
        mtRightData: [1, 2, 3, 4, 5, 6, 7, 8, 9],   // 상수
        mtTableData: [
            // {id: i} this.mtTableData.push({id: i});{id: i, mtRight: [1,2,3,4,5,6,7,8,9], onOff: true} this.mtTableData.push({id: i, mtRight: [1,2,3,4,5,6,7,8,9]})
        ],
        modalName: '',
        modalColor: '',
        SwfList: [  // select tag values
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
            {
                text: 'X 6',
                value: 6
            },
            {
                text: 'X 7',
                value: 7
            },
            /* 아래처럼 추가 text가 화면에 나오는거, value가 원하는 값 
            {
                 text: 'X 8',
                 value: 8
            } 
            */
        ],
        selectNoR: 2,   // number of repetitions,    VueBody cmp 개수,   마지막 cmp select 창 보임
    },
    getters: {
    },
    mutations: {
        setVal(state, setVal) {
            return state.setVal = setVal;   // 입력값 바꿈, 구구단 몇단까지 입력값
        },
        changeModalColor(state, colorName) {
            return state.modalColor = colorName; // 모달창 색깔 바꿈
        },
        changeModalName(state, nameVal) {
            return state.modalName = nameVal;   // 모달창 text 바꿈
        },
        mtTableReset(state) {
            return state.mtTableData = []   // mtTableData 초기화
        }
    },
    actions: {

    },
    modules: {

    },
});