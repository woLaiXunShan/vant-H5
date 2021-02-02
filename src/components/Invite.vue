<template>
  <!-- 分享邀请合并图片弹窗 -->
  <van-overlay :show="show" @click="show=false">
    <div class="wrapper" ref="canvas" @click.stop>
      <!-- <van-icon @click="show=false" name="cross" class="close" /> -->
      <img v-if="imgUrl" class="bg" :src="imgUrl" alt="">
      <template>
        <img v-show="!imgUrl" class="bg" :src="inviteTemplate" alt="">
        <img v-show="!imgUrl" class="code" :src="QRCode" alt="">
      </template>
      <div class="mt30 center fs36 colfff">长按图片发送给好友</div>
    </div>
  </van-overlay>
</template>
<script>
import { Overlay, Icon, Toast } from 'vant'
export default {
  components: {
    [Overlay.name]: Overlay,
    [Icon.name]: Icon,
  },
  data () {
    return {
      show: false,
      imgUrl: '',
      inviteTemplate: '',
      QRCode: '',
      resData: {}
    }
  },
  created () {
    this.resData = this.$store.state.imgResData
  },
  methods: {
    imgCanvas () {
      if (Object.keys(this.resData).length) {
        this.showBox()
      } else {
        this.fetch.productQRCode().then(res => {
          this.$store.commit('IMG_RES_DATA', res)
          this.resData = res
          this.showBox()
        })
      }
    },
    showBox () {
      if (this.resData.code === 200) {
        this.inviteTemplate = this.resData.data.inviteTemplate
        this.QRCode = this.resData.data.QRCode
        this.show = true
        this.$nextTick(() => {
          let that = this
          let width = this.$refs.canvas.offsetWidth * 2
          let height = this.$refs.canvas.offsetHeight * 2
          let canvas= document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          let context = canvas.getContext("2d");
          context.rect(0, 0, canvas.width, canvas.height);
          context.fill();
          let myImage = new Image();
          myImage.crossOrigin = 'Anonymous'
          myImage.src = that.inviteTemplate;
          myImage.onload = function () {
            context.drawImage(myImage, 0, 0, width, height);
            let myImage2 = new Image();
            myImage2.crossOrigin = 'Anonymous'
            myImage2.src = that.QRCode;
            myImage2.onload = function () {
              let x = width * 0.7
              let y = height * 0.82
              let w_ = height / 7
              let h_ = height / 7
              context.drawImage(myImage2, x, y, w_, h_);
              let base64 = canvas.toDataURL("image/png")
              that.imgUrl = base64
            }
          }
        })
      } else {
        Toast(this.resData.msg)
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  position: relative;
  left: 1.25rem;
  top: calc(50% - 4.5rem);
  width: 5rem;
  height: 8rem;
  background-color: #fff;
  position: relative;
  .bg{
    width: 100%;
    height: 100%;
  }
  .code{
    position: absolute;
    bottom: .5rem;
    right: .5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .close{
    position: absolute;
    top: 0;
    right: 0;
    font-size: .4rem;
    background-color: #fff;
  }
}
</style>
