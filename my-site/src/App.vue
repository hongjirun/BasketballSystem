<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
@import './styles/mixins.less';
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .BackgroundGradient;
}
</style>
