<template>
  <div id="LoginImage">
    <img :src="userInfo.img" alt="">
    
  </div>
</template>

<script>
import { defineComponent, def, computed,ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() { 
    const store = useStore();
    const userInfo = ref({});

    return {
      store,
      userInfo
    }
  },
  mounted() { 
    if (localStorage.getItem('userData') && localStorage.getItem('token')) { 
      this.userInfo = JSON.parse(localStorage.getItem('userData'));
    }
  }
  
})
</script>

<style lang="less" scoped>
#LoginImage {
  width: 60px;
  height: 50px;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

 
}

</style>