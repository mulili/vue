<template>
  <ul class="list">
    <li class="item" v-for="(item, index) of list" :key="`${item}_${index}`">
      <div class="item-title border-bottom">
        <i class="item-title-icon" />
        {{ item.title }}
      </div>
      <div v-if="item.children" class="children">
        <detail-list :list="item.children" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DetailList",
  props: ["list"]
};
</script>

<style lang="stylus" scoped>
.list {
  .item {
    .item-title {
      line-height: 0.8rem;
      font-size: 0.32rem;
      padding: 0 0.2rem;

      .item-title-icon {
        display: inline-block;
        width: 0.36rem;
        height: 0.36rem;
        position: relative;
        top: 0.1rem;
        left: 0;
        background-image: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png');
        background-position: 0 -0.45rem;
        background-size: 0.4rem 3rem;
        background-repeat: no-repeat;
      }
    }

    .children {
      padding-left: 0.2rem;
    }
  }
}
</style>
