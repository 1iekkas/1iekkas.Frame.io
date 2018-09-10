<template>
    <scroll class="wrapper"
            :data="nav"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            :pulldown = "pulldown"
            :pullup = "pullup"
            :scrollX = "scrollX"
            ref="wrapper"
  >
    <nav class="nav border-hairline-bottom" ref="nav">
        <div class="item" v-for="(item,idx) in nav" :key="idx" :class="{'active':active == idx }" @click="clickItem(idx)">
          <span>{{item.value}}</span>
        </div>
    </nav>
  </scroll>    
</template>
<script>
import "@/common/stylus/base.styl"
import Scroll from "@/base/scroll/scroll"
export default {
  props:{
    active:{
        type:Number,
        default:0
    },
    nav:{
      type:Array,
      default:null,
    }
  },
  data(){
    return {
      width:0 
    }     
  },
  created(){
    this.listenScroll = true 
    this.pulldown = false
    this.pullup = true
    this.scrollX = true
    this.probeType = 3  
    setTimeout(() => {
        this.$nextTick(() => {
          //计算容器高度 兼容浏览器
          //this.$refs.wrapper.$el.style.height = 'calc('+ window.innerHeight +'px - 16vh)'
          //this.$refs.scrollContainer.style.width = `${ this.val.length * window.innerWidth }px`
          //this.$refs.s.style['transition'] = 'move .2s linear'
          this.width = 0 
          for (let i = 0; i < this.$refs.nav.children.length; i++) {
            this.width += this.$refs.nav.children[i].clientWidth
          }
          this.$refs.nav.style.width = this.width + 'px'
          this.$refs.wrapper.refresh();
           this.$on('test', function(){
            console.log('something handled!');
          });  
        }) 
    },500)
  },
  computed:{

  },
  methods:{
    clickItem(index){
      this.$emit('change',index)
      this.$refs.wrapper.scrollToElement(this.$refs.nav.children[index], 1000, true, true)
    },
    test() {
      alert('1')
    }
  },
  components: {
    Scroll
  }  
}
</script>
<style lang="stylus" scoped>
.wrapper
  width 100vw
.nav
  display block
  white-space nowrap
  height 6vh
  line-height 6vh
  .item
    display inline-block
    width 30vw
    position relative
    &.active
      color #d20808
      font-size: 16px
      transition all .1s linear
      &::after
        content ''
        position absolute
        bottom 2px
        left 25%
        width 50%
        height 3px
        background-color #d20808
        border-radius 5px
        z-index 2
        overflow hidden

</style>

