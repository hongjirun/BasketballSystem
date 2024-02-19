<!-- 赛程预约组件 -->
<template>
  <div id="reservation" @click="reservation()">
    <button class="btu"  ref="btuRefs">未预约</button>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      isReservation: false,
    }
  },
  methods: {
    reservation() { 
      const btuRefs = this.$refs.btuRefs;
      this.isReservation = !this.isReservation;
      if (this.isReservation === true) {
        btuRefs.innerHTML = '已预约';

      }
      else if (this.isReservation === false) { 
        btuRefs.innerHTML = '未预约';
      }      

      
    }
  }
}
</script>

<style lang="less" scoped>
  #reservation {
    
    display: flex;
    justify-content: center;
    align-items: center;
    .btu {
      width:  70px;
      height: 40px;
      border-radius: 15px;
      background-color: orange;
      cursor: pointer;
      &:hover {
        background-color: rgb(241, 195, 110);
      }
    }
  }
</style>