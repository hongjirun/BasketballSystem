<!-- 精彩视频集锦 -->
<template>
  <div id="videoHighlights">
    <Layout>
      <!-- 插槽 -->
      <template #firstMain>
        <div class="videoContent">
          <VideoContent></VideoContent>
        </div>
      </template>
      </Layout>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import Layout from '../../components/Layout/Layout.vue';
import VideoContent from '../../components/MainContent/VideoComponent/VideoContent.vue';
export default defineComponent({
  setup() {
    const store = useStore();
    const isSelected = computed(() => store.state.isSelected);
    return {
      store,
      isSelected,
    }
  },
  components: {
    Layout,
    VideoContent
    

  },
  mounted() {

    this.selectList();
  },
  methods: {
    selectList() {
      this.store.commit('handleSelected', 5);
    },
  }
})
</script>

<style scoped lang="less">

  #videoHighlights {
    width: 100%;
    height: 100%;
    .videoContent {
      width: 97%;
      height: 100%;
      padding: 0 5px;
      border-radius: 15px;
      
    }
  }
</style>