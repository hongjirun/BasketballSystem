<template>
  <div id="news">
    <Layout>
      <!-- 插槽 -->
      <template #firstMain>
        <div class="newsContent">
          <!-- 联赛菜单收缩框 -->
          <div class="contract" ref="contratRefs">
            <Contract :num="1"  @isShrink="handleShrink" @isExpand="handleExpand"></Contract>
          </div>
          <!-- 新闻内容框显示 -->
          <div class="newsContentMain" ref="contentRefs">
            <NewsContent></NewsContent>
          </div>
        </div>
        
      </template>
    </Layout> 
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,ref } from "vue";
import { useStore } from 'vuex';
import Layout from '../../components/Layout/Layout.vue';
import NewsContent from '../../components/MainContent/NewsComponent/NewsContent.vue';
import  Contract from '../../components/Contract/Contract.vue';
export default defineComponent({
  setup() {
    const store = useStore();
    const isSelected = computed(() => store.state.isSelected);
    const isLeague = computed(() => { store.state.isLeague});
    const contractWidth = ref(0);
    const contentWidth = ref(0);
    const contractRef = ref(null);
    
    // const changeContractWidth = () => {
    //   const contractWidthRefs = this.$refs.contratRefs;
    //   console.log(contractWidthRefs);
      
    //   contractWidthRefs.style.width = this.contractWidth + '%';
    // };
    return {
      store,
      isSelected,
      contractWidth,
      contentWidth,
      contractRef,
      isLeague,
      
      // changeContractWidth
      
    }
  },
  components: {
    Layout,
    NewsContent,
    Contract
    
  },
  
  mounted() {
    this.selectList();
    
    
  },
  methods: {
    selectList() {
      this.store.commit('handleSelected', 1);
    },
    handleShrink(data:number) { 
      this.contractWidth = data;
      this.contentWidth = 100 - this.contractWidth-3;
      console.log(this.contentWidth);
      
      this.changeContractWidth();
    },
    handleExpand(data:number) { 
      this.contractWidth = data;
      this.contentWidth = 100 - this.contractWidth-3;
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

<style lang="less" scoped>
  #news {
    width: 100%;
    height: 100%;
    .newsContent {
      width: 100%;
      height: 100%;
      display: flex;
      .contract {
        width: 12%;
        height: 100%; 
        display: flex;
        
      }
      .newsContentMain {
        width: 85%;
        height: 100%;
        display: flex;

        
        
      }
    }
    
  }
</style>