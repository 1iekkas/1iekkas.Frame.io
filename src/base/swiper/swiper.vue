<template>
    <div class="swiper">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="item in swiperList">
            <img width="100%" :src="item" alt="">
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
    components:{

    }
}
</script>
<style lang="stylus" scoped>
.swiper
  margin-bottom 4vh
.swiper
  img 
    display block
</style>

