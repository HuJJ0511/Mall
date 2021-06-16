<template>
  <div id="home">
      <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
      <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabControl"/>
      
      <Scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
        <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
        <RecommendView :recommends="recommends"/>
        <FeatureView/>
        <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"/>
        <GoodsList :goods="showGoods"/>
      </Scroll>

      <BackTop @click.native="backClick" v-show="isShowBackTop"/>
      
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import { getHomeMultidata,getHomeGoods } from 'network/home'
import { debounce } from 'common/utils'

export default {
  components:{
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabControl : false,
      saveY:0
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    //1.请求多个数据
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    //1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.$bus.$on('itemImageLoad',() => {
      refresh()
    })
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,1);
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
    // console.log(this.$refs.scroll.scroll.y);
  },
  methods:{
    //监听事件请求
    tabClick(index){
      switch(index){
        case 0: 
          this.currentType = "pop"
          break;
        case 1: 
          this.currentType = "new"
          break;
        case 2: 
          this.currentType = "sell"
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

      console.log(this.$refs.scroll.scroll.y)
      console.log((this.tabOffsetTop)-44);
      // this.$refs.scroll.scroll.y = (this.tabOffsetTop)-44
      console.log(this.$refs.scroll.scroll.y)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      //1.判断BackTop是否显示
      this.isShowBackTop = -(position.y) > 1000

      //2.决定tabControl是否吸顶(position: fixed)
      this.isTabControl = -(position.y) > (this.tabOffsetTop)-44
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    //获取tabControl的offsetTop
    //所有的组件都有一个属性$el：用于获取组件中的元素
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    //网络数据请求
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
  
}
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .tab-control{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .scroll{
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>