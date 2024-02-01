<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
@import './styles/mixins.less';
#app {
  width: 1536px;
  height: 750px;
  .BackgroundGradient;
}
</style>
