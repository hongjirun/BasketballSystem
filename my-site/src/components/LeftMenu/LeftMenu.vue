<!-- 左边菜单栏 -->
<template>
  <div id="leftMenu">
    <ul class="menuList">
      <li v-for="item in menu" :key='item.item' @click="changeLeague()"><router-link  :to="item.href" @click="selectList(item.item)" :class="{ isSelected: isSelected[item.item].name}"><i :class="['iconfont',item.icon]"></i>{{ item.name }}</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  name: 'leftMenu',
  setup() { 
    const store = useStore();
    const isSelected = computed(() => store.state.isSelected);
    const currentRoute = computed(()=>store.state.currentRoute);
    const routerPath = ref('');
    return {
      menu: [
        { name: '首页', icon: 'icon-shouye', item: 0, href:'/' },
        { name: '比赛资讯', icon: 'icon-xinwen', item: 1, href: '/news'  },
        { name: '赛程排名', icon: 'icon-paiming',  item: 2, href: '/ranking'   },
        { name: '球员数据', icon: 'icon-shuju',  item: 3, href: '/data'   },
        { name: '留言板', icon: 'icon-liuyanban-05',  item: 4, href: '/message'   },
        { name: '精彩集锦', icon: 'icon-shipin', item: 5, href: '/video'   },

        
      ],
      store,
      isSelected,
      currentRoute,
      routerPath
      // currentRoutePath
    }
  },
  mounted() {
    this.changeRoute();
  },
  methods: {
    selectList(index: number) { 
      
      this.store.commit('handleSelected', index);
      this.store.commit('handleDataCenter', 0);
    },
    
    changeLeague() { 
      
      this.store.commit('handleLeague', 0);
      
      
      
     
      
    },
    changeRoute() { 
      this.routerPath = this.$route.path;
      this.store.commit('changeRoute', this.routerPath);
      this.store.commit('changeDataRoute', this.routerPath);
      
    }
    

  },
  
})
</script>

<style lang="less" scoped>
#leftMenu {
  width: 100%;
  height: 100%;
  overflow: auto;
  .menuList {
    font-size: 20px;
    list-style: none;
    
    li{   
      a {
        display: inline-block;
        width: 140px;
        margin: 10px 0 0 25px;
        padding: 10px 10px 10px 15px;
        text-decoration: none;
        color: rgb(166, 165, 165);
        &:hover {
          color: white;
          background-color: grey;
          border-radius: 15px;
        }
        i {
          margin-right: 10px;
          transition: font-size 0.5s ease-in-out;
        }
      }
    }
  }
  .isSelected {
    color: white !important;
    background-color: grey;
    border-radius: 15px;
    i {
      font-weight: bolder;
      font-size: 25px;
    }
  }
}
</style>