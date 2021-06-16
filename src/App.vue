<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>  
    <mianTabBar/>
  </div>
</template>

<script>
  import MianTabBar from 'components/content/mainTabbar/MainTabBar';

  export default {
    name: 'App',
    components: {
      MianTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
