<template>
  <div id="videoContent"  @wheel="handleWheel" ref="container">
    <ul class="video" :style="{ marginTop }" @transitionend="handleTransitionEnd" >
      <li v-for="item in videos">
        <video  ref="videoElement" :src="require(`@/video/${item.video}`)" controls autoplay  ></video>
        <!-- <video :src="item.video" controls></video> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() { 
    const videos = ref([
      
      // { video: 'http://video.699pic.com/videos/75/57/34/a_Y0tPGe1NExbT1682755734.mp4' },
      // { video: 'http://video.699pic.com/videos/14/26/45/b_B6ZGAdIm8TtA1688142645.mp4' },
      // { video: '//video.699pic.com/videos/14/26/45/b_B6ZGAdIm8TtA1688142645.mp4' },
      // { video: '//video.699pic.com/videos/04/82/18/a_mX7H4eWQ7kCv1676048218.mp4' },
      // { video: '//video.699pic.com/videos/75/07/10/a_1wwflj0et1aysuh616757507108393.mp4' },
      // { video: '//video.699pic.com/videos/14/26/45/b_B6ZGAdIm8TtA1688142645.mp4' },
      // { video: 'http://video.699pic.com/videos/75/57/34/a_Y0tPGe1NExbT1682755734.mp4' },
      // { video: 'http://video.699pic.com/videos/14/26/45/b_B6ZGAdIm8TtA1688142645.mp4' },
      // { video: '//video.699pic.com/videos/14/26/45/b_B6ZGAdIm8TtA1688142645.mp4' },
      // { video: '//video.699pic.com/videos/04/82/18/a_mX7H4eWQ7kCv1676048218.mp4' },
      // { video: '//video.699pic.com/videos/75/07/10/a_1wwflj0et1aysuh616757507108393.mp4' },
      // { video: '//video.699pic.com/videos/14/26/45/b_B6ZGAdIm8TtA1688142645.mp4' },
      { video: 'NbaVideo.mp4' },
      { video: 'NbaVideo_2.mp4' },
      { video: 'NbaVideo_3.mp4' },
      

      
      
    ]);
    const containerHeight = ref(0);
    const index = ref(0);
    const switching = ref(false);
    const scrollTimeout = ref(null);
    const scrollDelay = 500; // 设置延迟时间，单位为毫秒
    return {
      videos,
      containerHeight,
      index,
      switching,
      scrollTimeout,
      scrollDelay

    }
  },
  methods: {
    handleWheel(e) { 
      if (this.switching) {
        return
      }

      clearTimeout(this.scrollTimeout); // 清除之前的计时器

      if (e.deltaY < -5 && this.index > 0) {
        const currentVideo = this.$refs.videoElement[this.index];
        currentVideo.pause();
        this.index = this.index - 1;
        
        
      }
      else if (e.deltaY > 5 && this.index < this.videos.length - 1) {
        const currentVideo = this.$refs.videoElement[this.index];
        currentVideo.pause();
        
        this.index = this.index + 1;
        
      }

      this.scrollTimeout = setTimeout(() => {
        
        const currentVideo = this.$refs.videoElement[this.index];
        currentVideo.play();
      }, this.scrollDelay);

      
    },
    controPlay() {
      const currentVideo = this.$refs.videoElement;
      for (let i = 0; i < this.videos.length; i++) { 
        currentVideo[i].pause();
      }
      currentVideo[this.index].play();
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
      console.log(this.containerHeight);
    },
    handleTransitionEnd() {
      this.switching = false
    },
  },
  mounted() { 
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener('resize', this.handleResize);
    this.controPlay();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight *2 + 'px';
    }
  },
})
</script>

<style scoped lang="less">
  #videoContent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 15px;
    background-image: linear-gradient(to bottom,rgb(74, 63, 49),rgb(111,94,70,),rgb(133,126,125,),rgb(133,133,133,),rgb(121,124,130));

    .video {
      width: 80%;
      height: 100%;
      border-radius: 5px;
      list-style: none;
      transition: 1s;
      li {
        width: 100%;
        height: 100%;
        
        
        video {
          object-fit: fill;
          width:100%;
          height:100%;
        }
      }
    }
  }
  
</style>