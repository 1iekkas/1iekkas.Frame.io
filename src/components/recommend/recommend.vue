<template>
    <scroll class="wrapper" 
          :data="singleList"
          :listen-scroll="listenScroll"
          :probe-type="probeType"
          :pullup="pullup"
          :pulldown="pulldown"
          ref="wrapper"
          @scroll="scroll"
          @reload="reload"
    >
      <div class="container">
        <transition name="fade">
          <pull-up-load :flag="load" v-if="isReload"></pull-up-load>
        </transition>
        <swiper :swiperList="swiperList" @imgload="loadImage"></swiper>
        <sheet :title="sheetTitle" :data="sheet" @imgload="loadImage"></sheet> 
        <sheet :title="newSongTitle" :data="newSong" @imgload="loadImage"></sheet>  
        <sheet :title="anchorTitle" :data="anchor" @imgload="loadImage"></sheet> 
        <single-list :data="singleList"></single-list>



        <!-- <ul class="wrapper-list">
          <li v-for="song in 10">
            <div class="song-item">
              <div class="img">
              <img @load="loadImage" src="http://p1.music.126.net/tXCIFsVDK6IKcQ9YWxwOEg==/109951163523944497.jpg" alt="thumb">
              </div>    
            </div>     
          </li>
        </ul> -->

      </div>
    </scroll>

</template>

<script>
// @ is an alias to /src
import Scroll from "@/base/scroll/scroll" 
import Swiper from "@/base/swiper/swiper"
import Sheet from "@/components/recommend/sheet"
import SingleList from "@/components/single-list/single-list"
import pullUpLoad from "@/base/pullUpLoad/pullUpLoad"
import "@/common/stylus/base.styl"
export default {
  name: "home",
  data(){
    return {
      songs:[],
      sheet:[],
      sheetTitle:'推荐歌单',
      newSong:[],
      newSongTitle:'最新音乐',
      anchor:[],
      anchorTitle:"主播电台",
      singleList:[],
      swiperList:[],
      isReload:false,
      load:false
    }
  },
  created(){
      this.probeType = 3
      this.listenScroll = true
      this.pullup = false
      this.pulldown = true
      this.$nextTick(() => {
        
        //计算容器高度 兼容浏览器
        this.$refs.wrapper.$el.style.height = 'calc('+ window.innerHeight +'px - 10vh)'
        this.$refs.wrapper.refresh();
      })
  },
  mounted(){
   this.getData()
  },
  methods:{
    getData(){
      /**
       * 登录
       */
      //this.$http.get('http://localhost:3000/login/cellphone?phone=15627795345&password=1iekkas')
      /**
       * 获取推荐歌单
       */
      this.$http.get('/api/data')
        .then((res) => {
            if( res.data.code == '200' ) {  
                this.newSong = res.data.playlists;
            }
        })
        .catch((error) => {
            return false
        })
      /**
       * 获取最新音乐
       */
      this.$http.get('/api/data')
        .then((res) => {
            if( res.data.code == '200' ) {   
                this.sheet = res.data.playlists; 
            }
        })
        .catch((error) => {
            return false
      })  
      /**
       * 获取主播电台
       */
      this.$http.get('/api/data')
        .then((res) => {
            if( res.data.code == '200' ) {   
                this.anchor = res.data.playlists; 
            }
        })
        .catch((error) => {
            return false
      }) 
      /**
       * 获取单曲推荐
       */
      this.$http.get('/api/personalized/song')
        .then((res) => {
            if( res.data.code == '200' ) {  
                this.singleList = res.data.playlists;  
            }
        })
        .catch((error) => {
            return false
      }) 
      /**
       * 获取swiper
       */
      this.$http.get('/api/swiper')
        .then((res) => {
            if( res.data.code == '200' ) {  
                this.swiperList = res.data.swiper;  
            }
        })
        .catch((error) => {
            return false
      }) 
    },
    loadImage() {
        this.$refs.wrapper.refresh()  
    },
    scroll(pos) {
      this.scrollY = pos.y
      if(this.scrollY > 50) {
        this.isReload = true
      }else{
        this.isReload = false
      }

    },
    reload(pos) {
      this.load = true
      //window.location.reload()
      console.log('这是recommend的reload')
      setTimeout(() => {
        this.load = false
      },1000)
    }
  },
  components: {
    Scroll,
    Sheet,
    SingleList,
    Swiper,
    pullUpLoad
  }
};
</script>
<style lang="stylus" scoped>   
.wrapper
  //height 90vh
  overflow hidden
  position relative
.reload
  width 100vw
  position fixed
  top -5vh
  left 0
  z-index 100 
  font-size 12px
.container
  padding-bottom 5vh
ul li 
  display block 
.song-item
  display flex
  .img
    width 30vw 
    img 
      width 100% 
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}  
.swiper
  padding 0 2.5vw
  
.swiper
  img 
     
</style>
