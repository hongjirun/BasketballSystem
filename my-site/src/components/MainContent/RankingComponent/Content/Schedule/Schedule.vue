<!-- 赛程内容 -->
<template>
  <div id="schedule">
    <!-- NBA -->
    <div class="nba" v-show="'/ranking/nba'===currentRoute">
      <ScheduleComponent></ScheduleComponent>
    </div>
    <!-- CBA -->
    <div class="cba" v-show="'/ranking/cba' === currentRoute">
      <ScheduleComponent></ScheduleComponent>
    </div>
    
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import ScheduleComponent from './ScheduleComponent/ScheduleComponent.vue';
export default defineComponent({
  setup() { 
    const store = useStore();
    const currentRoute = computed(()=>store.state.currentRoute);
    return {
      store,
      currentRoute
    }
  },
  mounted() { 
    
  },
  components: {
    ScheduleComponent
  }
})
</script>

<style scoped lang="less">
  #schedule {
    width: 100%;
    height: 100%;
    
  }

</style>