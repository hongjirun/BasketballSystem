<!-- 投篮内容显示 -->
<template>
  <div id="shoot">
    <ul class="contentList">
       <!-- Nba的投篮 -->
        <li v-if="'/data/nba/shoot' === dataMenuRoute">
          <table class="shootTable">
            <!-- 数据标题 -->
            <tr class="title">
              <td>排名</td>
              <td>球员</td>
              <td>球队</td>
              <td>投篮命中率</td>
              <td>场次</td>
              <td>上场时间</td>
            </tr>
            <!--  数据 -->
            <tr class="data" v-for="item in nbaShootData">
              <td>{{ item.order }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.team }}</td>
              <td>{{ item.percentages }}</td>
              <td>{{ item.session }}</td>
              <td>{{ item.time }}</td>

            </tr>
          </table>
        </li>
        <!-- CBA联赛的得分 -->
        <li v-if="'/data/cba/shoot' === dataMenuRoute">
          <table class="shootTable">
            <!-- 数据标题 -->
            <tr class="title">
              <td>排名</td>
              <td>球员</td>
              <td>球队</td>
              <td>命中率</td>
              <td>场次</td>
              <td>上场时间</td>
            </tr>
            <!--  数据 -->
            <tr class="data" v-for="item in cbaShootData">
              <td>{{ item.order }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.team }}</td>
              <td>{{ item.percentages }}</td>
              <td>{{ item.session }}</td>
              <td>{{ item.time }}</td>

            </tr>
          </table>
        </li>
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const dataMenuRoute = ref('');
    const nbaShootData = ref([
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },
      { order: 1, name: '库里', team: '勇士', percentages: 30, session: 82, time: 28.8 },

    ]);
    const cbaShootData = ref([
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
      { order: 1, name: '郭艾伦', team: '辽宁', percentages: 29.6, session: 71, time: 28.8 },
    ]);
    return {
      store,
      dataMenuRoute,
      cbaShootData,
      nbaShootData
    }
  },
  mounted() {
    this.changeMenuDataCenter();
    this.dataMenuRoute = this.$route.path;
    this.$store.commit('changeDataRoute', this.dataMenuRoute);
  },
  methods: {
    // 刷新后还是命中原来的的选项
    changeMenuDataCenter() {
      this.store.commit('handleDataCenter', 1);
    }
  }
})
</script>

<style scoped lang="less">
  #shoot {
    width: 100%;
    height: 100%;
    .contentList {
      list-style: none;
      li {
        .shootTable {
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
              width: 150px;
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
              width: 150px;
              display: inline-block;
              margin-left: 0px;
              text-align: center;
              font-size: 16px;
              color: rgb(32, 31, 31);
            }
          }
        }
      }
    }
  }

</style>