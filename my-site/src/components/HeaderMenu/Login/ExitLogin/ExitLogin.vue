<!-- 退出登录下拉列表 -->
<template>
  <div id="exitLogin" @click="exitLogin(false)">
    <span class="text">退出登录</span>
    <span class="icon"><i class="iconfont icon-tuichudenglu"></i></span>
  </div>
</template>

<script>

import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup() { 
    const store = useStore();
    const loginSuccess = ref(true);
    const open = () => {
      ElMessage({
        showClose: true,
        message: '退出登录成功.',
        type: 'success',
      })
    }
    return {
      store,
      loginSuccess,
      open
    }
  },
  methods: {
    exitLogin(bool) { 
      this.loginSuccess = bool;
      this.store.commit('loginSuccess', this.loginSuccess);
      // 删除localStorage中名为 "userData"和"token"和"starInfo"的数据
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      localStorage.removeItem("starInfo");
      this.open();
      setInterval(() => {
        this.$router.push('/');
      }, 300);
      
      
    }
  }
})
</script>

<style scoped lang="less">
  #exitLogin {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .text {
      color: grey;
      font-size: 14px;
      padding-right: 5px;
    }
    .icon {
      font-size: 16px;
      color: grey;
    }
    
   
  }

</style>