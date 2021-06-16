<template>
  <div>
    <NavBar>
      <div slot="left" class="back" @click="backClick"><img src="~assets/image/common/back.svg" alt=""></div>
      <div slot="center" class="titles">
        <div v-for="(title,index) in titles" :key="index" class="titles-item" :class="{active: currentIndex === index}" @click="titleClick(index)">{{title}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titles{
  display: flex;
  font-size: 12px;
}
.titles-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back img{
  margin: 12px 0 0 10px;
}
</style>