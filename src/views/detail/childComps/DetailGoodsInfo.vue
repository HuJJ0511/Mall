<template>
  <div id="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      counter: 0,
      imagesLength: 0
    }
  },
  props:{
    detailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      if(++this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      //获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
#goods-info{
  /* padding: 0 ; */
}
.info-desc{
  padding: 15px
}
.desc{
  margin: 20px 10px;
  font-size: 14px;
}
.start{
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #000;
}
.start::before{
  content:'';
  height: 5px;
  width: 5px;
  background-color: #000;
  position: absolute;
}
.end{
  position: relative;
  float: right;
  width: 90px;
  height: 1px;
  background-color: #000;
}
.end::after{
  position: absolute;
  right: 0;
  content: '';
  height: 5px;
  width: 5px;
  background-color: #000;
  bottom: 0;
}
.info-key{
  padding: 10px;
  color: #000;
}
img{
  height: 100%;
  width: 100%;
}
</style>