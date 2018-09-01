<template>

    <scroll class="wrapper" 
          :data="song"
          ref="wrapper"
    >
        <ul class="wrapper-list">
          <li v-for="i in song">
            {{i}}
          </li>
        </ul>
    </scroll>

</template>

<script>
// @ is an alias to /src
import Scroll from "@/base/scroll";

export default {
  name: "home",
  data(){
    return {
      song:[]
    }
  },
  created(){
      this.probeType = 1
      this.listenScroll = true
      this.touch = {}
      this.listHeight = []
    
  },
  mounted(){
   this.getData()
   this.$refs.wrapper.refresh()
  },
  methods:{
    getData(){
      this.song = [1,2,3,4,5,6,7,8,9,10]
      
    },
  },
  components: {
    Scroll
  }
};
</script>
<style lang="stylus" scoped>
.wrapper
  height 80vh
  overflow hidden
ul li 
  height 80px 
  display block 
</style>

