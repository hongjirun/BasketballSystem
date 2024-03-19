<!-- 排名组件内容 -->
<template>
  <div id="rankingComponent">
    <ul class="contentList">
      <!-- NBA的排名 -->
      <li v-if="'/ranking/nba'===currentRoute">
        <table class="nbaTable">
          <!-- 东部标题 -->
          <tr class="title">
            <td>东部</td>
          </tr>
          <!-- 东部数据标题 -->
          <tr class="DataTitle">
            <td>排名</td>
            <td>队名</td>
            <td>胜场数</td>
            <td>负场数</td>
            <td>胜率</td>
            <td>连胜/连负</td>
          </tr>
          <!-- 东部数据 -->
          <tr v-for="item in nbaEastRankingData" class="data">
            <td><i :class="['iconfont',item.order]"></i></td>
            <td>{{ item.teamName }}</td>
            <td>{{item.winCount}}</td>
            <td>{{item.loseCount}}</td>
            <td>{{ (item.winCount/(item.loseCount+item.winCount)*100).toFixed(1) }}%</td>
            <td>{{ item.continueWL}}</td>
          </tr>
          <!-- 西部标题 -->
          <tr class="title">
            <td>西部</td>
          </tr>
          <!-- 西部数据标题 -->
          <tr class="DataTitle">
            <td>排名</td>
            <td>队名</td>
            <td>胜场数</td>
            <td>负场数</td>
            <td>胜率</td>
            <td>连胜/连负</td>
          </tr>
          <!-- 西部数据 -->
          <tr v-for="item in nbaWeastRankingData" class="data">
            <td><i :class="['iconfont', item.order]"></i></td>
            <td>{{ item.teamName }}</td>
            <td>{{ item.winCount }}</td>
            <td>{{ item.loseCount }}</td>
            <td>{{ (item.winCount / (item.loseCount + item.winCount) * 100).toFixed(1) }}%</td>
            <td>{{ item.continueWL }}</td>
          </tr>
        </table>
        
        

        
        
       
      </li>

      <!-- CBA的排名 -->
      <li v-if="'/ranking/cba'===currentRoute">
        <table class="table">
          <!-- 数据栏标题 -->
          <tr class="title">
            <td>排名</td>
            <td>队名</td>
            <td>胜场数</td>
            <td>负场数</td>
            <td>胜率</td>   
          </tr>
          <!-- 数据 -->
          <tr class="dataList" v-for="item in rankingData">
            <td><i :class="['iconfont', item.order]"></i></td>
            <td>{{ item.teamName }}</td>
            <td>{{ item.winCount }}</td>
            <td>{{ item.loseCount }}</td>
            <td>{{ (item.winCount / (item.loseCount + item.winCount) * 100).toFixed(1) }}%</td>
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref ,computed} from "vue";
import { useStore } from "vuex";
import { getNbaEastRanking } from "@/api/rankingshedule/nbaeastranking";
import { getNbaWeastRanking } from "@/api/rankingshedule/nbaweastranking";
import { getCbaRanking } from "@/api/rankingshedule/cbaranking";
export default defineComponent({
  setup() { 
    const store = useStore();
    const currentRoute = computed(() => store.state.currentRoute);
    const nbaEastRankingData = ref([
      // { order: 'icon-shuzi1', teamName: '凯尔特人', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi2', teamName: '骑士', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi3', teamName: '雄鹿', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi4', teamName: '尼克斯', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi5', teamName: '76人', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi6', teamName: '步行者', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi7', teamName: '热火', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi8', teamName: '魔术', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi9', teamName: '公牛', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi10', teamName: '老鹰', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi11', teamName: '篮网', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi12', teamName: '猛龙', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi13', teamName: '黄蜂', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi14', teamName: '奇才', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi15', teamName: '活塞', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      
      
    ]);
    const nbaWeastRankingData = ref([
      // { order: 'icon-shuzi1', teamName: '森林狼', winCount: 40, loseCount: 12, continueWL: '3连胜' },

      // { order: 'icon-shuzi2', teamName: '雷霆', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi3', teamName: '快船', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi4', teamName: '掘金', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi5', teamName: '太阳', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi6', teamName: '国王', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi7', teamName: '鹈鹕', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi8', teamName: '独行侠', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi9', teamName: '湖人', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi10', teamName: '爵士', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi11', teamName: '勇士', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi12', teamName: '火箭', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi13', teamName: '灰熊', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi14', teamName: '开拓者', winCount: 40, loseCount: 12, continueWL: '3连胜' },
      // { order: 'icon-shuzi15', teamName: '马刺', winCount: 40, loseCount: 12, continueWL: '3连胜' },
    ]);
    const rankingData = ref([
      // { order: 'icon-shuzi1', teamName: '辽宁', winCount: 40, loseCount: 12 },

      // { order: 'icon-shuzi2', teamName: '新疆', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi3', teamName: '浙江', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi4', teamName: '浙江东阳光', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi5', teamName: '广东', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi6', teamName: '深圳', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi7', teamName: '北控', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi8', teamName: '青岛', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi9', teamName: '上海', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi10', teamName: '广州', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi11', teamName: '天津', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi12', teamName: '北京', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi13', teamName: '南京', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi14', teamName: '山西', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi15', teamName: '福建', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi16', teamName: '吉林', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi17', teamName: '宁波', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi18', teamName: '四川', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi19', teamName: '江苏', winCount: 40, loseCount: 12 },
      // { order: 'icon-shuzi20', teamName: '开拓者', winCount: 40, loseCount: 12 },
      
    ]);
    return {
      store,
      currentRoute,
      nbaEastRankingData,
      nbaWeastRankingData,
      rankingData
    }
  },
  mounted() { 
    getNbaEastRanking().then(res => {
      this.nbaEastRankingData = res.data.data;
    });
    getNbaWeastRanking().then(res => {
      this.nbaWeastRankingData = res.data.data;
    });
    getCbaRanking().then(res => {
      this.rankingData = res.data.data;
    });
  }
})
</script>

