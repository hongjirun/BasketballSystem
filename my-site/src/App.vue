<template>
  <div id="app">
    <div class="notLogin">
      <!--弹窗出来后给上一层灰层-->
      <div :class="{'hidden-grey':logining}"></div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    
    <div class="Login" v-if="logining">
      <Login></Login>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Login from '../src/views/Login/Login.vue';
export default defineComponent({
  setup() { 
    const store = useStore();
    const logining = computed(()=>store.state.logining);
    return {
      store,
      logining
    }
  },
  components: {
    Login
  },
  mounted() { 
    if (localStorage.getItem('token') && localStorage.getItem('userData')) {
      this.store.commit('loginSuccess', true);
      
    }
    else { 
      this.store.commit('loginSuccess', false);
    }
  }
})
</script>

<style lang="less" scoped>
@import './styles/mixins.less';
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .BackgroundGradient;
  .notLogin {
    width: 100%;
    height: 100%;
    
    .hidden-grey {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(29, 29, 29);
      opacity: 0.7;
      z-index: 999;
      animation: cancelAnimation 0.5s ease-out;
    }
    @keyframes cancelAnimation {
      0%{opacity: 0;};
      100%{opacity:0.7 ;}
    }   
    
    .content {
      width: 100%;
      height: 100%;
    }
  }
  .Login {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10000;
  }
}
</style>
