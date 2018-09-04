<template>
  <div class="pull-up-load">
    <div v-if="flag" class="">
       <img src="../../../src/base/loading/loading.gif" alt="" width="20">
    </div>
    <div v-else>
       释放刷新    
    </div>
  </div>  
</template>
<script>
export default {
    props:{
      flag:{
          type:Boolean,
          default:false,
      }
    },
    created(){

    },
    computed:{

    },
    methods:{

    },
}
</script>
<style lang="stylus">
.pull-up-load
  position fixed
  top -23px
  left 0
  width 100vw
  z-index 999
</style>


