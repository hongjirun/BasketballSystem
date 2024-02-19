<template>
  <div id="cba">
    <Content></Content>
  </div>
</template>

<script>
import Content from '../../../components/MainContent/DataCenterComponent/Content/Content.vue';
import { ref, defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    return {
      store,
    }
  },
  components: {
    Content
  },
  mounted() {
    this.leagueList();
  },
  methods: {
    leagueList() {
      this.store.commit('handleLeague', 1);
    },
  }
})
</script>


<style scoped lang="less">
  #cba {
    width: 100%;
    height: 100%;
    
  }
</style>