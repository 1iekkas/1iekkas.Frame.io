<template>
  <scroll class="wrapper"
            :data="mvData"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            :pulldown = "pulldown"
            :pullup = "pullup"
            @scroll="scroll"
            @scrollToEnd="scrollToEnd"
            ref="wrapper"
  >
    <div class="child-container">
      <div class="module" v-for="item in mvData" v-bind:key="item.key">
        <div class="img-container">
          <img :src="item.coverImgUrl" alt="" width="100%" height="100%">
        </div>
        <div class="name-container border-hairline-bottom">
          {{item.name}}
        </div>
        <div class="creator-container flex">
          <div class="avatar"><img :src="item.creator.avatarUrl" alt=""></div>
          <div class="author-name"><p>{{item.creator.nickname}}</p></div>
        </div>
      </div> 
      <loading v-show="show"></loading>   
    </div>
  </scroll>      
</template>
<script>
import Scroll from "@/base/scroll/scroll"
import Loading from "@/base/loading/loading"
export default {
  props:{
      action: {
        type: String,
        default: '',
      },
      srcollBoxHeight: {
        type: String ,
        default: ''
      }
  },
  data() {
    return {
      mvData: [],
      show:true
    }
  },
  created(){
    this.listenScroll = true 
    this.pulldown = false
    this.pullup = true
    this.probeType = 3  
    setTimeout(() => {
      this.getData()
        this.$nextTick(() => {
          //计算容器高度 兼容浏览器
          this.$refs.wrapper.$el.style.height = `calc(100vh - 16vh)`
          //this.$refs.scrollContainer.style.width = `${ this.val.length * window.innerWidth }px`
          //this.$refs.s.style['transition'] = 'move .2s linear'
          this.$refs.wrapper.refresh();  
        }) 
    },500)
  },
  mounted(){

  },
  methods:{
    getData() {
      this.$http.get(this.action)
        .then((res) => {
          this.show = false
            if( res.data.code == '200' ) {   
              this.mvData = res.data.playlists;  
            }
        })
        .catch((error) => {
            return false
      }) 
    },
    scroll(pos){
      this.$emit('goTop',pos)
    },
    reload(){
      console.log('reload')
    },
    scrollToEnd() {
      this.show = true
      setTimeout(()=>{
        this.$refs.wrapper.refresh();  
        this.show = false
      },1000)
    }
  },
  components:{
    Scroll,
    Loading
  }    
}
</script>
<style lang="stylus" scoped>
.child-container
  padding 2.5vw 2.5vw 5vh 2.5vw 
  width 95vw
  background white
.module
  margin-bottom 2vh
.img-container
  height 40vh 
  img 
    object-fit cover
    border-radius 6px
.name-container
  padding 2.5vw 0
  text-align left
  font-size 15px
  white-space normal
  font-weight bold
.creator-container
  padding 2.5vw 0
  align-items: center;  
  .avatar
    img
      width 7vw
      border-radius 50%
  .author-name
    margin-left 2vw
    font-size 14px      
</style>

