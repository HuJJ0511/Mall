<template>
   <tabbar>
      <tabbarItem path="/Home" activeColor="rgb(255, 87, 119)">
        <img slot="item-icon" src="~assets/image/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/Category" activeColor="rgb(255, 87, 119)">
        <img slot="item-icon" src="~assets/image/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/Shopcart" activeColor="rgb(255, 87, 119)">
        <img slot="item-icon" src="~assets/image/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="/Profile" activeColor="rgb(255, 87, 119)">
        <img slot="item-icon" src="~assets/image/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/image/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/TabBar'
import tabbarItem from 'components/common/tabbar/TabBarItem' 

export default {
    components: {
      tabbar,
      tabbarItem
    }
}
</script>

<style>
  @import '~assets/css/base.css';
</style>