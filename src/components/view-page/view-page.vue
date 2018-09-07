<template>
  <div class="view">
    <component :is="current" :value="current"></component>
  </div>
</template>
<script>
import MV from "@/components/mv/mv"
import Scene from "@/components/scene/scene"
export default {
  props: {
    active: {
      type: Number,
      default: 0
    },
    viewIndex: {
      type: Number,
      default: 0
    },
    current: {
      type: String ,
      default:'MV'
    }
  },
  components:{
    MV,
    Scene
  }  
}
</script>
<style lang="stylus" scoped>

</style>

