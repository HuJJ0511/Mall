import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home'
import Category from 'views/category/Category'
import Profile from 'views/profile/Profile'
import Shopcart from 'views/shopcart/Shopcart'
import Detail from 'views/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path : "",
    redirect : '/Home'
  }, 
  {
    path : "/Home",
    component : Home
  }, 
  {
    path : "/Category",
    component : Category
  }, 
  {
    path : "/Shopcart",
    component : Shopcart
  }, 
  {
    path : "/Profile",
    component : Profile
  },
  {
    path : "/Detail/:iid",
    component : Detail
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router