<template>
  <div id="login">
    <!-- 登录界面 -->
    <div class="loginContent" v-if="notLogin">
      <div class="header">
        <div class="title">登录后可解锁更多功能</div>
        <div class="close" @click="closeLoginInput(false)">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
      <div class="inputBox">
        <div class="telephone" @input="inputClick">
          <span>+86</span>
          <input type="text" placeholder="手机号" v-model="teleNumber">
        </div>
        <div class="password" @input="inputClick">
          <input type="text" placeholder="请输入密码" v-model="pwd">
          <a @click="switchForgetPwd()">忘记密码</a>
        </div>
        <div class="showInfo">
          <!-- 如果号码输入错误，跳出来进行显示 -->
          <div class="telTip">
            <!-- 根据不同的输入内容进行提示 -->
            <!-- <span v-if="isTelEmpty && !isNumFormatTrue">号码为空</span> -->
            <span v-if="!isNumFormatTrue&&isPwdFormatTrue">号码格式错误</span>
            <span v-if="isNumFormatTrue && !isPwdFormatTrue">密码格式错误</span>
            <span v-if="!isNumFormatTrue && !isPwdFormatTrue">号码/密码格式错误</span>

          </div>

          <div class="register">
            <a @click="switchRegist()">注册</a>
          </div>
        </div>
        
        <div class="loginButton"  :class="{'loginButtonHover':empty}" @click="check()">
          <span>登录</span>
        </div>
        <!-- <div :plain="true" v-show="loginSuccess"></div>
        <div :plain="true" v-show="!loginSuccess"></div> -->
      </div>
    </div>
    <!-- 注册页面 -->
    <div class="notLoginContent" v-if="notRegist">
      <div class="header">
        <div class="back" @click="goBack"><i class="iconfont icon-xiangzuojiantou"></i> 返回</div>
        <div class="title">注册</div>
        <div class="close" @click="closeLoginInput(false)">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
      <div class="inputBox">
        <div class="telephone" @input="registinputClick">
          <span>+86</span>
          <input type="text" placeholder="手机号" v-model="teleNumber">
        </div>
        <div class="password" @input="registinputClick">
          <input type="text" placeholder="输入要注册手机号的密码" v-model="pwd">
        </div>
        <div class="userName">
          <input type="text" placeholder="请输入昵称" v-model="userName" maxlength="10">
        </div>
        <div class="question">
          <span>你的名字是：</span>
        </div>
        <div class="answer">
          <input type="text" placeholder="请输入密保答案" v-model="answer" maxlength="10">
        </div>
        <div class="showInfo">
          <!-- 如果号码输入错误，跳出来进行显示 -->
          <div class="telTip">
            <!-- 根据不同的输入内容进行提示 -->
            <!-- <span v-if="isTelEmpty && !isNumFormatTrue">号码为空</span> -->
            <span v-if="!isNumFormatTrue && isPwdFormatTrue">号码格式错误</span>
            <span v-if="isNumFormatTrue && !isPwdFormatTrue">密码格式错误</span>
            <span v-if="!isNumFormatTrue && !isPwdFormatTrue">号码/密码格式错误</span>

          </div>

          
        </div>
      
        <div class="loginButton"  :class="{ 'loginButtonHover': empty }" @click="registCheck()">
          <span>注册</span>
        </div>
        <!-- <div :plain="true" v-show="loginSuccess"></div>
      <div :plain="true" v-show="!loginSuccess"></div> -->
      </div>
    </div>
    <!-- 忘记密码界面 -->
    <div class="forgetPwd" v-if="forgetPwd">
      <div class="header">
        <div class="back" @click="goBack"><i class="iconfont icon-xiangzuojiantou"></i> 返回</div>
          <div class="title">忘记密码</div>
          <div class="close" @click="closeLoginInput(false)">
            <i class="iconfont icon-guanbi"></i>
          </div>
        </div>
        <div class="inputBox">
          <div class="telephone" @input="inputClick">
            <span>+86</span>
            <input type="text" placeholder="手机号" v-model="teleNumber">
          </div>
          <div class="question">
            <span>你的名字是：</span>
          </div>
          <div class="answer">
            <input type="text" placeholder="请输入密保答案" v-model="answer" maxlength="10">
          </div>
          <div class="password" @input="registinputClick">
            <input type="text" placeholder="请输入要修改的密码" v-model="pwd">
          </div>
          <div class="showInfo">
            <!-- 如果号码输入错误，跳出来进行显示 -->
            <div class="telTip">
              <!-- 根据不同的输入内容进行提示 -->
              <!-- <span v-if="isTelEmpty && !isNumFormatTrue">号码为空</span> -->
              <span v-if="!isNumFormatTrue && isPwdFormatTrue">号码格式错误</span>
              <span v-if="isNumFormatTrue && !isPwdFormatTrue">密码格式错误</span>
              <span v-if="!isNumFormatTrue && !isPwdFormatTrue">号码/密码格式错误</span>

            </div>

            
          </div>
        
          <div class="loginButton"  :class="{ 'loginButtonHover': empty }" @click="forgetCheck()">
            <span>修改密码</span>
          </div>
          <!-- <div :plain="true" v-show="loginSuccess"></div>
        <div :plain="true" v-show="!loginSuccess"></div> -->
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref,computed } from "vue";
import { useStore } from "vuex";
import { ElMessage } from 'element-plus'
import { getLogin,getLoginRegist, getLoginForget } from "../../api/login";

