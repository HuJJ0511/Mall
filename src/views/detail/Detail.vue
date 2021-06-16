<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <Scroll class="scroll" ref="scroll" @scroll="contentScroll" :probeType="3">
      <DetailSwiper :topImages="topImages"/>
      <DetailBaseInfo :goods="goods"/>
      <DetailShopInfo :shop="shop"/>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <DetailParamInfo ref="params" :paramInfo="paramInfo"/>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
      <GoodsList ref="recommend" :goods="recommends"/>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"/>
    <DetailBottomBar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop'


import { getDetail,Goods,Shop,GoodsParam,getRecommend } from 'network/detail'
import Scroll from 'components/common/scroll/Scroll'
import { debounce } from 'common/utils'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  data(){
    return{
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: false,
    }
  },
  created(){
    //1.保存传入参数iid
    this.iid = this.$route.params.iid

    //2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      //获取数据
      console.log(res)
      const data = res.result
      //1)获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      //2)获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //3)创建店铺信息
      this.shop = new Shop(data.shopInfo)

      //4)获取商品详情信息
      this.detailInfo = data.detailInfo

      //5)获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //6)获取评论信息
      if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
      }
    })

    //3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    //4.给getThemeTopY赋值(对给this.themeTopYs赋值的操作进行防抖)
    this.getThemeTopY = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs)
    },100)
  },
  mounted(){
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]+44, 500)
    },
    contentScroll(position){
      const positionY = -position.y
      // console.log(positionY);
      for(let i = 0;i <this.themeTopYs.length-1; i++){
        if(this.currentIndex != i && (positionY >= this.themeTopYs[i]-44 && positionY < this.themeTopYs[i+1]-44)){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
        // if(this.currentIndex != i && 
        // ((i != this.themeTopYs.length && 
        // positionY >= this.themeTopYs[i]-44 && positionY < this.themeTopYs[i+1]-44) || 
        // (i === this.themeTopYs.length-1 && positionY >= this.themeTopYs[i]-44))){
        //   this.currentIndex = i;
        //   console.log(this.currentIndex);
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
        this.isShowBackTop = -(position.y) > 1000
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    addToCart(){
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.realPrice = this.goods.realPrice
      product.iid = this.iid

      //2.将商品添加到购物车里
      // this.$store.cartList.push(product)
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product)
    },
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  Z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.scroll{
  height: calc(100% - 44px - 49px);
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>