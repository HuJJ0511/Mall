<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-item-left">
        <div class="info-sells">
          <div class="sells-count">
           {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-item-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'score-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shop:{
       type: Object,
       default(){
         return {}
       }
    }
  },
  filters:{
    sellCountFilter(value){
      if(value < 10000) return value;
      return (value/10000).toFixed(2) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info{
  padding: 0 5px;
}
.shop-top{
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.shop-top img{
  height: 55px;
  width: 55px;
}
.shop-top span{
  margin-left:5px;
  font-size: 16px;
}
.shop-middle{
  margin-top: 8px;
}
.shop-middle-item{
  display: flex;
  float: left;
  width:48%;
  line-height: 22px;
}
.shop-middle-item-left{
  text-align: center;
  padding: 10px;
}
.info-sells{
  font-size: 18px;
}
.sells-text{
  font-size: 14px;
}
.info-goods{
  margin-left: 22px;
}
.goods-count{
  font-size: 18px;
}
.goods-text{
  font-size: 14px;
}
.shop-middle-item-right{
  padding: 0 10px;
  font-size: 10px;
  border-left: 1px solid rgba(200, 200, 200, 0.5);
}
table{
  width: 100%;
  border-collapse:separate;
  border-spacing:0px 2px;
}
table td:first-child{
  text-align: center;
}
.score{
  color:rgb(0,128, 0);
}
.score-better{
  color: rgb(255,0,0);
}
.better{
  background-color: rgb(0,128, 0);
  color: #fff;
  width: 10%;
  text-align: center;
  border-radius: 6px;
}
.score-more{
  background-color: rgb(255,0,0);
  color: #fff;
}
.shop-bottom{
  display: inline-block;
  margin-top: 8px;
  height: 44px;
  line-height: 22px;
  width: 100%;
  border-bottom: 5px solid rgba(100, 100, 100, 0.1);
}
.enter-shop{
  width: 30%;
  background-color: rgba(204, 204, 204, 0.3);
  font-size: 14px;
  margin: 0px auto;
  border-radius: 10px;
  text-align: center;
}
</style>