<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      scrollX:{
        type:Boolean,
        default:false
      },
      pullup: {
        type: Boolean,
        default: false
      },
      pulldown: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        if(this.pulldown) {
          this.pullDownConfig = {
            threshold: 50, // 下拉距离超过30px触发pullingDown事件
            stop: 30 // 回弹停留在距离顶部20px的位置
          }
        }

        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click ,
          scrollX:this.scrollX,
          pullUpLoad: {
            threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
          },
          pullDownRefresh: this.pullDownConfig
        })
        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            this.scrollY = pos.y  
            me.$emit('scroll', pos)
          })
        }
        if (this.pullup) {
          //可用 pullingUp
          this.scroll.on('pullingUp', () => {
            
              this.$emit('scrollToEnd')
              setTimeout(()=>{
                this.scroll.finishPullUp()
              },1000)
            
          })
        }
        if(this.pulldown){
          this.scroll.on('touchEnd', (pos) => {
            if(pos.y > 50){
              this.$emit('reload')
              setTimeout(() => {
                this.scroll.finishPullDown()
              },1000)
            }
          })
        }
        if(this.scrollX) {

        }
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data(n,o) {
        console.log(n,o)
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