<style scoped lang="less">
  #rankingComponent {
    width: 100%;
    height: 100%;
    overflow: auto;
    
    .contentList {  
      list-style: none;
      li {
        /** nba排名*/
        .nbaTable {
          width: 100%;
          height: 100%;
          tr {
            display: block;
            border-bottom: 1px solid rgb(156, 154, 154);
            padding: 10px 0;
          }
          .title {
            display: block;
            border-bottom: 1px solid rgb(156, 154, 154);
            
            td {
              width: 600px;
              color: red;
              margin: 10px ;
              display: block;
              font-size: 20px;
              font-weight: bolder;
              
            }

          }
          .DataTitle {
            display: block;
            margin-bottom: 10px;
            background-color: rgb(231, 231, 231);
            td:first-child {
              display: inline-block;
              margin-left: 10px;
              width: 40px;
            }
            td:nth-child(2){
              width: 160px;
            }
            td {
              width: 100px;
              display: inline-block;
              text-align: center;
              color: grey;
              font-size: 20px;
              
            }
          }

          .data {
            display: block;
            margin-bottom: 10px;
            td:first-child {
              display: inline-block;
              margin-left: 10px;
              width: 40px;
            }
            td:nth-child(2){
              width: 160px;
            }
            td {
              width: 100px;
              display: inline-block;
              margin-left: 0px;
              text-align: center;
              font-size: 16px;
              i {
                color: rgb(89, 45, 177);
              }
            }
          }
        }
        /** 其他联赛排名*/
        .table {
          width: 100%;
          height: 100%;
          tr {
            display: block;
            border-bottom: 1px solid rgb(156, 154, 154);
            padding: 10px 0;
          }
          .title {
            display: block;
            margin-bottom: 10px;
            background-color: rgb(231, 231, 231);
            td:first-child {
              display: inline-block;
              margin-left: 10px;
              width: 40px;
            }
            td:nth-child(2){
              width: 160px;
            }
            td {
              width: 100px;
              display: inline-block;
              text-align: center;
              color: grey;
              font-size: 20px;
            }
          }
          .dataList {
            display: block;
            margin-bottom: 10px;
            td:first-child {
              display: inline-block;
              margin-left: 10px;
              width: 40px;
            }
            td:nth-child(2){
              width: 160px;
            }
            td {
              width: 100px;
              display: inline-block;
              margin-left: 0px;
              text-align: center;
              font-size: 16px;
              i {
                color: rgb(89, 45, 177);
              }
            }
          }

        }
      }
    }
    
  }
</style>