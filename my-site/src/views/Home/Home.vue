<!-- 首页 -->
<template>
  <div id="home">
    <Layout>
      <!-- 插槽 -->
      <template #firstMain>
        <div class="card">
          <!-- 球星卡片 -->
          <Card></Card>
        </div>
      </template>
    </Layout> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '../../components/Layout/Layout.vue';
import Card from '../../components/MainContent/HomeComponent/Card.vue';
import SayingCard from '../../components/MainContent/HomeComponent/SayingCard.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Layout,
    Card,
    SayingCard

  },
});
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  .card {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
 
  
}


</style>
