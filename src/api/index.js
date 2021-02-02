import axios from '@/axios'
// import api from './api'
export default {
  // 公共接口
  sendMsg: data => { // 发送短信验证码
    return axios(`sendMsg`, data, `get`)
  },
}