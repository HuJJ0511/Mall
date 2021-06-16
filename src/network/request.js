import axios from 'axios'

export function request(config){
  //1.创建axios的实例
  const baseUrl = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',//基本路径
    timeout:5000//超时
  })

  //2.axios的拦截器
  //2.1.请求拦截的作用
  baseUrl.interceptors.request.use(config => {
    return config
  },err =>{

  })

  //2.2.响应拦截
  baseUrl.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })

  return baseUrl(config)
}