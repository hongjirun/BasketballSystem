<!-- 排名内容 -->
<template>
  <div id="ranking">
    <!-- NBA -->
    <div class="nba commont" v-show="'/ranking/nba' === currentRoute">
      <RankingComponent></RankingComponent>
    </div>
    <!-- CBA -->
    <div class="cba commont" v-show="'/ranking/cba' === currentRoute">
      <RankingComponent></RankingComponent>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import RankingComponent from './RankingComponent/RankingComponent.vue';
export default defineComponent({
  setup() {
    const store = useStore();
    const currentRoute = computed(() => store.state.currentRoute);
    return {
      store,
      currentRoute
    }
  },
  components: {
    RankingComponent
  },
  mounted() {

  },
})
</script>

<style scoped lang="less">
  #ranking {
    width: 100%;
    height: 100%;
    background-color: rgb(222, 222, 222);
    .commont {
      width: 100%;
      height: 100%;
    }
  }
</style>