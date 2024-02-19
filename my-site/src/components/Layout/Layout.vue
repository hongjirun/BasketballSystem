<!-- 头部和左边导航栏和中间内容组件 -->
<template>
  <div id="layout">
    <!-- 头部 -->
    <div class="header">
        <HeaderMenu></HeaderMenu>
    </div>
    <!-- 中间 -->
    <div class="middle">
      <div class="left">
        <LeftMenu></LeftMenu>
      </div>
      <div class="main">
        <!-- <MainContent>
          
        </MainContent> -->
        <div class="mainContent">
          <!-- 一级菜单的显示内容 -->
          <slot name="firstMain"></slot>
        </div>
        
        
      </div>
    </div>
    
  </div>
</template>

<script>
import HeaderMenu from '../HeaderMenu/HeaderMenu.vue';
import LeftMenu from '../LeftMenu/LeftMenu.vue';

export default {
  name: 'Layout',
  components: {
    HeaderMenu,
    LeftMenu,
    

  },
}
</script>

<style lang="less" scoped>
#layout {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 8%;
    
    
  }
  .middle {
    width: 100%;
    height: 90%;
    display: flex;
    
    .left {
      width: 100%;
      height: 100%;
      display: flex;
      margin-right: 20px;
      flex: 6 6 auto;
    
    }
    .main {
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1 1 auto;
      padding: 10px 10px 0 0; 
      .mainContent {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        
        
        
        
      }
      .mainContent::-webkit-scrollbar {
        display: none;
      }
    }
  }
  
}
</style>