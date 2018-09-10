<template>
    <div class="swiper">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="item in swiperList">
            <img @load="imgloading" width="100%" :src="item.name" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
</template>
<script>
export default {
    props:{
        swiperList:{
            type:Array,
            default:null
        }
    },
    mounted(){
      
    },
    components:{

    },
    methods:{
      imgloading(){
        this.$emit('imgload')
      }
    }
}
</script>
<style lang="stylus" scoped>
.swiper
  margin-bottom 4vh
  border-radius 3px
.swiper
  img 
    display block
    border-radius 3px  
.van-swipe-item
  border-radius 3px  
.van-swipe
  border-radius 3px            
</style>

