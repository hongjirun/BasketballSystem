<!-- NBA比赛资讯 -->
<template>
  <div id="nba">
    <ul class="newsList">
      <li v-for="item in getNew" :key="item.id">
        <div class="newTitle"><router-link :to="{ name: 'NewsDetailNba', params: { id: item.id } }" >{{ item.title }}</router-link></div>
        <div class="newContent">
          <div class="newImg">
            <router-link :to="{ name: 'NewsDetailNba', params: { id: item.id } }" >
              <img :src="item.img" alt="" width="105px" height="100px">
            </router-link>
          </div>
          <div class="newInfo">
            
            <div class="new" :title="item.content" >
              {{ item.content }}
            </div>
            
            <div class="newTime" >{{ item.time }}</div>

            
          </div>
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from "vuex";
import { getNbaNews } from '../../../api/news';
export default defineComponent({
  setup() {
    const store = useStore();
    const getNew = ref([]); 
    return {
      getNew,
      store
    }
  },
  methods: {
    leagueList() {
      this.store.commit('handleLeague', 0);
    },
  },
  mounted() { 
    getNbaNews().then((res) => {

      this.getNew = res.data;

    });
    this.leagueList();
  }
})
</script>

<style scoped lang="less">
  #nba {
    width: 100%;
    height: 100%;
    .newsList {
      width: 100%;
      height: 100%;
      padding-top: 5px;
      
     
      li {
        width: 100%;
        height: 17%;
        display: flex;
        flex-direction: column;
        padding: 5px;
        border-bottom: 1px solid rgb(208, 207, 207);
        box-sizing: border-box;
        .newTitle {
          width: 100%;
          height: 25%;
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          
          a {
            text-decoration: none;
            color: black;
            font-size: 20px;
            
          }
        }
        .newContent {
          width: 100%;
          height: 75%;
          display: flex;
          flex: 5 5 auto;
          flex-direction: row;
          
          .newImg {
            display: flex;
            flex: 1 1 auto;
            width: 10%;
            height: 100%;
            a{
              width: 100%;
              height: 100%;
              display: inline-block;
              img {
                width: 100%;
                height: 100%;
                display: inline-block;
                border-radius: 15px;
              }
            }
          }
          .newInfo {
            display: flex;
            flex: 45 45 auto;
            width: 90%;
            height: 100%;
            font-size: 18px;
            color: grey;
            flex-direction: column;
            padding-left: 5px;
            .newTime {
              width: 100%;
              height: 24%;
              font-size: 14px;
              padding-top: 10px;
              display: flex;
              align-items: center;
              color: rgb(85, 84, 84);
            }
            .new {
              width: 100%;
              height: 76%;
              font-size: 16px;
              padding: 5px 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 3; /* 设置最大显示行数 */
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              text-indent: 2em;
            }
          }
        }
      }
    }
  }

</style>