<!-- 比赛资讯内容区域 -->
<template>
  <div id="newsContent">
   <router-view ></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  #newsContent {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: auto;
    background-color: white;
    /**background: linear-gradient(to left, #111623, #1e2f40, #1f2b42, #111623);*/
    /*background: linear-gradient(to left, #5a5a5a, #f1edf2, #efefef, #949494);*/
  }

</style>