<template>
  <nav class="nav">
      <div class="item" v-for="(item,idx) in 3" :key="idx">
         <span :class="{'active':active == idx }">{{item}}</span>
      </div>
  </nav>    
</template>
<script>
export default {
  props:{
    active:{
        type:Number,
        default:0
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

  }  
}
</script>
<style lang="stylus" scoped>
.nav
  display block
  white-space nowrap
  .item
    display inline-block
    width 30vw
  .item .active
    color red  
</style>

