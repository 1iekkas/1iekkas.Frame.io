<template>
  <scroll class="wrapper"
    :data="val"
    :listen-scroll="listenScroll"
    :probe-type="probeType"
    @scroll="srcoll"
    ref="wrapper"
  >
    <div class="container" ref="scrollContainer"> 
      <tab-nav :active="current"></tab-nav>
      <div class="scroll-tab"
        ref="s"
        :style="{width:'200%',transform:'translate3d('+ resX +'px,0,0)'}"
        @touchstart="touchStart($event)"
        @touchmove="touchMove"
        @touchend="touchEnd"
      >
        <div :style="{width:'100vw',background:'#ccc'}">555555</div>
        <div :style="{width:'100vw',background:'#000'}">666666</div>
        <div :style="{width:'100vw',background:'#bbb'}">666666</div>
      </div>
    </div>    
  </scroll>
</template>
<script>
import Scroll from "@/base/scroll/scroll"
import tabNav from "@/base/scroll-tab/scroll-tab" 
export default {
    data(){
      return {
        val:[1,2,3,4,5,6,7,8,9,10] , 
        current:0,
        startX:0,
        moveX:0,
        resX:0,  
      }
    },
    created(){
      this.listenScroll = true 
      this.probeType = 3  
      this.$nextTick(() => {
        //计算容器高度 兼容浏览器
        this.$refs.wrapper.$el.style.height = 'calc('+ window.innerHeight +'px - 10vh)'
        //this.$refs.scrollContainer.style.width = `${ this.val.length * window.innerWidth }px`
        this.$refs.wrapper.refresh();  
      })  
      /**
       * scroll-x 变量
      * */  

    },
    computed:{
        
    },
    mounted(){ 
        
    },
    methods:{
      //记录开始位置  
      touchStart(e) {      
        e.preventDefault()
        console.log(e)
        this.moveX = 0 ; 
        this.resX = 0 ;
        //起始位置x
        this.startX = e.changedTouches[0].pageX ;
    
      },
      //记录滑动距离
      touchMove(e) {
        e.preventDefault()
        this.moveX = e.changedTouches[0].pageX ;
        this.resX = this.moveX - this.startX
        console.log(this.resX)
        if(this.current == 0 && this.resX > 0){
            this.resX = 0
            return false
        }
        
      },
      //执行滑动
      touchEnd(e) {
        e.preventDefault()
        if(this.resX > 0){
            console.log('右滑')
        }else{
            console.log('左滑')
        }



      },
      srcoll(pos) {
            
      },
    },
    components:{
      Scroll,
      tabNav
    },
    directives:{
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper
  overflow hidden
.container
    display block
    white-space nowrap
  .item 
    display inline-block
    width 100vw
.scroll-tab
  height 50vh
 
  div
    display inline-block
    width 100vw
    white-space nowrap    
</style>

