<!-- 首页卡片球星的具体信息 -->
<template>
  <div id="starInfo">
    <div class="back" @click="goBack()">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="container" v-for="item in starInfoId">
      <div class="head">
        <div class="img">
          <img :src="item.headImg" alt="">
        </div>
        <div class="numberName">
          <div class="number">{{ item.number }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="team">{{ item.team }}</div>
        </div>
        <div class="bodyData">
          <div class="heandwe">
            <div class="height">{{ item.height }}</div>
            <span>/</span>
            <div class="weight">{{ item.weight }}</div>
            <span>米/公斤</span>
          </div>
          <div class="birthday">
            <span>生日:</span>
            <span>{{ item.birthday }}</span>
          </div>
          <div class="draft">
            <span>选秀时间:</span>
            <span>{{ item.draft }}年</span>
          </div>
          <div class="experience">
            <span>生涯时长:</span>
            <span>{{ item.experience }}年</span>
          </div>
        </div>
      </div>
      <div class="stardata">
        <div class="score">
          <span>场均得分</span>
          <span>{{ item.score }}</span>
        </div>
        <div class="board">
          <span>场均篮板</span>
          <span>{{ item.board }}</span>
        </div>
        <div class="assit">
          <span>场均助攻</span>
          <span>{{ item.assit }}</span>
        </div>
      </div>
      <div class="foot">
        <div class="intro">
          <div class="title">球员介绍</div>
          <div class="text">
            <div class="honor">
              <div class="honorTitle">主要荣誉:</div>
              <div class="honorMain">{{ item.description }}</div>
            </div>
            <div class="story">
              <div class="storyTitle">生涯:</div>
              <div class="storyMain">{{ item.intro }}</div>
            </div>
          </div>
        </div>
        <div class="teamLogo">
          <img :src="item.teamLogo" alt="">
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from "vuex";
import { getStarinfo } from "../../../api/starinfo";

export default defineComponent({
  setup() { 
    let starInfo = ref([]);
    const inifoId = ref(0);
    const starInfoId = ref([]);
    return {
      starInfo,
      inifoId,
      starInfoId
    }
  },
  mounted() { 
    this.infoId = Number(this.$route.params.id);
    getStarinfo().then(res => { 
      this.starInfo = res.data.data;
      for (let i = 0; i < this.starInfo.length; i++) { 
        if (this.starInfo[i].id === this.infoId) { 
          console.log(this.starInfo[i]);
          this.starInfoId[0] = this.starInfo[i];
          console.log(this.starInfoId[0]);
        }
      }

    })
    
  },
  methods: {
    goBack() { 
      window.history.back();
    }
  }
})
</script>

<style lang="less" scoped>
  #starInfo {
    width: 100%;
    height: 100%;
    background-color: rgb(216, 214, 214);
    display: flex;
    justify-content: center;
    align-items: center;

    .back {
      width: 10%;
      height: 70%;
      background-color: purple;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      
      i {
        font-size: 30px;
        font-weight: bolder;
      }
    }
    .container {
      width: 50%;
      height: 70%;
      background-color: white;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      overflow: auto;
      .head {
        display: flex;
        flex: 2 2 auto;
        .img {
          display: flex;
          flex: 1 1 auto;
          img {
            width: 260px;
            height: 190px;
          }
        }
        .numberName {
          display: flex;
          flex-direction: column;
          flex: 2 2 auto;
          align-items: center;
          .number {
            font-size: 80px;
            color: gold;
            font-weight: bolder;
            margin-bottom: 5px;
          }
          .name {
            font-size: 35px;
            font-weight: bolder;
            color: black;
            margin-bottom: 15px;
          }
          .team {
            font-size: 25px;
            font-weight: bolder;
            color: grey;
          }
        }
        .bodyData {
          display: flex;
          flex-direction: column;
          color: grey;
          font-size: 20px;
          font-weight: bold;
          flex: 4 4 auto;
          align-items: center;
          margin-top: 20px;
          .heandwe {
            display: flex;
            flex-direction: row;
            text-align: center;
            margin-bottom: 5px;
            .height {
              margin-right: 3px;
            }
            .weight {
              margin-left: 3px;
            }
            span {
              margin: 0 3px;
            }
          }
          .birthday {
            display: flex;
            flex-direction: row;
            text-align: center;
            margin-bottom: 5px;
            span {
              margin: 0 5px;
            }
          }
          .draft {
            display: flex;
            flex-direction: row;
            text-align: center;
            margin-bottom: 5px;
            span {
              margin: 0 5px;
            }
          }
          .experience {
            display: flex;
            flex-direction: row;
            text-align: center;
            margin-bottom: 5px;
            span {
              margin: 0 5px;
            }
          }
        }
      }
      .stardata {
        display: flex;
        flex-direction: row;
        flex: 1 1 auto;
        justify-content: center;
        .score {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 10px;
          span {
            &:nth-child(1){
              color: grey;
            }
            &:nth-child(2){
              color: black;
              font-size: 25px;
              font-weight: bolder;
            }
          }
        }
        .board {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 10px;
          span {
            &:nth-child(1){
              color: grey;
            }
            &:nth-child(2){
              color: black;
              font-size: 25px;
              font-weight: bolder;
            }
          }
        }
        .assit {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 10px;
          span {
            &:nth-child(1){
              color: grey;
            }
            &:nth-child(2){
              color: black;
              font-size: 25px;
              font-weight: bolder;
            }
          }
        }
      }
      .foot {
        display: flex;
        flex: 14 14 auto;
        .intro {
          display: flex;
          flex: 10 10 auto;
          flex-direction: column;
          margin-left: 5px;
          .title {
            display: flex;
            font-size: 20px;
            font-weight: bolder;
            margin-bottom: 5px;
           
          }
          .text {
            display: flex;
            flex-direction: column;
            .honor {
              display: flex;
              flex-direction: column;
              flex: 1 1 auto;
              margin-bottom: 10px;
              .honorTitle {
                font-size: 20px;
                font-weight: bolder;
              }
              .honorMain {
                color: grey;
                text-indent: 2em;
              }
            }
            .story {
              display: flex;
              flex-direction: column;
              flex: 1 1 auto;
              .storyTitle {
                font-size: 20px;
                font-weight: bolder;
              }
              .storyMain {
                color: grey;
                text-indent: 2em;
              }
            }
          }
        }
        .teamLogo {
          display: flex;
          flex: 1 1 auto;
          justify-content: center;
          align-items: center;
          img {
            width: 200px;
            height: 200px;
          }
        }
      }
      
      
    }
  }
</style>