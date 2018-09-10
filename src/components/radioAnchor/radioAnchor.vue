<template>
    <div class="container" ref="scrollContainer"> 
      <tab-nav ref="nav" :active="current" :nav="nav" @change="change"></tab-nav>
        
          <div class="child">
            <div class="scroll-tab"
              ref="SurveyForm"
              :style="{width:`${ScrollWidth}px`,transform:'translate3d('+ resX +'px,0,0)'}"
              @touchstart="touchStart($event)"
              @touchmove="touchMove($event)"
              @touchend="touchEnd($event)"
            >
              <div v-for="(n , idx) in nav" :key="n.value">
                <m-v v-if="nav[idx].load" :mvData="pageList" :action="action[nav[idx].key]"></m-v>
              </div>
            </div>  
          </div>  
        
    </div>    
</template>
<script>

import MV from "@/components/mv/mv"
import Scene from "@/components/scene/scene"
import tabNav from "@/base/scroll-tab/scroll-tab" 
let action = {
  mv: '/api/mv',
  scene: '/api/scene',
  dance: '/api/dance',  
}
export default {
  data(){
    return {
      nav:[{
        index:0,
        key:'mv',
        value:'MV',
        load:true
      },{
        index:1,
        key:'scene',
        value:'现场',
        load:false
      },{
        index:2,
        key:'mv',
        value:'舞蹈',
        load:false
      },{
        index:3,
        key:'mv',
        value:'翻唱',
        load:false
      },{
        index:4,
        key:'mv',
        value:'ACG',
        load:false
      },{
        index:5,
        key:'mv',
        value:'电子',
        load:false
      },{
        index:6,
        key:'mv',
        value:'演奏',
        load:false
      }] ,
      action: action ,
      pageList:[] ,
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
      startY:0,
      moveX:0,
      moveY:0,
      srcollX:0,
      srcollY:0,
      resX:0,  
      listenData:[],
    }
  },
  created(){
    this.ScrollWidth = window.innerWidth * this.nav.length
    this.$nextTick(() => {
      this.$refs.SurveyForm.style['transition'] = 'all .3s linear '
    })
  },
  computed:{
      
  },
  mounted(){ 
      
  },
  watch:{
    current(news , old){
      if(news > this.nav.length) {
        return false
      }else{
        this.listenData = []
        this.resX = - news * window.innerWidth 
        this.nav[news].load = true
        this.$refs.nav.clickItem(news)
      }
        
    }
  },
  methods:{
    //记录开始位置  
    touchStart(e) {      
      //e.stopPropagation()
      this.moveX = 0 
      this.moveY = 0
      this.startX = e.changedTouches[0].pageX 
      this.startY = e.changedTouches[0].pageY
  
    },
    //记录滑动距离
    touchMove(e) {
      //e.stopPropagation()
      this.moveX = e.changedTouches[0].pageX 
      this.moveY = e.changedTouches[0].pageY
      this.srcollX = this.moveX - this.startX 
      this.srcollY = this.moveY - this.startY

      if(Math.abs(this.srcollY) > Math.abs(this.srcollX)){
        return false
      }else{
        if(Math.abs(this.srcollX) > 70){
        if( this.current == 0 ) {
          if( this.srcollX > 0 ) {
            return false
          }else{
            this.resX = this.srcollX 
          }
        }else if(this.current == this.nav.length - 1){
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
      }else{
          this.resX = - this.current * window.innerWidth
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