export default defineComponent({
  setup() { 
    const store = useStore();
    const logining = computed(() => store.state.logining);
    const teleNumber = ref('');
    const pwd = ref('');
    // 判断手机号/密码输入框是否为空
    const empty = ref(false);
    // 判断手机号码格式是否正确
    const isNumFormatTrue = ref(true);
    // 判断密码格式是否正确
    const isPwdFormatTrue = ref(true);
    // // 获取登录信息
    const getLogin_1 = ref({});
    // 提取登录信息内容
    const getLoginData = ref({});

    const info = computed(() => store.state.userInfo);
    const open2 = () => {
      ElMessage({
        showClose: true,
        message: '登录成功',
        type: 'success',
      })
    };
    const open4 = () => {
      ElMessage({
        showClose: true,
        message: '登录失败',
        type: 'error',
      })
    };
    const open5 = () => {
      ElMessage({
        showClose: true,
        message: '还有必填项未填',
        type: 'error',
      })
    };
    const open6 = () => {
      ElMessage({
        showClose: true,
        message: '注册成功',
        type: 'success',
      })
    };
    const open7 = () => {
      ElMessage({
        showClose: true,
        message: '该账号已经注册',
        type: 'error',
      })
    };
    const open8 = () => {
      ElMessage({
        showClose: true,
        message: '该账号不存在/密保错误',
        type: 'error',
      })
    };
    const open9 = () => {
      ElMessage({
        showClose: true,
        message: '修改成功',
        type: 'success',
      })
    };
    const loginSuccess = computed(() => store.state.loginSuccess);
    const notLogin = computed(() => store.state.login);
    const notRegist = computed(() => store.state.regist);
    const forgetPwd = computed(() => store.state.forgetPwd);
    const token = ref('');
    const img_1 = ref('');
    const userName = ref('');
    const answer = ref('');
    return {
      store,
      logining,
      teleNumber,
      pwd,
      empty,
      isNumFormatTrue,
      isPwdFormatTrue,
      getLogin_1,
      getLoginData,
      info,
      open2,
      open4,
      open5,
      open6,
      open7,
      open8,
      open9,
      loginSuccess,
      notLogin,
      notRegist,
      forgetPwd,
      token,
      img_1,
      userName,
      answer
    }
  },
  methods: {
    closeLoginInput(bool) { 
      this.store.commit('changeLogin', bool);
      this.store.commit('handleSelected', 0);
      this.$router.push('/');
    },
    inputClick() { 
      if (this.teleNumber !== '' && this.pwd !== '') {
        this.empty = true;
      }
      else if (this.teleNumber === '' && this.pwd === '' || this.teleNumber === '' || this.pwd === '') { 
        this.empty = false;
        this.isNumFormatTrue = true;
        this.isPwdFormatTrue = true;
      }
    },
    // 注册页面使用
    registinputClick() { 
      if (this.teleNumber !== '' && this.pwd !== '' && this.userName !== '' && this.answer !== '') {
        this.empty = true;
      }
      else if (this.teleNumber === '' || this.pwd === '' || this.userName === '' || this.answer ==='') {
        this.empty = false;
        this.isNumFormatTrue = true;
        this.isPwdFormatTrue = true;
      }
    },
    // 登录页面的检查
    check() { 
      
      if (this.teleNumber !== '' ) {
        var pattern = "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$";
        var regex = new RegExp(pattern);
        if (regex.test(this.teleNumber)) {
          this.isNumFormatTrue = true;
          if (this.pwd !== '') {
            var pattern = "^(?![0-9]+$)(?!a-zA-Z]+$)[0-9A-Za-z\\W]{6,20}$";
            var regex = new RegExp(pattern);
            if (regex.test(this.pwd)) {
              this.isPwdFormatTrue = true;
              //将输入的手机号和密码post到服务器
              // 如果验证成功则从服务器获取信息到getLoginData中
              let data = {
                telephone: this.teleNumber,
                password: this.pwd
              }
              getLogin(data).then((res) => {
                this.token = res.headers['authentication'];
                console.log(res,this.token);
                this.getLoginData = res.data;
                
                // console.log(this.token);
                console.log(this.getLoginData.data);
                if (this.getLoginData.data) {
                  this.store.commit('changeLogin', false);
                  this.store.commit('getUserInfo', this.getLoginData.data);
                  this.store.commit('loginSuccess', true);
                  this.open2();
                  // 将数据和token存储在localStorage中
                  localStorage.setItem('userData', JSON.stringify(this.getLoginData.data));
                  localStorage.setItem('token', this.token);
                  this.store.commit('handleSelected', 0);
                  this.$router.push('/');
                }
                else if (this.getLoginData.data === null) { 
                  this.open4();
                  this.teleNumber = "";
                  this.pwd = "";
                }
              })

              // 获取后台登录信息
              // for (let i = 0; i < this.getLoginData.length; i++) {
              //   if (this.getLogin[i].telephone === this.teleNumber) {
              //     if (this.getLogin[i].password === this.pwd) {
              //       this.store.commit('changeLogin', false);
              //       this.store.commit('getUserInfo', [{ userName:this.getLogin[i].userName,telephone: this.teleNumber, password: this.pwd, img:this.getLogin[i].img,message:this.getLogin[i].message}]);
              //       this.store.commit('loginSuccess', true);
              //       this.open2();
              //     }
              //     else if (this.getLogin[i].password !== this.pwd) {
              //       this.open4();
              //     }
              //   }
              //   else if (this.getLogin[i].telephone !== this.teleNumber) { 
              //     this.open4();
              //   }
                 
              // }
              
              


              // let result = {};
              // result = getLogin(data);
              // console.log(result);
              
              // console.log(typeof(this.getLogin[0].telephone));
              // console.log(typeof (this.teleNumber));
            }
            else if (!regex.test(this.pwd)) {
              this.isPwdFormatTrue = false;
              this.pwd = "";

            }
          }

        }
        else if (!regex.test(this.teleNumber)) {
          this.isNumFormatTrue = false;
          if (this.pwd !== '' && this.empty) {
            var pattern = "^(?![0-9]+$)(?!a-zA-Z]+$)[0-9A-Za-z\\W]{6,20}$";
            var regex = new RegExp(pattern);
            if (regex.test(this.pwd)) {
              this.isPwdFormatTrue = true;
              this.teleNumber = "";
              this.pwd = "";

            }
            else if (!regex.test(this.pwd)) {
              this.isPwdFormatTrue = false;
              this.teleNumber = "";
              this.pwd = "";
              // console.log(typeof (this.getLoginData[0].teleNumber));
            }
          }

        }
      }
    },
    // 注册页面点击检查
    registCheck() { 
      if (this.teleNumber !== '') {
        var pattern = "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$";
        var regex = new RegExp(pattern);
        if (regex.test(this.teleNumber)) {
          this.isNumFormatTrue = true;
          if (this.pwd !== '') {
            var pattern = "^(?![0-9]+$)(?!a-zA-Z]+$)[0-9A-Za-z\\W]{6,20}$";
            var regex = new RegExp(pattern);
            if (regex.test(this.pwd)) {
              this.isPwdFormatTrue = true;
              //将输入的手机号和密码post到服务器
              // 如果验证成功则从服务器获取信息
              if (this.userName !== '' && this.answer !== '') {
                let data = {
                  telephone: this.teleNumber,
                  password: this.pwd,
                  userName: this.userName,
                  answer: this.answer
                }
                getLoginRegist(data).then((res) => {
                  if (res.data.data !== null) {
                    this.open6();
                    this.store.commit('changeLoginPage', true);
                    this.store.commit('changeRegistPage', false);
                    this.store.commit('changeForgetPwdPage', false);
                    this.teleNumber = "";
                    this.pwd = "";
                    this.userName = "";
                    this.answer = "";
                    this.isNumFormatTrue = true;
                    this.isPwdFormatTrue = true;
                  }
                  else if (res.data.data === null) { 
                    this.open7();
                    this.teleNumber = "";
                    this.pwd = "";
                    this.userName = "";
                    this.answer = "";
                  }
                  
                  
                })
              }
              else { 
                this.open5();
                
              }
              


      
            }
            else if (!regex.test(this.pwd)) {
              this.isPwdFormatTrue = false;
              this.pwd = "";

            }
          }

        }
        else if (!regex.test(this.teleNumber)) {
          this.isNumFormatTrue = false;
          if (this.pwd !== '' && this.empty) {
            var pattern = "^(?![0-9]+$)(?!a-zA-Z]+$)[0-9A-Za-z\\W]{6,20}$";
            var regex = new RegExp(pattern);
            if (regex.test(this.pwd)) {
              this.isPwdFormatTrue = true;
              this.teleNumber = "";
              this.pwd = "";

            }
            else if (!regex.test(this.pwd)) {
              this.isPwdFormatTrue = false;
              this.teleNumber = "";
              this.pwd = "";
              // console.log(typeof (this.getLoginData[0].teleNumber));
            }
          }

        }
      }
    },
    // 忘记密码点击检查
    forgetCheck() { 
      if (this.teleNumber !== '') {
        var pattern = "^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$";
        var regex = new RegExp(pattern);
        if (regex.test(this.teleNumber)) {
          this.isNumFormatTrue = true;
          if (this.pwd !== '') {
            var pattern = "^(?![0-9]+$)(?!a-zA-Z]+$)[0-9A-Za-z\\W]{6,20}$";
            var regex = new RegExp(pattern);
            if (regex.test(this.pwd)) {
              this.isPwdFormatTrue = true;
              //将输入的手机号和密码post到服务器
              // 如果验证成功则从服务器获取信息
              if (this.answer !== '') {
                let data = {
                  telephone: this.teleNumber,
                  password: this.pwd,
                  answer: this.answer
                }
                getLoginForget(data).then((res) => {
                  console.log(res.data.data[0]);
                  if (res.data.data[0] === 1) {
                    this.open9();
                    this.store.commit('changeLoginPage', true);
                    this.store.commit('changeRegistPage', false);
                    this.store.commit('changeForgetPwdPage', false);
                    this.teleNumber = "";
                    this.pwd = "";
                    this.answer = "";
                    this.isNumFormatTrue = true;
                    this.isPwdFormatTrue = true;
                  }
                  else if (res.data.data[0] === 0) {
                    this.open8();
                    this.teleNumber = "";
                    this.pwd = "";
                    this.answer = "";
                  }


                })
              }
              else {
                this.open5();

              }




            }
            else if (!regex.test(this.pwd)) {
              this.isPwdFormatTrue = false;
              this.pwd = "";

            }
          }

        }
        else if (!regex.test(this.teleNumber)) {
          this.isNumFormatTrue = false;
          if (this.pwd !== '' && this.empty) {
            var pattern = "^(?![0-9]+$)(?!a-zA-Z]+$)[0-9A-Za-z\\W]{6,20}$";
            var regex = new RegExp(pattern);
            if (regex.test(this.pwd)) {
              this.isPwdFormatTrue = true;
              this.teleNumber = "";
              this.pwd = "";

            }
            else if (!regex.test(this.pwd)) {
              this.isPwdFormatTrue = false;
              this.teleNumber = "";
              this.pwd = "";
              // console.log(typeof (this.getLoginData[0].teleNumber));
            }
          }

        }
      }
    },
    switchForgetPwd() { 
      this.store.commit('changeLoginPage', false);
      this.store.commit('changeRegistPage', false);
      this.store.commit('changeForgetPwdPage',true);
      this.teleNumber = "";
      this.pwd = "";
    },
    switchRegist() {
      this.store.commit('changeLoginPage', false);
      this.store.commit('changeRegistPage', true);
      this.store.commit('changeForgetPwdPage', false);
      this.teleNumber = "";
      this.pwd = "";
    },
    // repaire(bool) { 
    //   this.store.commit('changeLogin', false);
    // },
    goBack() { 
      this.store.commit('changeLoginPage', true);
      this.store.commit('changeRegistPage', false);
      this.store.commit('changeForgetPwdPage', false);
      this.teleNumber = "";
      this.pwd = "";
      this.userName = "";
      this.answer = "";
      this.isNumFormatTrue = true;
      this.isPwdFormatTrue = true;
    }
  },
  mounted() { 
    console.log('15913921974');
    console.log('Qa29045!!!');
    
    
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
          background-color: rgba(254, 44, 86, 0.284);
          margin-bottom: 15px;
          span {
            font-size: 14px;
            font-weight: bolder;
          }
        }
        .loginButtonHover {
          background-color: rgb(254, 44, 85);
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
              padding: 0 50px 0 30px;
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
    .notLoginContent {
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
        .back {
          width: 15%;
          height: 100%;
          display: flex;
          justify-content: left;
          align-items: center;
          color: grey;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
        .title {
          width: 75%;
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
        overflow: auto;
        
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
        .userName {
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
        }
        .question {
          width: 240px;
          height: 15px;
          display: flex;
          justify-content: left;
          align-items: center;
          margin: 0 auto;
          border-radius: 5px;
          margin-bottom: 15px;
          span {
            font-size: 14px;
            font-weight: bolder;
            color: grey;
          }
        }
        .answer {
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
        }
        .loginButton {
          width: 240px;
          height: 39px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          border-radius: 5px;
          background-color: rgba(254, 44, 86, 0.284);
          margin-bottom: 15px;
          span {
            font-size: 14px;
            font-weight: bolder;
          }
        }
        .loginButtonHover {
          background-color: rgb(254, 44, 85);
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
              padding: 0 50px 0 30px;
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
    /** 忘记密码*/
    .forgetPwd {
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
        .back {
          width: 15%;
          height: 100%;
          display: flex;
          justify-content: left;
          align-items: center;
          color: grey;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
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
        .question {
          width: 240px;
          height: 15px;
          display: flex;
          justify-content: left;
          align-items: center;
          margin: 0 auto;
          border-radius: 5px;
          margin-bottom: 15px;
          span {
            font-size: 12px;
            font-weight: bolder;
            color: grey;
          }
        }
        .answer {
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
          
        }
        .loginButton {
          width: 240px;
          height: 39px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          border-radius: 5px;
          background-color: rgba(254, 44, 86, 0.284);
          margin-bottom: 15px;
          span {
            font-size: 14px;
            font-weight: bolder;
          }
        }
        .loginButtonHover {
          background-color: rgb(254, 44, 85);
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
              padding: 0 50px 0 30px;
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