<template>
  <div id="search">
    <div class="input">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" @click="show()" placeholder="点击搜索框进行搜索或取消" v-model="search">
    </div>
    <div class="searchContent" v-if="isSearch">
      <ul>
        <li v-for="item in matchName"><router-link :to="{ name: 'StarInfo', params: { id: matchNum(item) } }">{{ item }}</router-link></li>
        
      </ul>
      <div class="tip">
        <span>暂只提供搜索名字进行球星卡查询</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { getStarinfo } from "../../../api/starinfo";
export default defineComponent({
  setup() {
    const isShow = ref(false);
    const search = ref('');
    const store = useStore();
    const isSearch = computed(() => store.state.isSearch);
    const starInfo = ref([]);
    const starName = ref([]);
    return {
      isShow,
      search,
      starName,
      store,
      isSearch
    }
  },
  methods: {
    show() { 
      this.isShow = !this.isShow;
      this.store.commit('changeSearch', this.isShow);

    },
    matchNum(name) {
      for (let i = 0; i < this.starInfo.length; i++) {
        if (name === this.starInfo[i].name) {
          return this.starInfo[i].id
        }
      }
    }
  },
  mounted() { 
    this.isShow = this.isSearch;
    getStarinfo().then(res => { 
      this.starInfo = res.data.data;
      for (let i = 0; i < this.starInfo.length; i++) { 
        this.starName[i] = this.starInfo[i].name;
      }
      console.log(this.starName);
      
    })
  },
  computed: {
    matchName() { 
      const inputValue = this.search.trim();//获取搜索框的内容然后去掉前后空格，防止匹配不了
       if (inputValue === '') {
        return [];//输入值为空，返回空数组
      }
      const pattern = new RegExp(inputValue.split("").join(".*"), "i");//将搜索框内容输入生成正则表达式
      console.log(this.starName.filter(name => pattern.test(name)));
      return this.starName.filter(name => pattern.test(name));
    },
    
  }
})
</script>

<style lang="less" scoped>
  #search {
    .input {
      width: 300px;
      height: 30px;
      border: 1px rgb(65, 64, 64) solid;
      border-radius: 15px;
      display: flex;
      justify-content: left;
      align-items: center;
      position: relative;
      i {
        margin: 0 5px;
      }
      input {
        width: 260px;
        outline: none;
        border: 0;
        background-color: transparent;
        color: white;
      }
    }
    .searchContent {
      width: 300px;
      height: 400px;
      position: absolute;
      background-color: white;
      z-index: 10000;
      border-radius: 10px;
      
      ul {
        height: 90%;
        list-style: none;
        overflow: auto;
        li {
          margin: 5px;
          padding: 5px 0;
          color: grey;
          border-bottom: 1px solid rgb(53, 52, 52);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          a {
            text-decoration: none;
            color: grey;
          }
        }
      }
      .tip {
        height: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }
  }
</style>