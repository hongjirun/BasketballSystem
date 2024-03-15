<!-- 首页球星名言流动框 -->
<template>
  <div id="sayingcard" @mouseenter="handleMouseEnter()" @mouseleave="handleMouseLeave()" >
    <div class="content" >
      <div class="title">经典名言</div>
      <div class="body">
        <ul ref="quotelist" :style="{ animationPlayState: hover ? 'paused' : 'running' }">
          <li v-for="(item, index) in quotes" :key="item.id"><i :class="['iconfont',orders[index].order]">.</i>{{ item.saying }}<span class="line">--</span><span class="starName">{{ item.name }}</span></li>
        </ul>
      </div>
      
    </div>

  </div>
</template>

<script>
import { getSaying } from "../../../api/saying";
export default {
  data() { 
    return {
      quotes: [
        // { quote: '只要能教我打球，用哪都行 -姚明' },
        // { quote: '篮球，也许你认为这只是一场运动，但我把它当成空气，我每天的呼吸都要靠它，这就是篮球的意义。篮球是生命 -加内特。' },
        // { quote: '我不知道需要多长时间才能取得辉煌，我只是想尽我所能去成为最出色的篮球运动员。——科比' },
        // { quote: '我永远热爱篮球这项运动，即使将来我老了，不能再打篮球了，但是我对篮球的爱依然是执迷不悔的！——乔丹。' },
        // { quote: '在奋斗过程中，我学会了怎样打球。我想那就是作为职业球员的全部。你明白了你不可能每晚都打得很好，但你不停的奋斗会有好事到来的。——科比' },
        // { quote: '只有付出足够的努力，你才能成就伟大。- 迈克尔·乔丹' },
        // { quote: '篮球比赛就像人生一样，你必须有目标并不断努力追求。- 勒布朗·詹姆斯' },
        // { quote: '天赋可以让你起步，但只有努力才能让你坚持并取得成功。- 科比·布莱恩特' },
        // { quote: '在比赛中，永远不要低估自己的能力。- 凯文·杜兰特' },
        // { quote: '无论你身高如何，只要你有梦想，就能在篮球场上展现自己的价值。- 姚明' },
        // { quote: '篮球是一种团队运动，成功需要整个团队的合作。 - 史蒂芬·库里' },
        // { quote: '在比赛中你会遇到挑战，但不要害怕失败，从失败中学习并变得更强大。- 韦德·韦德' },
        // { quote: '成功不是终点，而是一个漫长的旅程。- 蒂姆·邓肯' },
        // { quote: '篮球不仅是一项技术活动，也是一种思维方式。- 克里斯·保罗' },
        // { quote: '篮球场上没有捷径，只有通过坚持和努力才能获得回报。- 卡梅罗·安东尼' },
        // { quote: '无论你是赢家还是输家，都要保持谦逊并尊重对手。- 克里斯蒂安·拉塞尔' },
        // { quote: '在比赛中要有信心，相信自己的能力，然后努力去实现。- 凯文·加内特' },
        // { quote: '不管你面临多大的压力，都要保持冷静，并做出明智的决策。- 彼得·马利' },
        // { quote: '篮球是一种艺术，你可以通过球场上的动作表达自己的情感。- 沙奎尔·奥尼尔' },
        // { quote: '篮球教会了我如何在失败中找到动力，继续努力。- 威尔特·张伯伦' },
        // { quote: '在比赛中，胜利需要付出额外的努力和毅力。- 斯蒂夫·纳什' },
        // { quote: '篮球是一种热爱，它可以激发你内心的激情和动力。- 马吉克·约翰逊' },
        // { quote: '不要在困难面前退缩，相信自己，坚持到最后。- 詹姆斯·哈登' },
        // { quote: '篮球是一项技术活动，但更重要的是你对比赛的理解和智慧。- 拉里·伯德' },
        // { quote: '篮球场上的每一刻都是一个机会去证明自己。- 克雷·汤普森' },
        // { quote: '只要你愿意付出努力，你就能在任何地方学会打篮球。" - 姚明' },
        // { quote: '篮球教会了我如何克服困难，永不放弃的精神。- 蒂姆·哈达威' },
        // { quote: '在篮球场上，你必须有耐心和专注力来做出正确的决策。- 阿尔霍·奎斯特' },
        // { quote: '篮球是一种快节奏、充满激情的运动，让人充满活力。- 杰森·基德' },
        
        
        
      ],
      orders: [
        { order: 'icon-shuzi1' },
        { order: 'icon-shuzi2' },
        { order: 'icon-shuzi3' },
        { order: 'icon-shuzi4' },
        { order: 'icon-shuzi5' },
        { order: 'icon-shuzi6' },
        { order: 'icon-shuzi7' },
        { order: 'icon-shuzi8' },
        { order: 'icon-shuzi9' },
        { order: 'icon-shuzi10' },
        { order: 'icon-shuzi11' },
        { order: 'icon-shuzi12' },
        { order: 'icon-shuzi13' },
        { order: 'icon-shuzi14' },
        { order: 'icon-shuzi15' },
        
      ],
      interval: null,
      hover:false
    }
  },
  methods: {
    handleMouseEnter() { 
      this.hover = true;
      this.stopScrolling();
    },
    handleMouseLeave() { 
      this.hover = false;
      this.startScrolling();
    },
    startScrolling() { 
      const quoteList = this.$refs.quotelist;
      // quoteList.innerHTML = `
      // #myElement {
      //   overflow:hidden;
      // }`
      if (this.quotes.length > 0) { 
        this.interval = setInterval(() => {
          const firstQuote = quoteList.querySelector("li:first-child");
          quoteList.appendChild(firstQuote);
        }, 5000); // 每3秒滚动一次，可根据需要调整时间间隔
      }
    },
    stopScrolling() { 
      clearInterval(this.interval);
      // const quoteList = this.$refs.quotelist;
      // quoteList.innerHTML = `
      // #myElement {
      //   overflow:auto;
      // }`
      
    }
  },
  mounted() { 
    getSaying().then((res) => {
      console.log(res.data.data);
      this.quotes = res.data.data;
      
    });
    this.startScrolling();
  },
  destroyed() { 
    this.stopScrolling();
  }
}
</script>

<style lang="less" scoped>
  #sayingcard {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 10px 0px 10px rgb(236, 208, 96),-10px 0px 10px rgb(180, 0, 250),0 5px 10px rgb(236, 208, 96),0 -10px 10px rgb(236, 208, 96);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .content {
      width: 90%;
      height: 100%;
      .title {
        width: 100%;
        height: 8%;
        color: rgb(180, 0, 250);
        font-size: 24px;
        font-weight: bolder;
        text-align: center;
        
      }
      .body {
        width: 100%;
        height: 92%;
        overflow: hidden;
        ul {
          
          list-style: none;
          animation: scroll-quote 100s  linear infinite;
          li {
            margin-top: 5px;
            color: rgb(208, 208, 102);
            margin-top: 10px;
            font-size: 20px;
            i {
              color: purple;
              font-size: 20px;
              margin-right: 5px;
            }
            .line {
              color: purple;
              margin: 0 5px;
              font-weight: bolder;
            }
            .starName {
              color: white;
              font-family:'Courier New', Courier, monospace;
            }
          }
        }
        @keyframes scroll-quote {
          0%{
            transform: translateY(0);
          }
          100%{
            transform: translateY(-100%);
          }
        }
      }
      
      
    }
    
  }
</style>