<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="list">
      <li class="item border-bottom" v-for="{ id, url, name, desc } of recommendList" :key="id">
        <img :src="url" alt="remommend image" />
        <div class="detail">
          <h5 class="name">{{ name }}</h5>
          <p class="desc">{{ desc }}</p>

          <button class="btn-detail">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/mixins.styl';

.title {
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;

  img {
    height: 1.48rem;
    width: 2.26rem;
    padding: 0.1rem;
  }

  .detail {
    height: 100%;
    width: 100%;
    /*
    flex布局 ... 未生效
      因为flex布局中，如果容器的宽度小于flex item本身的宽度，flex item 会拒绝收缩;
      除非给flex item的 min-width:0
     */
    min-width: 0;
    box-sizing: border-box;

    .name, .desc {
      line-height: 0.5rem;
      ellipis();
    }

    .name {
      font-weight: bold;
    }

    .desc {
      width: 100%;
      color: #ccc;
    }

    .btn-detail {
      background-color: #ff9300;
      color: #fff;
      padding: 0.1rem;
      border-radius: 0.06rem;
    }
  }
}
</style>
