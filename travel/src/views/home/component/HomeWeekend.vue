<template>
  <div>
    <div class="title">周末去哪</div>
    <ul class="list">
      <li
        class="item border-bottom"
        v-for="{ id, url, name, desc } of weekendList"
        :key="id"
      >
        <div class="img-wrapper">
          <img :src="url" alt="recommend image" />
        </div>
        <div class="detail">
          <h5 class="name">{{ name }}</h5>
          <p class="desc">{{ desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
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

.img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 37.2%;

  img {
    width: 100%;
  }
}

.detail {
  padding: 0.1rem;
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
}
</style>
