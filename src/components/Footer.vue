<template>
  <div class="footer">
    <van-tabbar v-model="active" route active-color="#ff801a" inactive-color="#cbcfd3">
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icons[0].active : icons[0].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/MakeMoney">
        <span>赚钱</span>
        <template #icon="props">
          <img :src="props.active ? icons[1].active : icons[1].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/Mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icons[2].active : icons[2].inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data () {
    return {
      active: 0,
      icons: [
        {
          active: require(`../images/icon_shouye_1.png`),
          inactive: require(`../images/icon_shouye_2.png`),
        },
        {
          active: require(`../images/icon_zhuan_qian_1.png`),
          inactive: require(`../images/icon_zhuan_qian_2.png`),
        },
        {
          active: require(`../images/icon_wo_de_1.png`),
          inactive: require(`../images/icon_wo_de_2.png`),
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar--fixed{
  border-top: 1px solid #e6e6e6;
}
// .footer{
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding-top: .08rem;
//   display: flex;
//   background-color: #fff;
//   border-top: 1px solid #e6e6e6;
//   z-index: 10;
//   padding-bottom: env(safe-area-inset-bottom);
// }
</style>
