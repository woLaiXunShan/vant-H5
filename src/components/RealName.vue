<template>
  <van-popup class="real_name" v-model="checkReal" position="bottom" closeable>
    <p class="real_title tx_c">请先完成实名认证</p>
    <van-form ref="form" validate-first @submit="submitName">
      <van-field
        v-model="agentName"
        name="agentName"
        label="姓名"
        placeholder="请输入姓名"
        maxlength="32"
        input-align="right"
        :rules="[
          { required: true },
          { required: true, validator: validatorName, message: '姓名格式错误' },
        ]"
      />
      <van-field
        v-model="cardNo"
        label="身份证号"
        name="cardNo"
        placeholder="请输入身份证号"
        maxlength="18"
        input-align="right"
        :rules="[
          {
            required: true,
          },
          {
            required: true,
            validator: validatorId,
            message: '身份证号格式错误',
          },
        ]"
      />
      <div class="submit_btn" native-type="submit">
        <van-button round block type="warning" native-type="submit">
          提交</van-button
        >
      </div>
    </van-form>
  </van-popup>
</template>
<script>
import {Toast, field, Popup, Form, Button } from "vant";
export default {
  components: {
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [Form.name]: Form,
    [Button.name]: Button,
    [field.name]: field,
   },
  data() {
    return{
      checkReal: false,
      agentName: '',
      cardNo: null,
    }
  },
  methods: {
    showBox () {
      this.checkReal = true
      this.$refs.form.resetValidation()
    },
    submitName() { // 提交实名认证
      const params  = {
        agentName: this.agentName,
        cardNo: this.cardNo
      }
      this.fetch.realNameAuth(params).then(res => {
        if (res.code === 200) {
            Toast('实名认证成功')
            sessionStorage.agentName = this.agentName
            this.checkReal = false
            this.$emit('init')
            this.$router.push('/SetBankCard')
        } else {
            Toast(res.msg)
        }
      })
    },
    validatorName(val) {
      return this.$check.nameDot(val);
    },
    validatorId(val) {
      return this.$check.idNum(val);
    },
  }
}
</script>
<style lang="scss" scoped>
/deep/.van-button--round{
  background: linear-gradient(180deg, #FF9E5F 0%, #FF7013 100%);
}
/deep/.van-field__error-message{
  text-align: right !important;
}
.real_title{
  margin: 0.4rem auto;
  color: #250909;
  font-size: 0.28rem;
  font-weight: 700;
}
.submit_btn{
  width: 6.7rem;
  height: 0.88rem;
  line-height: 0.88rem;
  background: linear-gradient(180deg, #FF9E5F 0%, #FF7013 100%);
  border-radius: .44rem;
  text-align: center;
  color: #fff;
  margin: .6rem auto 1rem;
}
</style>