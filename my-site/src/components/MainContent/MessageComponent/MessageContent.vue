<template>
  <div id="messageContent">
    <div class="title"><span>留言板</span></div>
    <div class="content">
      <!-- 输入框 -->
      <div class="messageInput">
        <MessageInput  @getMessageTime="getMessageTime"></MessageInput>   
      </div>
      <!-- 留言板 -->
      <div class="showMessage">
        <div class="name">
          <span>留言</span>
          <span>({{ message.length - 1 }})</span>
        </div>
        <ul class="messageList">
          <li v-for="(item,index) in message">
            <div class="leftImg">
              <img :src="item.userImg" alt="" width="50px" height="50px">
            </div>
            <div class="right">
              <div class="header">
                <div class="userName">{{ item.userName }}</div>
                <div class="order">第{{ index+1 }}层楼</div>
              </div>
              <div class="messageContent">
                {{ item.messageContent }}
              </div>
              <div class="time">{{ item.time }}</div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script >
import { defineComponent,ref } from "vue";
import MessageInput from './MessageInput/MessageInput.vue';
export default defineComponent({
  setup() { 
    const currentTime = ref('');
    const message = ref([
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
      { userName: '浪漫百事猪脚饭', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', messageContent: '勇士总冠军', time: '2021-02-15 01:40' },
    ]);
    return {
      currentTime,
      message,
      
    }
  },
  components: {
    MessageInput
  },
  methods: {
    // 获取子组件传递的留言信息和当前时间
    getMessageTime(data_1,data_2) { 
      this.message.push({ userName:'ICDET', userImg: 'https://img0.baidu.com/it/u=2556866575,3001292839&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' ,messageContent:data_1,time:data_2})
    },
    
  }
})
</script>

<style scoped lang="less">
  #messageContent {
    width: 100%;
    height: 100%;
    
    .title {
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      padding: 10px 10px 10px 0;
      
      
      font-size: 20px;
      font-weight: bolder;
      cursor: pointer;
      color: rgb(4, 162, 247);
      &:hover {
        color: rgba(4, 162, 247, 0.674);
      }
      span {
        width: 100%;
        padding-bottom: 15px;
        border-bottom: 1px solid rgb(188, 188, 188);
      }
    }
    .content {
      width: 100%;
      height: 90%;
      overflow: auto;
      padding-right: 10px;
      
      
      .messageInput {
        width: 100%;
        height: 50%;
        
      }
      .showMessage {
        width: 100%;
        height: 50%;
        padding-top: 5px;
        
        
        .name {
          width: 100%;
          height: 15%;
          display: flex; 
          padding: 10px 0 20px 10px;
          border-bottom: 1px solid rgb(197, 197, 197);
          span {
            font-size: 16px;
            font-weight: bolder;
          }
          
        }
        .messageList {
          width: 100%;
          height: 85%;
          padding-top: 5px;
          list-style: none;
          
          li {
            width: 100%;
            height: 50%;
            display: flex;
            border-bottom: 1px solid  rgb(197, 197, 197);
            
            .leftImg {
              width: 8%;
              display: flex;
              padding: 5px 10px 0 20px;
              
              img {
                display: inline-block;
                width: 50px;
                height: 50px;
                border-radius: 10px;
              }
            }
            .right {
              width: 92%;
              display: flex;
              flex-direction: column;
              
              padding-top: 5px;
              .header {
                display: flex;
                align-items: center;
                flex-direction: row;
                flex: 1 1 auto;
                font-size: 14px;
                color: grey;
                padding-bottom: 5px;
                .userName {
                  font-size: 16px;
                  color: black;
                  padding-right: 10px;
                }
                .order {
                  font-size: 14px;
                  color: grey;
                }
              }
              .messageContent {
                display: flex;
                flex: 5 5 auto;
                font-size: 16px;
                color: black;
                overflow: hidden;
              }
              .time {
                display: flex;
                flex: 1 1 auto;
                font-size: 14px;
                color: grey;
              }
            }
          }
        }
      }
    }
    
    
  }
</style>