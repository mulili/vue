<template>
  <div class="header">
    <div class="header-left">返回</div>
    <input class="header-input" placeholder="输入城市/景点/游玩主题">
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
.header
  display: flex
  align-items: center;
  height: .86rem
  color: #fff
  background-color: #00bcd4
  .header-left
    width: .64rem
    float: left
  .header-input
    flex:1
    height:.64rem
    background-color: #fff
    margin-left: .12rem
    border-radius:.1rem
  input::placeholder
    color:#ccc
  .header-right
    width: 1.24rem
    float: right
    text-align:center
</style>

