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
    // 新闻资讯/赛程排名/数据中心的联赛选择命中
    isLeague: [
      { name: true },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
    ],
    
    // 赛程排名点击联赛路径
    currentRoute: '',
    // 赛程排名按钮选择命中
    srSelected: true,
    // 数据中心菜单栏选择命中
    isMenuDataCenter: [
      { name: true },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
      { name: false },
    ],
    
    // 数据中心点击路径
    dataMenuRoute:'',
  },
  mutations: {
    //左边菜单栏选择命中提交
    handleSelected(state, payload) { 
      for (let i = 0; i < state.isSelected.length; i++) { 
        state.isSelected[i].name = false;
      }
      state.isSelected[payload].name = true;
      
    },
    // 新闻资讯/赛程排名/数据中心收缩栏的选择命中提交
    handleLeague(state, payload) { 
      for (let i = 0; i < state.isLeague.length; i++) { 
        state.isLeague[i].name = false;
      }
      state.isLeague[payload].name = true;
      
    },
    // 获取赛程排名点击路由路径
    changeRoute(state, payload) { 
      state.currentRoute = payload;
    },
    // 赛程/排名按钮选择命中提交
    clickSelected(state, payload) { 
      state.srSelected = payload;
    },
    // 数据中心菜单栏选择命中
    handleDataCenter(state,payload) { 
      for (let i = 0; i < state.isMenuDataCenter.length; i++) { 
        state.isMenuDataCenter[i].name = false;
      }
      state.isMenuDataCenter[payload].name = true;
    },
   // 数据中心点击路径
    changeDataRoute(state,payload) { 
      state.dataMenuRoute = payload;
    },
    
  },
  actions: {
  },
  modules: {
  }
})
