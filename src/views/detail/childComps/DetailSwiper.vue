<template>
    <Swiper class="detail-swiper">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
</template>

<script>
import { Swiper,SwiperItem } from 'components/common/swiper'

export default {
  props:{
    topImages:{
      type: Array,
      defualt(){
        return []
      }
    }
  },
  components:{
    Swiper, 
    SwiperItem
  },
}
</script>

<style>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>