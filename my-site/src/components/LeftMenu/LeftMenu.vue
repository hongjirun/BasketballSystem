<!-- 左边菜单栏 -->
<template>
  <div id="leftMenu">
    <ul class="menuList">
      <li v-for="item in menu" :key='item.item'><router-link  :to="item.href" @click="selectList(item.item)" :class="{ isSelected: isSelected[item.item].name}"><i :class="['iconfont',item.icon]"></i>{{ item.name }}</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  name: 'leftMenu',
  setup() { 
    const store = useStore();
    const isSelected = computed(() => store.state.isSelected);


    return {
      menu: [
        { name: '首页', icon: 'icon-shouye', item: 0, href:'/' },
        { name: '比赛资讯', icon: 'icon-xinwen', item: 1, href: '/news'  },
        { name: '赛程排名', icon: 'icon-paiming',  item: 2, href: '/news'   },
        { name: '数据中心', icon: 'icon-shuju',  item: 3, href: '/news'   },
        { name: '留言板', icon: 'icon-liuyanban-05',  item: 4, href: '/news'   },
        { name: '精彩集锦', icon: 'icon-shipin', item: 5, href: '/news'   },

        
      ],
      store,
      isSelected
    }
  },
  methods: {
    selectList(index: number) { 
      
      this.store.commit('handleSelected', index);
    }
  }
})
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/c/font_4392738_nh9bnb6nv4d.css';
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