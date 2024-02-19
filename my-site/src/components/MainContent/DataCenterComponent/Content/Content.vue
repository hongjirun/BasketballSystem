<template>
  <div id="content">
    <!-- 菜单 -->
    <div class="menu">
      <ul class="menuList">
        <!-- NBA -->
        <li v-for="(item,index) in nbaMenuList" :key="index" v-if="isLeague[0].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{active:isMenuDataCenter[index].name}" >{{ item.name }}</router-link>
        </li>
        <!-- CBA -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[1].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[2].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[3].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[4].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[5].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[6].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[7].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[8].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
        <!--  -->
        <li v-for="(item, index) in cbaMenuList" :key="index" v-if="isLeague[9].name">
          <router-link :to="item.href" @click="changeSelect(index)" :class="{ active: isMenuDataCenter[index].name }" >{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <!-- 内容显示 -->
    <div class="contentMain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() { 
    const nbaMenuList = ref([
      { name: '得分', href: '/data/nba/score' },
      { name: '投篮', href: '/data/nba/shoot' },
      { name: '三分', href: '/data/nba/threepoint' },
      { name: '罚球', href: '/data/nba/freethrow' },
      { name: '篮板', href: '/data/nba/backboard' },
      { name: '助攻', href: '/data/nba/assisting' },
      { name: '盖帽', href: '/data/nba/blockshot' },
      { name: '抢断', href: '/data/nba/tackle' },

    ]);
    const cbaMenuList = ref([
      { name: '得分', href: '/data/cba/score' },
      { name: '投篮', href: '/data/cba/shoot' },
      { name: '三分', href: '/data/cba/threepoint' },
      { name: '罚球', href: '/data/cba/freethrow' },
      { name: '篮板', href: '/data/cba/backboard' },
      { name: '助攻', href: '/data/cba/assisting' },
      { name: '盖帽', href: '/data/cba/blockshot' },
      { name: '抢断', href: '/data/cba/tackle' },

    ]);
    const store = useStore();
    const isLeague = computed(()=>store.state.isLeague);
    const isMenuDataCenter = computed(() => store.state.isMenuDataCenter);
    const dataMenuRoute = ref('');
    const getDataMenuRoute = computed(()=>store.state.dataMenuRoute);
    return {
      nbaMenuList,
      cbaMenuList,
      useStore,
      isLeague,
      isMenuDataCenter,
      dataMenuRoute,
      getDataMenuRoute
    }
  },
  methods: {
    changeSelect(index) { 
      this.dataMenuRoute = this.$route.path;
      this.$store.commit('handleDataCenter', index);
      this.$store.commit('changeDataRoute', this.dataMenuRoute);
    },
    changeDataRoute() { 
      
    }
  },
  mounted() { 
    
  }

})
</script>

<style scoped lang="less">
  #content {
    width: 100%;
    height: 100%;
    .menu {
      width: 100%;
      height: 10%;
      
      .menuList {
        width: 100%;
        height: 100%;
        list-style: none;
        display: flex;
        

        li {
          width: 10%;
          height: 100%;
          margin-right: 10px;
          border: 1px solid rgb(180, 179, 179);
          border-radius: 15px;
          
          
          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: black;
            border-radius: 15px;
            &:hover {
              background-color: rgb(186, 186, 186);
              color: white;
            }
            
          }
          .active {
            background-color: rgb(186, 186, 186);
            color: white;
          }
        }
      }
    }
    .contentMain {
      width: 100%;
      height: 90%;
      border-top: 1px solid rgb(184, 184, 184);
      padding-top: 5px;
      overflow: auto;
    }
  }
</style>