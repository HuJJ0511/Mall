<template>
  <div class="shopcart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <scroll class="scroll">
      <cart-list/>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childComps/CartList'

import { mapGetters } from 'vuex'

export default {
  name: "shopcart",
  components: {
    NavBar,
    CartList,
    Scroll
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
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>