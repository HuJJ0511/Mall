import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//安装Vuex
Vue.use(Vuex)

//创建store对象
const store = new Vuex.Store({
  state:{
    cartList: []
  },
  mutations,
  actions,
  getters
})

//挂载Vue实例
export default store