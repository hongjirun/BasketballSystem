<template>
  <div id="news">
    <Layout>
      <!-- 插槽 -->
      <template #firstMain>
        <!-- 联赛菜单收缩框 -->
        <div class="contract"></div>
        <div class="newsContent">
          <NewsContent></NewsContent>
        </div>
      </template>
    </Layout> 
  </div>
</template>

<script>
import Layout from '../../components/Layout/Layout.vue';
import NewsContent from '../../components/MainContent/NewsComponent/NewsContent.vue';
export default {
  components: {
    Layout,
    NewsContent
  }
}
</script>

<style lang="less" scoped>
  #news {
    width: 100%;
    height: 100%;
    .newsContent {
      width: 100%;
      height: 100%;
      
    }
  }
</style>