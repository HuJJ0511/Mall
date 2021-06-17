<template>
  <div class="shopcart">
    <!--导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品的列表-->
    <scroll class="scroll">
      <cart-list/>
    </scroll>
    <!--底部汇总-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: "shopcart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style scoped>
.shopcart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.scroll{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>