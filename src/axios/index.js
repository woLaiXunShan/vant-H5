import axios from 'axios'
import qs from 'qs'
import router from '@/router'
import store from '@/store'
// 创建axios实例
let baseURL = process.env.VUE_APP_ENV == 'test' ? 'https://dlradmin.cdyushun.com/api/' : 
              process.env.VUE_APP_ENV == 'prod' ? 'https://dlradmin.cdyushun.com/api/' : 'https://dlradmin.cdyushun.com/api/'
const Axios = axios.create({
  baseURL: baseURL, // 
  // baseURL: '/api', // 代理
  timeout: 15000 // 请求超时时间
})
// 添加请求拦截器
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
    if (config.method == 'post') config.headers['Content-Type'] = 'application/json;charset=utf-8'
    config.headers['token'] = localStorage.token || ''
    return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.data.code === 401) {
    router.push('/Login')
  }
  return response.data
}, error => {
  return Promise.reject(error)
})
// 发起请求
export default (url, data, method = `GET`, file) => {
  data = data || ''
  if (method === `GET` || method === 'get') {
    return Axios.get(url, data.params ? data : {
      params: data
    })
  }
  if (method === 'delete' || method === 'DELETE') {
    return Axios.delete(url, data.params ? data : {
      params: data
    })
  }
  if (method === 'POST' || method === 'post') {
    if (file) {
      return Axios.post(url, data)
    } else {
      return Axios.post(url, data)
    }
  }
  if (method === 'patch' || method === 'PATCH') {
    return Axios.patch(url, qs.stringify(data))
  }
  if (method === 'put' || method === 'PUT') {
    return Axios.put(url, qs.stringify(data))
  }
}
