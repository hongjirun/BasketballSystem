<!-- 首页展示球星卡片 -->
<template>
  <div id="card" >
    
    <div class="starImg" v-for="(item,index) in images" :key="item.id"> 
      <router-link :to="{name:'StarInfo',params:{id:item.id}}" ><img :src="item.img" alt=""></router-link>
      <div class="starInfo">
        <h2 class="starTitle">{{ item.name }}</h2>
        <div class="starDescription" :title='item.description'>{{ item.description }}</div>
        <div class="like"  @click="changeLike(item.id-1)">
          <i :class="['iconfont', icon_No]" v-if="!item.like" class="noLike" ></i>
          <i :class="['iconfont', icon_Yes]" v-if="item.like" class="yesLike"></i>
          <i class="total" ref="total">{{ item.total }}</i>
        </div>
      </div>
      
    </div>
    <!-- 名言框 -->
    <div class="sayingCard">
      <SayingCard></SayingCard>
    </div>
    
    
  </div>
 
  
</template>

<script>
import SayingCard from './SayingCard.vue';
import { getStarinfo, putTotal } from "../../../api/starinfo";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() { 
    const store = useStore();
    const loginSuccess = computed(() => store.state.loginSuccess);
    const icon_No = ref('icon-dianzan-No');
    const icon_Yes = ref('icon-dianzan-Yes');
    let images = ref([]);
    const isEenter = ref(false);
    return {
      // images: [
      //   // { img: 'https://img1.baidu.com/it/u=195570063,217520897&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=d63123acffaf1d187de425e2ba8e21a2',title:'杜兰特',description:'NBA球星',total:0,like:false},
      //   // { img: 'https://img2.baidu.com/it/u=1072155908,624046312&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=cb985181ed2a9d5661697a1131df902c', title: '库里', description: 'NBA常规赛MVP,NBA总决赛MVP,四次NBA总冠军,奥运会金牌' , total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1355670630,2095720232&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=f9448b83e1dddf0fb9792e82143b669f', title: '詹姆斯', description: 'NBA球星', total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1006990137,1266272221&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=42fdb1cfcc3658ec2277de30d4862cdf', title: '麦迪', description: 'NBA球星', total: 0, like: false },
      //   // { img: 'https://img2.baidu.com/it/u=245763133,2877013264&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=debc1eabc876e46b5975c6bdeff1c173', title: '姚明', description: 'NBA球星', total: 0 , like: false },
      //   // { img: 'https://img1.baidu.com/it/u=195570063,217520897&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=d63123acffaf1d187de425e2ba8e21a2', title: '杜兰特', description: 'NBA球星' , total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1072155908,624046312&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=cb985181ed2a9d5661697a1131df902c', title: '库里', description: 'NBA球星', total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1355670630,2095720232&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=f9448b83e1dddf0fb9792e82143b669f', title: '詹姆斯', description: 'NBA球星' , total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1006990137,1266272221&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=42fdb1cfcc3658ec2277de30d4862cdf', title: '麦迪', description: 'NBA球星', total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=245763133,2877013264&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=debc1eabc876e46b5975c6bdeff1c173', title: '姚明', description: 'NBA球星' , total: 0 , like: false },
      //   // { img: 'https://img1.baidu.com/it/u=195570063,217520897&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=d63123acffaf1d187de425e2ba8e21a2', title: '杜兰特', description: 'NBA球星' , total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1072155908,624046312&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=cb985181ed2a9d5661697a1131df902c', title: '库里', description: 'NBA球星' , total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1355670630,2095720232&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=f9448b83e1dddf0fb9792e82143b669f', title: '詹姆斯', description: 'NBA球星' , total: 0 , like: false },
      //   // { img: 'https://img2.baidu.com/it/u=1006990137,1266272221&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=42fdb1cfcc3658ec2277de30d4862cdf', title: '麦迪', description: 'NBA球星' , total: 0, like: false },
      //   // { img: 'https://img2.baidu.com/it/u=245763133,2877013264&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1706547600&t=debc1eabc876e46b5975c6bdeff1c173', title: '姚明', description: 'NBA球星' , total: 0, like: false },
      // ],
      icon_No,
      icon_Yes,
      images,
      loginSuccess,
      store,
      isEenter
    }
  },
  components: {
    SayingCard
  },
  methods: { 
    changeLike(i) { 
      
      if (this.loginSuccess === false) {
        this.store.commit('changeLogin', true);

      }
      else { 
        localStorage.setItem('starInfo', JSON.stringify(this.images));
        this.images[i].like = true;
        this.images[i].total = Number(this.images[i].total) + 1;
        if (!JSON.parse(localStorage.getItem('starInfo'))[i].like) { 
          localStorage.setItem('starInfo', JSON.stringify(this.images));
          
        }     
        
        // console.log(JSON.parse(localStorage.getItem('starInfo')));
        let data = {
          name: this.images[i].name,
          total: this.images[i].total
        };
        putTotal(data);
      }
      
    },
    
    
  },
  mounted() { 
    getStarinfo().then((res) => { 
      // console.log(res.data);
      this.images = res.data.data;
      if (JSON.parse(localStorage.getItem('starInfo'))) { 
        for (let i = 0; i < this.images.length; i++) { 
          this.images[i].like = JSON.parse(localStorage.getItem('starInfo'))[i].like;
        }
      }
      
    })
    
  },
  updated() { 
    if (this.loginSuccess === false) {
      for (let i = 0; i < this.images.length; i++) {
        this.images[i].like = false;
      }
    }
    
  }
})
</script>

<style scoped lang="less">
 #card {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 24% 24% 24% 26% ;
  grid-template-rows:  auto;
  grid-template-areas: "a b c d";
  .starImg {
    height: 450px; 
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgb(13, 127, 165);
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: translateY(-5px);
    }
    a {
      width: 100%;
      height: 70%;
      img {
        width: 100%;
        height: 100%; 
        border-radius: 10px;

      }
    }
    
    .starInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      .starTitle{
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
        color: white;
      }
      .starDescription {
        width: 100%;
        font-size: 16px;
        color: #aaaaaa;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 这里设置显示的行数 */
        -webkit-box-orient: vertical;
 
        
      }
      .like {
        margin-top: 10px;
        cursor: pointer;
        .noLike {
          font-size: 30px;
          color: white;
        }
        .yesLike {
          font-size: 30px;
          color: red;
        }
        .total {
          color: white;
          font-size: 20px;
          font-weight: bolder;
          margin-left: 5px;
          cursor: pointer;
        }
      }
    }
  }
  
 
  .sayingCard {
    height: 450px;
    margin: 0 10px 10px 10px;
    grid-area: d;
    
  }
  
} 
 
</style>