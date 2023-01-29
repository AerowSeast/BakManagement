import { createStore } from 'vuex'

export default createStore({
    state:{
        // 預設會折疊
        isCollapse:false,
        currentMenu:null
    },
    mutations:{
        // Toggle Aside
        changeIsCollapse(state){
            state.isCollapse = !state.isCollapse;
        },
        selectMenu(state,value){
            // 判斷麵包屑
            value.name === "home" ? state.currentMenu = null :state.currentMenu = value.label
        }
    }
})