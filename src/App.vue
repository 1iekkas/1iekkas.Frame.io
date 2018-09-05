<template>
  <div id="app">
    <tabbar></tabbar>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import Tabbar from '@/base/tabbar/tabbar'
export default {
  components:{
    Tabbar
  }
}
</script>

<style lang="stylus">
body,html
  height 100vh
  margin 0 
  font-size 14px
  background white

p
  padding 0
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  width 100vw
  overflow hidden

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
ul
  margin 0
  padding 0
  list-style none      
</style>
