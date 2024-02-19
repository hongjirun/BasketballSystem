<!-- 新闻界面 -->
<template>
  <div id="newsInterface">
    <ul>
      <!-- Nba -->
      <li v-for="item in getNbaNewIdContent" >
        <div class="header">
          <div class="goBack">
            <span @click="goBack">返回</span>
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="time">
            <span>发布于</span>
            <span>{{ item.time }}</span>
          </div>
        </div>
        
        <div class="content">
          <div class="img">
            <img :src="item.img" alt="" width="300px" height="300px">
          </div>
          <div class="contentInfo">
            {{ item.content }}
          </div>
        </div>
      </li>
      <!-- Cba -->
      <li v-for="item in getCbaNewIdContent" >
          <div class="header">
            <div class="goBack">
              <span @click="goBack">返回</span>
            </div>
            <div class="title">
              {{ item.title }}
            </div>
            <div class="time">
              <span>发布于</span>
              <span>{{ item.time }}</span>
            </div>
          </div>
        
          <div class="content">
            <div class="img">
              <img :src="item.img" alt="" width="300px" height="300px">
            </div>
            <div class="contentInfo">
              {{ item.content }}
            </div>
          </div>
        </li>
    </ul>
    
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { getNbaNews,getCbaNews } from '../../../api/news';
import { ArrowRight } from '@element-plus/icons-vue'

export default defineComponent({
  setup() {
    const getNbaNewContent = ref([]);
    const newId = ref(0);
    const getNbaNewIdContent = ref([]);
    const getCbaNewContent = ref([]);
    const getCbaNewIdContent = ref([]);

    
    return {
      getNbaNewContent,
      newId,
      getNbaNewIdContent,
      getCbaNewContent,
      getCbaNewIdContent
      
    }
  },
 
  mounted() {
    this.newId = Number(this.$route.params.id);
    // Nba
    getNbaNews().then((res) => {
      this.getNbaNewContent = res.data;
      
      for (let i = 0; i < this.getNbaNewContent.length; i++) { 
        if (this.getNbaNewContent[i].id === this.newId) { 
          this.getNbaNewIdContent[0] = this.getNbaNewContent[i];
        }
      }
      
    });
    // Cba
    getCbaNews().then((res) => {
      this.getNbaNewContent = res.data;

      for (let i = 0; i < this.getNbaNewContent.length; i++) {
        if (this.getNbaNewContent[i].id === this.newId) {
          this.getNbaNewIdContent[0] = this.getNbaNewContent[i];
        }
      }

    });
    
  },
  methods: {
    goBack() { 
      window.history.back();
    }
  }
})
</script>

<style scoped lang="less">
  #newsInterface {
    width: 100%;
    height: 100%;
    background-color: white;
    ul {
      width: 100%;
      height: 100%;
      list-style: none;
      li {
        width: 100%;
        height: 100%;
        .header {
          width: 100%;
          height: 10%;
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid rgb(191, 191, 191);
          .goBack {
            width: 10%;
            height: 100%;
            display: flex;
            flex: 1 1 auto;
            justify-content: center;
            align-items: center;
            
            span {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              border: 1px solid rgb(201, 199, 199);
              background-color: rgb(215, 212, 212);
            }
            
          }
          .title {
            width: 80%;
            height: 100%;
            display: flex;
            flex: 10 10 auto;
            justify-content: center;
            align-items: center;
            font-size: 26px;
            font-weight: bolder;
          }
          .time {
            width: 10%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              padding-right: 5px;
              &:nth-child(2) {
                font-size: 18px;
                font-weight: bolder;
              }
            }
          }
        }
        .content {
          width: 100%;
          height: 90%;
          overflow: auto;
          padding: 10px;
          text-indent: 2em;
          font-size: 20px;
          .img {
            
            
            
            img {
              width: 300px;
              height: 300px;
              float: left;
              padding: 0 5px 5px 0;
              
            }
            
          }
          .contentInfo {
            
          }
        }

      }

    }
    
  }
</style>