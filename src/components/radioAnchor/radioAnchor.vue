<template>
    <div class="container" ref="scrollContainer"> 
      <tab-nav :active="current" :nav="nav" @change="change"></tab-nav>
        
          <div class="child">
            <div class="scroll-tab"
              ref="s"
              :style="{width:`${ScrollWidth}px`,transform:'translate3d('+ resX +'px,0,0)'}"
              @touchstart="touchStart($event)"
              @touchmove="touchMove($event)"
              @touchend="touchEnd($event)"
            >
              <div v-for="(n,idx) in nav">
                
              </div>
            </div>  
          </div>  
        
    </div>    
</template>
<script>

import MV from "@/components/mv/mv"
import Scene from "@/components/scene/scene"
import tabNav from "@/base/scroll-tab/scroll-tab" 
export default {
  data(){
    return {
      nav:[{
        index:0,
        key:'mv',
        value:'MV'
      },{
        index:1,
        key:'scene',
        value:'现场'
      },{
        index:2,
        key:'dance',
        value:'舞蹈'
      }] ,
      pageList:{
        mv:[1,2,3,4,],
        scene:[1,2,3,4,5,6,7,8],
        dance:[1,2,3,4,5,6,7,8,9,10],
      } ,
      /**
       * @ current  当前活动tab
       * @ startX  起始位置
       * @ moveX  平移距离
       * @ scrollX 屏幕滑动距离
       * @ resX  元素滑动距离
       * 
       */
      current:0,
      startX:0,
      moveX:0,
      srcollX:0,
      resX:0,  
      listenData:[],
    }
  },
  created(){
    this.ScrollWidth = window.innerWidth * 3
    this.$nextTick(() => {
      this.$refs.s.style['transition'] = 'all .3s linear '
    })
  },
  computed:{
      
  },
  mounted(){ 
      
  },
  watch:{
    current(news , old){
      if(news > 2) {
        return false
      }else{
        this.listenData = []
        this.resX = - news * window.innerWidth 

      }
        
    }
  },
  methods:{
    //记录开始位置  
    touchStart(e) {      
      //e.stopPropagation()
      this.moveX = 0 
      this.startX = e.changedTouches[0].pageX 
  
    },
    //记录滑动距离
    touchMove(e) {
      //e.stopPropagation()
      this.moveX = e.changedTouches[0].pageX 
      this.srcollX = this.moveX - this.startX 
      
      if(Math.abs(this.srcollX) > 70){
        console.log('1')
        if( this.current == 0 ) {
          if( this.srcollX > 0 ) {
            return false
          }else{
            this.resX = this.srcollX 
          }
        }else if(this.current == 2){
          //console.log(this.srcollX)
            if( this.srcollX < 0 ) {
              return false
            }else{
              this.resX = -this.current * window.innerWidth + this.srcollX
            }
        }else{
          this.resX = -this.current * window.innerWidth + this.srcollX
        }
      }
      
      
      
    },
      //执行滑动
    touchEnd(e) {
      //e.stopPropagation()
      if(Math.abs(this.srcollX) > 70){
         if( this.resX  <  - this.current * window.innerWidth - 150  ) {
            this.current = this.current + 1 
            this.resX = - this.current * window.innerWidth
          }else if( this.resX > - this.current * window.innerWidth + 150){
            this.current = this.current - 1 
            this.resX = - this.current * window.innerWidth
          }else{
            this.resX = - this.current * window.innerWidth
          }
      }
     
    },
    change(index) {
      this.current = index 
    }
  },
  components: {
    tabNav,
    MV,
    Scene
  }
};
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
  display flex
  overflow hidden
  justify-content flex-start
  .child-container
  .wrapper
    display inline-block
    white-space nowrap
</style>