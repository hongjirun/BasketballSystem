<!-- 赛程和排名内容显示区域 -->
<template>
  <div id="rankingContent">
    <!-- 赛程和排名选择按钮 -->
    <div class="selectButton">
      <!-- 赛程按钮 -->
      <div class="schedule" @click="changeSelected(true)" :class="{active:srSelected}">
        <span>赛程</span>
      </div>
      <!-- 排名按钮 -->
      <div class="ranking" @click="changeSelected(false)" :class="{ active: !srSelected }">
        <span>排名</span>
      </div>
    </div>
    <div class="divider">
      <hr>
    </div>
    <div class="scheduleRankingContent">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() { 
    // const srSelected = ref(true);
    const store = useStore();
    const srSelected = computed(() => store.state.srSelected );
    return {
      store,
      srSelected, //确定选择赛程或者排名
    }
  },
  methods: {
    changeSelected(bool) { 
      this.store.commit('clickSelected', bool);
    }
  }

})
</script>

<style scoped lang="less">
 #rankingContent {
  width: 100%;
  height: 100%;
  
  .selectButton {
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .schedule {
      width: 60px;
      height: 30px;
      background-color: grey;
      font-size: 16px;
      font-weight: bolder;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: black;
      }
    }
    .ranking {
      width: 60px;
      height: 30px;
      background-color: grey;
      color: white;
      font-size: 16px;
      font-weight: bolder;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: black;
      }
    }
    .active {
      background-color: white;
      color: black;
    }
  }
  .divider {
    width: 100%;
    margin: 0 auto;
  }
  .scheduleRankingContent {
    width: 100%;
    height: 92%;
    
  }
 }
</style>