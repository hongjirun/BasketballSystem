<!-- 赛程排名 -->
<template>
  <div id="scheduleranking">
    <Layout>
    <!-- 插槽 -->
      <template #firstMain>
        <div class="rankingContent">
          <!-- 联赛菜单收缩框 -->
          <div class="contract" ref="contratRefs">
            <Contract :num="2"  @isShrink="handleShrink" @isExpand="handleExpand">

            </Contract>
          </div>
          <!-- 内容区域 -->
          <div class="rankingContentMain" ref="contentRefs">
            <RankingContent></RankingContent>
          </div>
        </div> 
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from 'vuex';
import Layout from '../../components/Layout/Layout.vue';
import Contract from '../../components/Contract/Contract.vue';
import RankingContent from '../../components/MainContent/RankingComponent/RankingContent.vue';
export default defineComponent({
  setup() { 
    const store = useStore();
    const isSelected = computed(() => store.state.isSelected);
    const contractWidth = ref(0);
    const contentWidth = ref(0);
    const contractRef = ref(null);
    
    return {
      store,
      isSelected,
      contractWidth,
      contentWidth,
      contractRef,
      
     
    }
  },
  components: {
    Layout,
    Contract,
    RankingContent
  },
  mounted() {

    this.selectList();
  },
  methods: {
    selectList() {
      this.store.commit('handleSelected', 2);
    },
    handleShrink(data: number) {
      this.contractWidth = data;
      this.contentWidth = 100 - this.contractWidth - 3;
      // console.log(this.contentWidth);

      this.changeContractWidth();
    },
    handleExpand(data: number) {
      this.contractWidth = data;
      this.contentWidth = 100 - this.contractWidth - 3;
      this.changeContractWidth();
    },
    //改变收缩框的大小
    changeContractWidth() {
      const contractRef = this.$refs.contratRefs as HTMLElement;
      const contentRef = this.$refs.contentRefs as HTMLElement;
      contractRef.style.width = this.contractWidth + '%';
      contentRef.style.width = this.contentWidth + '%';

    }
  }
})
</script>

<style scoped lang="less">
 #scheduleranking {
  width: 100%;
  height: 100%;
  .rankingContent {
    width: 100%;
    height: 100%;
    display: flex;
    .contract {
      width: 12%;
      height: 100%;
      display: flex;
    }
    .rankingContentMain {
      width: 85%;
      height: 100%;
      display: flex;
      border-radius: 15px;
      border: 1px solid rgb(35, 33, 33);
      
    }
  }
 }
</style>