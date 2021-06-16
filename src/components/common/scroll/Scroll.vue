<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll: null
    }
  },
  mounted(){
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true,//开启点击事件
      probeType:this.probeType,//监听滚动
      pullUpLoad: this.pullUpLoad,//开启上拉加载更多
      // bounce: true,
      // observeImage:true
    })

    // //2.监听滚动的位置
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })
    }

    //3.监听scroll滚动到底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }

    //监听上拉事件
    
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style>
</style>