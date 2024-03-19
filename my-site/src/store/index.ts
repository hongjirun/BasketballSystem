import { createStore } from 'vuex'

export default createStore({
  state: {
    // 首页是否进入卡片详细介绍
    isEnter: false,
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
    dataMenuRoute: '',
    // 进行登录时的蒙版和是否登录
    logining: false,
    // 登录成功后存储登录信息
    userInfo: 
    {
      // 昵称
      userName: '',
      // 手机号
      telephone: '',
      // 密码
      password: '',
      // 头像
      img: '',
      // 留言板留言信息
      messageContent:[] as string[],
      // 留言时间
      messageTime:[] as string[],
      
    },
    
    // 是否登录成功
    loginSuccess: false,
    // 登录界面是否显示
    login: false,
    // 注册界面是否显示
    regist: false,
    // 忘记密码界面是否显示
    forgetPwd: false,
    // 关闭搜索框下拉列表
    isSearch: false
  },
  mutations: {
    // 首页是否进入卡片详细介绍
    changeIsEnter(state, payload) { 
      state.isEnter = payload;
    },
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
    // 进行登录时的蒙版和是否登录
    changeLogin(state,payload) { 
      state.logining = payload;
    },
    // 登录成功后存储登录信息
    getUserInfo(state, payload) { 
      
      state.userInfo.telephone = payload.telephone;
      state.userInfo.password = payload.password;
      state.userInfo.img = payload.img;
      state.userInfo.userName = payload.userName;
      // state.userInfo[i].message[state.userInfo[i].message.length].message = payload[i].message
    
    },
    // 留言板留言信息存储
    getMessageInfo(state, payload) {
      state.userInfo.messageContent[state.userInfo.messageContent.length] = payload[0];
      state.userInfo.messageTime[state.userInfo.messageTime.length] = payload[1];

    },
    // 是否登录成功
    loginSuccess(state,payload) { 
      state.loginSuccess = payload;
    },
    // 切换登录界面
    changeLoginPage(state, payload) {
      state.login = payload;
    },
    // 切换注册界面
    changeRegistPage(state, payload) {
      state.regist = payload;
    },
    // 切换忘记密码界面
    changeForgetPwdPage(state, payload) {
      state.forgetPwd = payload;
    },
    // 关闭搜索框下拉列表
    changeSearch(state, payload) { 
      state.isSearch = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
