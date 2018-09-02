<template>
  <div class="tabbar">
      <router-link class="tab-item" tag="div" to="/recommend">个性推荐</router-link>
      <router-link class="tab-item" tag="div" to="/radioanchor">主播电台</router-link>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
.tabbar
  height 10vh 
  display flex 
  justify-content center
  align-items center
  background white
  .tab-item
    flex 1
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
      position relative
    &.router-link-exact-active::after
      content ''
      width 20%
      height 1vw
      background #42b983
      position absolute
      bottom -2vw
      left 40%
      border-radius 4px

</style>


