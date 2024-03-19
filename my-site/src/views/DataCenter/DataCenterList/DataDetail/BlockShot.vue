<!-- 盖帽内容显示 -->
<template>
  <div id="blockShot">
    <ul class="contentList">
          <!-- Nba的盖帽 -->
          <li v-if="'/data/nba/blockshot' === dataMenuRoute">
            <table class="blockShotTable">
              <!-- 数据标题 -->
              <tr class="title">
                <td>排名</td>
                <td>球员</td>
                <td>球队</td>
                <td>盖帽数</td>
                <td>场次</td>
                <td>上场时间</td>
              </tr>
              <!--  数据 -->
              <tr class="data" v-for="item in nbaBlockShotData">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.team }}</td>
                <td>{{ item.count }}</td>
                <td>{{ item.session }}</td>
                <td>{{ item.time }}</td>

              </tr>
            </table>
          </li>
          <!-- CBA联赛的盖帽 -->
          <li v-if="'/data/cba/blockshot' === dataMenuRoute">
            <table class="blockShotTable">
                <!-- 数据标题 -->
                <tr class="title">
                  <td>排名</td>
                  <td>球员</td>
                  <td>球队</td>
                  <td>盖帽数</td>
                  <td>场次</td>
                  <td>上场时间</td>
                </tr>
                <!--  数据 -->
                <tr class="data" v-for="item in cbaBlockShotData">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.team }}</td>
                  <td>{{ item.count }}</td>
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
import { getNbaBlockShot } from "../../../../api/datacenter/nbadatacenter";
import { getCbaBlockShot } from "../../../../api/datacenter/cbadatacenter";
export default defineComponent({
  setup() {
    const store = useStore();
    const dataMenuRoute = ref('');
    const nbaBlockShotData = ref([
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },
      // { order: 1, name: '库里', team: '勇士', count: 30, session: 82, time: 28.8 },

    ]);
    const cbaBlockShotData = ref([
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
      // { order: 1, name: '郭艾伦', team: '辽宁', count: 29.6, session: 71, time: 28.8 },
    ]);
    return {
      store,
      dataMenuRoute,
      nbaBlockShotData,
      cbaBlockShotData
    }
  },
  mounted() {
    this.changeMenuDataCenter();
    this.dataMenuRoute = this.$route.path;
    this.$store.commit('changeDataRoute', this.dataMenuRoute);
    getNbaBlockShot().then(res => {
      this.nbaBlockShotData = res.data.data;
    });
    getCbaBlockShot().then(res => {
      this.cbaBlockShotData = res.data.data;
    })
  },
  methods: {
    changeMenuDataCenter() {
      // 刷新后还是命中原来的的选项
      this.store.commit('handleDataCenter', 6);
    }
  }
})
</script>

<style scoped lang="less">
#blockShot {
  width: 100%;
  height: 100%;

  .contentList {
    list-style: none;

    li {
      .blockShotTable {
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

          td:nth-child(2) {
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

          td:nth-child(2) {
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