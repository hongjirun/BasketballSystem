<template>
  <div id="login">
    <div class="loginContent">
      <div class="header">
        <div class="title">登录后可解锁更多功能</div>
        <div class="close" @click="closeLoginInput(false)">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
      <div class="inputBox">
        <div class="telephone" @click="inputClick">
          <span>+86</span>
          <input type="text" placeholder="手机号" v-model="teleNumber">
        </div>
        <div class="password">
          <input type="text" placeholder="请输入密码">
          <a href="">忘记密码</a>
        </div>
        <div class="showInfo">
          <!-- 如果号码输入错误，跳出来进行显示 -->
          <div class="telTip">
            <!-- 根据不同的输入内容进行提示 -->
            <span v-if="isTelEmpty && !isNumFormatTrue">号码为空</span>
            <span v-if="isNumFormatTrue && !isTelEmpty">号码错误</span>
            
          </div>

          <div class="register">
            <a href="">进行注册</a>
          </div>
        </div>
        
        <div class="loginButton" @click="checkTeleNumber">
          <span>登录</span>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() { 
    const store = useStore();
    const teleNumber = ref('');
    // 判断手机号输入框是否为空
    const isTelEmpty = ref(false);
    // 判断手机号码格式是否正确
    const isNumFormatTrue = ref(false);
    return {
      store,
      teleNumber,
      isTelEmpty,
      isNumFormatTrue
    }
  },
  methods: {
    closeLoginInput(bool) { 
      this.store.commit('changeLogin', bool);
    },
    checkTeleNumber() {
      if (this.teleNumber === '') {
        this.isTelEmpty = true;

      }
      else if (this.teleNumber !== '') {
        var pattern = "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$";
        var regex = new RegExp(pattern);
        if (regex.test(this.teleNumber)) {
          this.isNumFormatTrue = false;
          

        }
        else if (!regex.test(this.teleNumber)) {
          this.isNumFormatTrue = true;
          this.teleNumber = "";
        }
      }
    },
    inputClick() { 
      this.isTelEmpty = false;
      this.isNumFormatTrue = false;
    }
  }
})
</script>

<style scoped lang="less">
  #login {
    width: 100%;
    height: 100%;
    
    .loginContent {
      width: 360px;
      height: 300px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      border-radius: 15px;
      border: 1px solid grey;
      background: linear-gradient(to bottom,rgb(255,211,226),rgb(254,221,220),rgb(254,240,249));
      .header {
        width: 100%;
        height: 15%;
        border-radius: 15px 15px 0 0;
        display: flex;
        .title {
          width: 90%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: bolder;
          
        }
        .close {
          width: 10%;
          height: 100%;
          display: flex;
          justify-content: right;
          padding: 5px 10px 0 0;
          cursor: pointer;
          i {
            font-size: 18px;
          }
        }
      }
      .inputBox {
        width: 85%;
        height: 80%;
        margin: 0 auto;
        border-radius: 15px;
        background-color: white;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .telephone {
          width: 240px;
          height: 39px;
          display: flex;
          justify-content: left;
          align-items: center;
          margin: 0 auto;
          padding-left: 20px;
          border-radius: 5px;
          background-color: rgb(242, 242, 244);
          margin-bottom: 15px;
          span {
            padding-right: 10px;
            font-size: 14px;
          }
          input {
            border: none;
            background-color: rgb(242, 242, 244);
            outline: none;
            font-size: 12px;
          }
        }
        .password {
          width: 240px;
          height: 39px;
          display: flex;
          justify-content: left;
          align-items: center;
          margin: 0 auto;
          padding-left: 20px;
          border-radius: 5px;
          background-color: rgb(242, 242, 244);
          margin-bottom: 15px;
          input {
            border: none;
            background-color: rgb(242, 242, 244);
            outline: none;
            font-size: 12px;
          }
          a {
            text-decoration: none;
            font-size: 12px;
            color: rgb(254, 44, 85);
            padding-left: 10px;
          }
        }
        .loginButton {
          width: 240px;
          height: 39px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          border-radius: 5px;
          background-color: rgb(254, 44, 85);
          margin-bottom: 15px;
          span {
            font-size: 14px;
            font-weight: bolder;
          }
        }
        .showInfo {
          display: flex;
          align-items: center;
          .telTip {
            display: flex;
            justify-content: left;
            
            span {
              font-size: 14px;
              color: rgb(254, 44, 85);
              padding-left: 30px;
              padding-right: 70px;
            }
          }

          .register {
            display: flex;
            justify-content: right;
            padding-left: 30px;
          a {
            text-decoration: none;
            font-size: 14px;
            color: rgb(254, 44, 85);
          }
        }
        }
        
      }
    }
  }

</style>