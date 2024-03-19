<!-- 留言板输入框组件 -->
<template>
  <div id="messageInput">
    <!-- 输入框 -->
    <div class="inputMain">
      <div class="inputTitle">好哥们,畅所欲言吧</div>
      <div class="inputTag">
        <el-input
          v-model="textarea"
          :rows="10"
          type="textarea"
          class="input"
          maxlength='100'
          @keydown.enter="postMessage"
        />
      </div>
      
    </div>
    <!-- 发布按钮 -->
    <div class="btu">
      <el-button :plain="true" @click="postMessage" class="button">发表</el-button>
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ElMessage } from 'element-plus';
import { postMessageData } from "../../../../api/message/message";
export default defineComponent({
  setup() { 
    const textarea = ref('');
    const currentTime = ref('');
    const successPost = () => {
      ElMessage({
        showClose: true,
        message: '发表成功',
        type: 'success',
      })
    };
    const warningPost = () => {
      ElMessage({
        showClose: true,
        message: '留言不能为空',
        type: 'warning',
      })
    };
    return {
      textarea,
      successPost,
      warningPost,
      currentTime

    }
  },
  methods: {
    // 点击发布按钮触发
    postMessage() { 
      if (this.textarea.trim() === '') {
        this.warningPost();
      }
      else { 
        
        // 获取当前时间
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = String(currentDate.getMonth() + 1).padStart(2, '0');
        let day = String(currentDate.getDate()).padStart(2, '0');
        let hours = String(currentDate.getHours()).padStart(2, '0');
        let minutes = String(currentDate.getMinutes()).padStart(2, '0');
        let formattedTime = `${year}-${month}-${day} ${hours}:${minutes}`;
        this.currentTime = formattedTime;
        // 
        let userName = JSON.parse(localStorage.getItem('userData')).userName;
        let telephone = JSON.parse(localStorage.getItem('userData')).telephone;
        let img = JSON.parse(localStorage.getItem('userData')).img;


        let data = {
          userName: userName,
          telephone: telephone,
          img: img,
          messageContent: this.textarea,
          messageTime: this.currentTime
        }
        console.log(data);
        postMessageData(data)
        // 用事件触发向父组件传递时间信息和留言信息
        this.$emit('getMessageTime', this.textarea, this.currentTime);
        // 触发消息提示
        this.successPost();
        this.textarea = '';
      }
    },
  },
  mounted() { 
    
  }




})
</script>

<style scoped lang="less">
  #messageInput {
    width: 100%;
    height: 100%;
    
    .inputMain {
      width: 100%;
      height: 85%;
      .inputTitle {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        padding-left: 5px;
        font-size: 13px;
        font-weight: 600;
        color: rgb(102, 102, 102);
        background-color: rgb(212, 211, 211);
        border-radius: 5px;
      }
      .inputTag {
        width: 100%;
        height: 90%;
        
        border: 1px solid rgb(197, 197, 197);
        border-top: 0px;
        .input {
          /**关闭elementuiplus的属性 */
          --el-input-border-color:none;
          --el-input-hover-border-color:transpart;
          --el-input-focus-border-color:transpart;
          width: 100%;
          height: 100%;
          max-height: 100%;
          overflow: auto;
          

        }
      

      }
      
    }
    .btu {
      width: 10%;
      height: 15%;
      padding-top: 5px;
      .button {
        width: 100%;
        height: 100%;
        background-color: rgb(214, 213, 213);
        color: rgb(133, 131, 131);
        font-size: 16px;
        font-weight: bolder;
      }

    }
  }

</style>






