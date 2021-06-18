<template>
  <div class="cart-bottom-bar">
    <div class="check-all-content">
      <CheckButton :is-checked="isSelectAll" class="check-all-buttom" @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计：{{totalPrice}}
    </div>

    <div class="calculate">
      去结账({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckButton
  },
  computed:{
    ...mapGetters([
      'cartList'
    ]),
    totalPrice(){
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.realPrice * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods:{
    checkClick(){//全部选中
      if(this.isSelectAll){
        this.cartList.forEach(item => item.checked = false)
      }else{//部份或全部不选中
        this.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar{
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
  font-size: 14px;
}
.check-all-content{
  display: flex;
  align-items: center;
  margin-left: 5px;
  width: 100px;
}
.check-all-buttom{
  height: 22px;
  width: 22px;
  line-height: 20px;
  margin-right: 5px;
}
.price{
  margin-left: 10px;
  flex: 1
}
.calculate{
  width: 90px;
  background-color: red;
  text-align: center;
  color: #fff
}
</style>