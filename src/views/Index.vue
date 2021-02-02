<template>
  <div class="p30 pb100">
    123
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created () {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.banner {
  height: 3.06rem;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-bottom: 0.4rem;
  .my-swipe {
    height: 100%;
  }
  .banner_img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
  }
}
.popular_product{
  font-weight: 600;
  color: #333333;
  img{
    width: .24rem;
    height: .24rem;
    margin-right: .12rem;
  }
}
.pro_item{
  background-color: #fff;
  margin-top: .24rem;
  box-shadow: 0 .2rem .3rem 0 rgba(35,29,58,0.05);
  color: #999;
  border-radius: .1rem;
  .pro_describe{
    padding: 0 .2rem;
    height: .64rem;
    line-height: .64rem;
  }
  .pro_info_box{
    padding: .3rem .2rem .1rem;
    border-bottom: 1px solid #eee;
  }
  .pro_name{
    font-weight: 500;
    color: #333;
    font-size: .32rem;
    height: .32rem;
    line-height: .32rem;
  }
  .pro_icon{
    width: .9rem;
    height: .9rem;
    border-radius: .16rem;
    margin-right: .16rem;
    border: 1px solid #f1f1f1;
    padding: .15rem;
    box-sizing: border-box;
  }
  .pro_tags{
    margin-top: .1rem;
    span{
      border-radius: .08rem;
      font-size: .22rem;
      font-weight: 500;
      padding: .06rem .14rem;
      margin-right: .12rem;
      background-color: rgba(153, 153, 153, .1);
    }
  }
  .pro_info{
    margin-top: 0.24rem;
    .num{
      color: #FF423C;
    }
    .unit{
      font-weight: 500;
      color: rgba(0, 0, 0, 0.8);
    }
    .line{
      height: .4rem;
      width: 1px;
      background-color: #eee;
    }
  }
}
</style>