<!-- 头部菜单栏 -->
<template>
  <div id="headerMenu">
    <!-- 最左边显示logo -->
    <div class="logoImage" @click="goToHomePage">
      <LogoImage></LogoImage>
    </div>
    <!-- 最右边登录按钮/头像显示 -->
    <div class="login">
      <div class="notLogin"  v-if="loginShow">
        <LoginButton></LoginButton>
      </div>
      <div class="completeLogin" v-else>
        <LoginImage></LoginImage>        
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import LogoImage from './LogoImage/LogoImage.vue';
import LoginButton from './Login/LoginButton/LoginButton.vue';
import LoginImage from './Login/LoginImage/LoginImage.vue';
import { defineComponent } from "vue";
export default defineComponent({
  name: 'HeaderMenu',
  data() {
    return {
      loginShow: true,
    }
  },
  components: {
    LogoImage,
    LoginButton,
    LoginImage
  },
  methods: {
    goToHomePage() { 
      this.$router.push('/'); 
    }
  }
})
</script>

<style lang="less" scoped>
#headerMenu {
  width: 100%;
  height: 100%; 
  /*position: relative;**/
  display: flex;
  
  .logoImage {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: left;
    align-items: center;
    /*position: absolute;
    left: 40px;
    top: 50%;
    transform: translate(0,-50%); **/
    margin-left: 40px;
    cursor: pointer;
  }
  .login {
    /*position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0,-50%); **/
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    
    .notLogin {
      width: 80px;
      height: 40px;
      margin-right: 20px;
    }
    .completeLogin {
      width: 60px;
      height: 50px;
      margin-right: 20px;
      
    }
  }
}
</style>