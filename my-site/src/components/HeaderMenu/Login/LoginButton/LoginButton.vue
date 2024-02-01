<template>
  <div id="loginButton">
    <button>登录/注册</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#loginButton {
  width: 100%;
  height: 100%;
  button {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgb(254, 44, 85);
    font-size: 16px;
    color: white;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}

</style>