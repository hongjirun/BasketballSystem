<!-- 赛程排名组件汇总 -->
<template>
  <div id="content">
    <div class="schedule" v-show="srSelected">
      <Schedule></Schedule>
    </div>
    <div class="ranking" v-show="!srSelected">
      <Ranking></Ranking>
    </div>
  </div>
</template>

<script>
import Schedule from './Schedule/Schedule.vue';
import Ranking from './Ranking/Ranking.vue';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() { 
    const store = useStore();
    const srSelected = computed(() => store.state.srSelected);
    return {
      store,
      srSelected
    }
  },
  components: {
    Schedule,
    Ranking
  }
})
</script>

<style scoped lang="less">
  #content {
    width: 100%;
    height: 100%;
    
    .schedule {
      width: 100%;
      height: 100%;
      border-radius: 0 0 15px 15px;
      background-color: white;
      overflow: auto;
    }
    .ranking {
      width: 100%;
      height: 100%;
      border-radius: 0 0 15px 15px;
      background-color: white;
    }
  }

</style>