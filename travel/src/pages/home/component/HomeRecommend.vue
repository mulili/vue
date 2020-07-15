<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul class="list">
      <li
        tag="li"
        :key="id"
        class="item border-bottom"
        v-for="{ id, url, name, desc } of recommendList"
      >
        <div class="img-wrapper">
          <img :src="url" alt="recommend image" />
        </div>
        <div class="detail">
          <h5 class="name">{{ name }}</h5>
          <p class="desc">{{ desc }}</p>
          <router-link class="btn-detail" tag="button" :to="'/detail/' + id"
            >查看详情</router-link
          >
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

.recommend {
  .title {
    line-height: 0.8rem;
    background-color: #eee;
    text-indent: 0.2rem;
  }

  .list {
    overflow: hidden;

    .item {
      display: flex;
      height: 1.9rem;
      overflow: hidden;

      .img-wrapper {
        box-sizing: border-box;
        height: 0;
        width: 2.8rem;
        margin: 0.1rem;
        padding-bottom: 22.95%;
        flex-shrink: 0;
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
  }
}
</style>
