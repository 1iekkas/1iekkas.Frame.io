<template>
  <div class="single-list-container">
    <div class="single-list flex"  v-for="item in data">
        <div class="img-wrapper">
          <img :src="item.coverImgUrl" width="100%" alt="">    
        </div>
        <div class="content">
          <p align="left" class="name"><span class="tag">{{item.creator.tag}}</span>{{item.name}}</p>
          <div class="author flex">
            <div class="avatar">
              <img :src="item.creator.avatarUrl" alt="avatar">    
            </div>
            <div class="author-name">
              <p>{{item.creator.nickname}}</p>
            </div>
                
          </div>        
        </div>  
    </div>    
  </div>    
</template>
<script>
export default {
  props:{
      data:{
        type:Array,
        default:null,
      }
  },  
  data(){
    return {
        
    }    
  },
  mounted(){
    this.upload()
  },
  methods:{
    upload(){
      console.log()
      this.$parent.refresh()
    }
  }    
}
</script>
<style lang="stylus" scoped>
.single-list-container
  background #eee
  padding-top 1vh

.single-list
  margin-bottom 1vh
  padding 3vh 2.5vw 1vh 2.5vw
  background white;

.single-list
  .img-wrapper
    margin-right 2.5vw

.single-list
    img    
      display block

.avatar
  img
    width 7vw
    border-radius 50% 

.single-list
  .content
    flex 1

.single-list
  .content
    position relative

.single-list
  .content
    .name 
      font-size 16px
      font-weight bold 

.tag
  color #ff7474
  font-size 10px  
  border 1px solid #ff7474
  margin-right 2vw
  padding 0 3px
  display inline-block
  box-sizing border-box
  vertical-align middle
  margin-top -1vw

.author
  position absolute
  bottom 0 
  left 0
  align-items center

.author-name 
  margin-left 2vw

.img-wrapper
  width 30vw
  height 30vw




</style>