<template>
  <!-- 联系客服弹窗 -->
  <div class="box">
    <van-popup v-model="show" position="bottom" :style="{ height: '3rem' }" >
      <div class="service_box">
        <a :href="`tel:${telPhone}`" class="item">拨打电话 {{telPhone}}</a>
        <div @click="show=false" class="item">取消</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Popup } from 'vant'
export default {
  components: {
    [Popup.name]: Popup,
  },
  data () {
    return {
      show: false,
      telPhone: ''
    }
  },
  created () {
    this.getSysConfig()
  },
  methods: {
    showBox () {
      this.show = true
    },
    getSysConfig () {
      this.fetch.getSysConfig({configId: 1}).then(res => {
        if (res.code === 200) {
          this.telPhone = res.data.telPhone
        } else {
          Toast(res.msg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.box{
  /deep/.van-popup {
    background-color: transparent;
  }
}
.service_box{
  width: 95%;
  position: absolute;
  left: 2.5%;
  bottom: .3rem;
}
.item{
  display: block;
  width: 100%;
  margin-bottom: .3rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background-color: #fff;
  border-radius: .1rem;
  border: 1px solid #eee;
  color: #666;
}
</style>
