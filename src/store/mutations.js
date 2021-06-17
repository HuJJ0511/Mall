import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default{
  //mutations唯一的目的就是修改state中的状态，每个方法尽量单一
  //payload新添加的商品
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }    
}