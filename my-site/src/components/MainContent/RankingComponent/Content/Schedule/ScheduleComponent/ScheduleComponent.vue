<template>
  <div id="scheduleComponent">
    <ul class="contentList">

      <!-- NBA的赛程 -->
      <li v-if="'/ranking/nba'===currentRoute" v-for="item in nbascheduleData" >

        <!-- 比赛时间 -->
        <div class="time">{{ item.time }}</div>

        <!-- 比赛对手&&类型 -->
        <div class="game">
          <!-- 对手一 -->
          <div class="teamOne">
            <div class="teamNameOne">
              {{ item.teamNameOne }}
            </div>
            <div class="imgOne">
              <img :src="item.teamOneLogo" :alt="item.teamNameOne" width="36px" height="36px">
            </div>

          </div>
          <!-- 比赛类型 -->
          <div class="gameType">
            {{item.gameType}}
          </div>
          <!-- 对手二 -->
          <div class="teamTwo">
            <div class="imgTwo">
              <img :src="item.teamTwoLogo" :alt="item.teamNameTwo" width="36px" height="36px">
            </div>
            <div class="teamNameTwo">
              {{ item.teamNameTwo }}
            </div>
          </div>
        </div>

        <!-- 是否预约提醒 -->
        <div class="reservation">
          <!-- 预约按钮组件 -->
          <Reservation></Reservation>
        </div>
      </li>

      <!-- CBA赛程 -->
      <li v-if="'/ranking/cba' === currentRoute" v-for="item in nbascheduleData">
        <!-- 比赛时间 -->
          <div class="time">{{ item.time }}</div>

          <!-- 比赛对手&&类型 -->
          <div class="game">
            <!-- 对手一 -->
            <div class="teamOne">
              <div class="teamNameOne">
                {{ item.teamNameOne }}
              </div>
              <div class="imgOne">
                <img :src="item.teamOneLogo" :alt="item.teamNameOne" width="36px" height="36px">
              </div>

            </div>
            <!-- 比赛类型 -->
            <div class="gameType">
              {{ item.gameType }}
            </div>
            <!-- 对手二 -->
            <div class="teamTwo">
              <div class="imgTwo">
                <img :src="item.teamTwoLogo" :alt="item.teamNameTwo" width="36px" height="36px">
              </div>
              <div class="teamNameTwo">
                {{ item.teamNameTwo }}
              </div>
            </div>
          </div>

          <!-- 是否预约提醒 -->
          <div class="reservation">
            <!-- 预约按钮组件 -->
            <Reservation></Reservation>
          </div>
      </li>
      <!-- <li v-show="'/ranking/nba' === currentRoute">nba</li>
      <li v-show="'/ranking/nba' === currentRoute">nba</li>
      <li v-show="'/ranking/nba' === currentRoute">nba</li>
      <li v-show="'/ranking/nba' === currentRoute">nba</li>
      <li v-show="'/ranking/nba' === currentRoute">nba</li>
      <li v-show="'/ranking/nba' === currentRoute">nba</li>
      <li v-show="'/ranking/nba' === currentRoute">nba</li>
      <li v-show="'/ranking/nba' === currentRoute">nba</li> -->
      
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent,ref } from "vue";
import { useStore } from "vuex";

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue';
import Reservation from '../ScheduleComponent/Reservation.vue';
export default defineComponent({
  setup() { 
    const store = useStore();
    const currentRoute = computed(() => store.state.currentRoute);
    const nbascheduleData = ref([
      { time: '7:00', teamNameOne: '勇士', teamOneLogo: 'https://img0.baidu.com/it/u=3149170547,3178474380&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=74133d9aff7bb80b453df85cf1ee8549', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛',item:0 },
      { time: '8:00', teamNameOne: '掘金', teamOneLogo: 'https://img2.baidu.com/it/u=1269770528,1956881505&fm=253&fmt=auto&app=138&f=JPEG?w=693&h=500', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛' , item: 1},
      { time: '9:00', teamNameOne: '尼克斯', teamOneLogo: 'https://img2.baidu.com/it/u=2140536083,1619924440&fm=253&fmt=auto&app=120&f=JPEG?w=997&h=720', teamNameTwo: '骑士', teamTwoLogo: 'https://img1.baidu.com/it/u=2877948227,1460941910&fm=253&fmt=auto&app=138&f=JPG?w=445&h=279', gameType: 'NBA常规赛' , item: 2},
      { time: '9:00', teamNameOne: '雷霆', teamOneLogo: 'https://img1.baidu.com/it/u=1792299787,2659773976&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛', item: 3  },
      { time: '12:00', teamNameOne: '勇士', teamOneLogo: 'https://img0.baidu.com/it/u=3149170547,3178474380&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=74133d9aff7bb80b453df85cf1ee8549', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛', item: 4  },
      { time: '12:00', teamNameOne: '尼克斯', teamOneLogo: 'https://img2.baidu.com/it/u=2140536083,1619924440&fm=253&fmt=auto&app=120&f=JPEG?w=997&h=720', teamNameTwo: '篮网', teamTwoLogo: 'https://img0.baidu.com/it/u=3843652562,3869303015&fm=253&fmt=auto&app=120&f=JPEG?w=720&h=548', gameType: 'NBA常规赛', item: 5 },
      { time: '12:00', teamNameOne: '雷霆', teamOneLogo: 'https://img1.baidu.com/it/u=1792299787,2659773976&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛', item: 6 },
      { time: '12:00', teamNameOne: '勇士', teamOneLogo: 'https://img0.baidu.com/it/u=3149170547,3178474380&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=74133d9aff7bb80b453df85cf1ee8549', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛' , item: 7},
      { time: '12:00', teamNameOne: '掘金', teamOneLogo: 'https://img2.baidu.com/it/u=1269770528,1956881505&fm=253&fmt=auto&app=138&f=JPEG?w=693&h=500', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛' , item: 8},
      { time: '12:00', teamNameOne: '尼克斯', teamOneLogo: 'https://img2.baidu.com/it/u=2140536083,1619924440&fm=253&fmt=auto&app=120&f=JPEG?w=997&h=720', teamNameTwo: '骑士', teamTwoLogo: 'https://img1.baidu.com/it/u=2877948227,1460941910&fm=253&fmt=auto&app=138&f=JPG?w=445&h=279', gameType: 'NBA常规赛', item: 9 },
      { time: '12:00', teamNameOne: '雷霆', teamOneLogo: 'https://img1.baidu.com/it/u=1792299787,2659773976&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛', item: 10 },
      { time: '12:00', teamNameOne: '勇士', teamOneLogo: 'https://img0.baidu.com/it/u=3149170547,3178474380&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=74133d9aff7bb80b453df85cf1ee8549', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛' , item: 11},
      { time: '12:00', teamNameOne: '尼克斯', teamOneLogo: 'https://img2.baidu.com/it/u=2140536083,1619924440&fm=253&fmt=auto&app=120&f=JPEG?w=997&h=720', teamNameTwo: '篮网', teamTwoLogo: 'https://img0.baidu.com/it/u=3843652562,3869303015&fm=253&fmt=auto&app=120&f=JPEG?w=720&h=548', gameType: 'NBA常规赛', item: 11  },
      { time: '12:00', teamNameOne: '雷霆', teamOneLogo: 'https://img1.baidu.com/it/u=1792299787,2659773976&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', teamNameTwo: '湖人', teamTwoLogo: 'https://img1.baidu.com/it/u=641646442,2332888089&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1707584400&t=1b0bd8ce2cde8485f6ece11d5b6d2c53', gameType: 'NBA常规赛', item: 12  },
      
    ]);
    return {
      store,
      currentRoute,
      nbascheduleData
    }
  },
  components: {
    Reservation
  }
})
</script>

<style scoped lang="less">
  #scheduleComponent {
    width: 100%;
    height: 100%;
    .contentList {
      list-style: none;
      
      
      li {
        width: 100%;
        height: 70px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        border-bottom: 1px solid grey;
        
        .time {
          font-size: 20px;
          font-weight: bolder;
          display: flex;
          flex: 8 8 auto;
        }
        .game {
          display: flex;
          flex: 8 8  auto;
          .teamOne {
            display: flex;
            justify-content: center;
            align-items: center;
            .teamNameOne {
              font-size: 20px;
              font-weight: bolder;
              margin-right: 5px;
            }
            .imgOne {
              margin-right: 20px;
              img {
                width: 36px;
                height: 36px;
              }
            }
          }
          .gameType {
            font-size: 13px;
            font-weight: bolder;
            color: grey;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .teamTwo {
            display: flex;
            justify-content: center;
            align-items: center;
            .imgTwo {
              margin-left: 20px;
              img {
                width: 36px;
                height: 36px;
              }
            }
            .teamNameTwo {
              font-size: 20px;
              font-weight: bolder;
              margin-left: 5px;
            }
          }
        }
        .reservation {
          display: flex;
          flex: 1 1 auto;
          justify-content: center;
          align-items: center;
          
        }
      }
    } 
  }
</style>