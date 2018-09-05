<template>
  <scroll class="wrapper"
            :data="mvData"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            @scroll="scroll"
            ref="wrapper"
  >
    <div class="child-container">
      <div class="module" v-for="item in mvData" v-bind:key="item.key">
        {{item}}
      </div>    
    </div>
  </scroll>      
</template>
<script>
import Scroll from "@/base/scroll/scroll"
export default {
  props:{
      mvData:{
        type:Array,
        default:null
      }
  },
  created(){
    this.listenScroll = true 
      this.probeType = 3  
      this.$nextTick(() => {
        //计算容器高度 兼容浏览器
        this.$refs.wrapper.$el.style.height = 'calc('+ window.innerHeight +'px - 15vh)'
        //this.$refs.scrollContainer.style.width = `${ this.val.length * window.innerWidth }px`
        //this.$refs.s.style['transition'] = 'move .2s linear'
        this.$refs.wrapper.refresh();  
      })   
  },
  methods:{
    scroll(){

    }
  },
  components:{
    Scroll
  }    
}
</script>
<style lang="stylus" scoped>
.child-container
  padding 2.5vw
  width 95vw
.module
  height 20vh  
</style>
