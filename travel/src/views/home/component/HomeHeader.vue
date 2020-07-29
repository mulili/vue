<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-back-arrow back" />
    </div>
    <div class="header-input">
      <i class="iconfont icon-search search" />
      <input placeholder="输入城市/景点/游玩主题" />
    </div>
    <div class="header-right">
      <router-link to="/city">
        <span class="city-name">{{ city }}</span>
      </router-link>
      <i class="iconfont icon-down-arrow down" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
// 在css中import需要加 @前缀；
// path中可以使用@符号来指代src所在的位置
// 可以在webpack.base.confgi.js 文件中的resovle.alias设置标识符代表特定的path
// styel中的指定的path 需要添加‘～’前缀
@import '~@style/variables.styl';

.header {
  display: flex;
  align-items: center;
  line-height: $lineHeight;
  color: #fff;
  background-color: $bgColor;

  .header-left {
    width: 0.64rem;
    float: left;

    .back {
      font-size: 20px;
      padding-left: 8px;
    }
  }

  .header-input {
    flex: 1;
    line-height: 0.64rem;
    background-color: #fff;
    margin-left: 0.12rem;
    border-radius: 0.1rem;
    color: #ccc;

    input::placeholder {
      color: #ccc;
    }

    .search {
      position: relative;
      top: 2px;
      left: 8px;
      padding-right: 8px;
    }
  }

  .header-right {
    min-width: 1.24rem;
    float: right;
    text-align: center;
    font-size: 0;
    margin-left: 0.1rem;

    .city-name {
      color: #fff;
      font-size: 0.24rem;
    }

    .down {
      font-size: 12px;
      padding-left: 0.1rem;
    }
  }
}
</style>
