<template>
  <div class="sheet-container">
    <h4>{{title}}<van-icon name="arrow"></van-icon></h4>
    <div class="sheet">
      <div class="item" v-for="item in data">
        <div>
          <img @load="imgloading" :src="item.coverImgUrl"  width="100%" alt="">    
        </div>
        <div class="desc">
          <p align="left" class="cut-text-2">{{item.name}}</p>        
        </div>  
      </div>
    </div>    
  </div>    
</template>
<script>
export default {
  props:{
      title:{
        type:String,
        default:''
      },
      data:{
        type:Array,
        default:null,
      }
  },  
  mounted(){
    
  },
  data(){
    return {
        
    }    
  },
  methods:{
    imgloading(){
      this.$emit('imgload')
    }
  }    
}
</script>
<style lang="stylus" scoped>
.sheet-container
 margin-bottom 4vh
 padding: 0 2.5vw
 background white
h4
 margin 0
 font-size 16px
 font-weight bold
 text-align left 
 margin-bottom 2vh

.sheet-container 
  .van-icon
    font-size 12px
    margin-left 1vw

.sheet
  width calc(100vw - 5vw)
  display flex
  flex-flow row
  flex-wrap wrap

.item
  width 31vw
  margin-bottom 1vw
  color black

.item:nth-child(3n-1)
  margin 0 1vw 2vw 1vw

.item
   img 
    display block
    border-radius 4px

.item
  .desc
   font-size 13px
   padding 1vw
   line-height 17px


</style>


