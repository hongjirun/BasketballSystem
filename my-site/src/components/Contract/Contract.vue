<!-- 显示界面联赛菜单收缩框 -->
<template>
  <div id="contract">
    <div class="contractHeader">
      <div class="title" ref="titleList">联赛选择列表</div>
      <div class="svg" >
        <i v-show="contract" class="iconfont icon-shousuo" title="收缩" @click="shrink()"></i>
        <i v-show="!contract" class="iconfont icon-zhankai" title="展开" @click="expand()"></i>

      </div>
    </div>
    <div class="contractList">
      <ul>
        <li  v-for="(item,index) in league" :key="item.item" :class="{ isSelected:isLeague[item.item].name}" @click="isSelectLeague(item.item)">
          <router-link v-show="num===1" :to="`/news${item.href}`">{{ item.name }} <span v-show="contract">({{ item.country }})</span></router-link>
          <router-link v-show="num===2" :to="`/ranking${item.href}`">{{ item.name }} <span v-show="contract">({{ item.country }})</span></router-link>
          <router-link v-show="num===3" :to="`/data${item.href}`">{{ item.name }} <span v-show="contract">({{ item.country }})</span></router-link>
          
        </li>
      </ul>

    </div>
    
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,ref, defineEmits,defineProps } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  setup(props) { 
    const store = useStore();
    const isLeague = computed(() => store.state.isLeague);
    const contract = ref(true); // 创建响应式引用
    const emits = defineEmits(['isShrink', 'isExpand']);
    const currentRoute = ref('');
    const dataMenuRoute = ref('');
    
    
    return {
      
      // 联赛名字
      league: [
        { name: 'NBA', country: '美国',item:0,href:'/nba' },
        { name: 'CBA', country: '中国',item:1, href: '/cba' },
        { name: 'ACB', country: '西班牙', item: 2, href: '/nba'  },
        { name: 'BSL', country: '土耳其', item: 3 , href: '/nba' },
        { name: 'VTB', country: '俄罗斯', item: 4 , href: '/nba' },
        { name: 'LSA', country: '意大利', item: 5 , href: '/nba' },
        { name: 'LNB', country: '法国', item: 6 , href: '/nba' },
        { name: 'NBB', country: '巴西', item: 7 , href: '/nba' },
        { name: 'NBL', country: '澳大利亚', item: 8 , href: '/nba' },
        { name: 'BLG', country: '希腊', item: 9, href: '/nba'  },

        
      ],
      store,
      isLeague,
      contract,
      emits,
      currentRoute,
      dataMenuRoute
    }
  },
  props: {
    num: {
      type:Number
    },
    contractMenu: {
      type:Object
    
    },
  },
  mounted() { 
    
    
    
    
  },
  methods: {
    isSelectLeague(index: number) { 
      this.currentRoute = this.$route.path; 
      this.dataMenuRoute = this.$route.path;
      
      this.store.commit('handleLeague', index);
      this.store.commit('changeRoute', this.currentRoute);
      this.store.commit('changeDataRoute', this.dataMenuRoute);
      this.store.commit('clickSelected', true);
      this.store.commit('handleDataCenter', 0);
    },
    // 缩小函数
    shrink() { 
      this.contract = false;
      const num_1 = 6;
      this.$emit('isShrink', num_1);
      const titleList = this.$refs.titleList as HTMLElement;
      titleList.innerHTML = '联赛';

      
    },
    // 展开函数
    expand() { 
      this.contract = true;
      const num_2 = 12;
      this.$emit('isExpand', num_2);
      const titleList = this.$refs.titleList as HTMLElement;
      titleList.innerHTML = '联赛选择列表';
    }
  }
})
</script>

<style scoped lang="less">
  #contract {
    width: 100%;
    
    display: flex;
    flex-direction: column;
    padding: 10px 5px 5px 5px;
   
    .contractHeader {
      width: 100%;
      height: 5%;
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      
      
      .title {
        font-size: 16px;
        font-weight: bolder;
        color: grey;
        margin-right: 11px;
      }
      .svg {
        font-size: 16px;
        i {
          color: grey;
          cursor: pointer;
        }
      }
    }
    .contractList {
      width: 100%;
      overflow: auto;
      display: flex; 
      flex-direction: column;
      padding-right: 5px;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        
        
        li {
          font-size: 20px;
          margin-bottom: 15px;
          
          border-radius: 15px;
          cursor: pointer;
          &:hover {
            background-color: grey;
          }
          a {
            display: inline-block; /**为了能够让a标签占满li标签，覆盖点击命中范围 */
            width: 100%;
            padding: 10px 0 10px 5px;
            text-decoration: none;
            color: white;
          }
        }
        .isSelected {
          background-color: grey;
        }
      }
    }
  }

</style>