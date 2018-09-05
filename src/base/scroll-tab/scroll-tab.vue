<template>
  <nav class="nav border-hairline-bottom">
      <div class="item" v-for="(item,idx) in nav" :key="idx" :class="{'active':active == idx }" @click="clickItem(idx)">
         <span>{{item.value}}</span>
      </div>
  </nav>    
</template>
<script>
import "@/common/stylus/base.styl"
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
    }     
  },
  created(){
   
  },
  computed:{

  },
  methods:{
    clickItem(index){
      this.$emit('change',index)
    }
  }  
}
</script>
<style lang="stylus" scoped>
.nav
  display block
  white-space nowrap
  height 5vh
  line-height 5vh
  .item
    display inline-block
    width 30vw
    position relative
    &.active
      color red  
      &::after
        content ''
        position absolute
        bottom 2px
        left 25%
        width 50%
        height 3px
        background-color red
        border-radius 5px
        z-index 2
        overflow hidden

</style>

