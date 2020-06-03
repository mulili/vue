<template>
  <div class="header">
    <router-link to="/">
      <i class="iconfont icon-back-arrow back" />
    </router-link>
    <span>城市选择</span>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.header {
  line-height: $lineHeight;
  color: #fff;
  text-align: center;
  background-color: $bgColor;
  font-size: 0.32rem;
  position: relative;
  left: 0;
  top: 0;

  .back {
    font-size: 0.4rem;
    position: absolute;
    left: 0.16rem;
    top: 0;
    color: #fff;
  }
}
</style>
