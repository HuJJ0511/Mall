<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.base-info{
  padding: 0 5px;
}
.info-title{
  font-size: 16px;
  margin-top: 8px;
  color: #000;
  line-height:22px;
}
.info-price{
  position: relative;
  line-height:22px;
  margin-top: 8px;
}
.new-price{
  font-size: 24px;
  color: var(--color-high-text);
}
.old-price{
  margin-left: 8px;
  font-size: 12px;
  color: #ccc;
  text-decoration: line-through;
}
.discount{
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 12px;
  border-radius: 8px;
  position: absolute;
  top: -3px;
  margin-left: 5px;
  padding: 0 5px;
  line-height: 18px;
  text-align: center;
}
.info-other{
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.info-other span{
  font-size: 12px;
  color: #ccc;
}
.info-service{
  display: flex;
  justify-content: space-between;
  line-height: 49px;
  margin-top: 8px;
  border-top: 1px solid rgba(0,0,0,.1);
  border-bottom: 5px solid rgba(100,100,100,.1);
}
.info-service-item{
  display: flex;
  float: left;
  align-items: center;
}
.info-service-item img{
  height: 14px;
  width: 14px;
}
.info-service-item span{
  font-size: 14px;
}
</style>