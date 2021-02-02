import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getWxUserInfo: 0,
    lastUrl: '',
    lastData: '',
    lastParams: '',
    lastDate: '',
    imgResData: sessionStorage.imgResData ? JSON.parse(sessionStorage.imgResData) : {},
  },
  mutations: {
    GET_WX_USER_INFO: (state) => {
      state.getWxUserInfo += 1
    },
    LAST_URL:(state, res) => {
      state.lastUrl = res
    },
    LAST_DATA:(state, res) => {
      state.lastData = res
    },
    LAST_PARAMS:(state, res) => {
      state.lastParams = res
    },
    LAST_DATE:(state, res) => {
      state.lastDate = res
    },
    IMG_RES_DATA:(state, res) => {
      state.imgResData = res
      sessionStorage.imgResData = JSON.stringify(res)
    },
  },
  actions: {

  }
})
