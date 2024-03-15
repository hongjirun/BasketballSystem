<template>
  <div id="loginButton">
    <button @click="openLoginInput(true)">登录/注册</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    return {
      store
    }
  },
  methods: {
    openLoginInput(bool) {
      this.store.commit('changeLogin', bool);
      this.store.commit('changeLoginPage', true);
    }
  }
})
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