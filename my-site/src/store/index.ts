import { createStore } from 'vuex'

export default createStore({
  state: {
    //左边菜单栏选择命中
    isSelected: [
      { name: true },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
    ],
  },
  mutations: {
    handleSelected(state, payload) { 
      for (let i = 0; i < state.isSelected.length; i++) { 
        state.isSelected[i].name = false;
      }
      state.isSelected[payload].name = true;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
