<template>
  <div class="wrapper">
    <detail-header />
    <detail-banner />
    <detail-list :list="list" />
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from "./component/Banner";
import DetailHeader from "./component/Header";
import DetailList from "./component/List";

export default {
  name: "Detail",
  props: ["id"],
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [{ title: "七折优惠" }]
            },
            {
              title: "成人五馆联票",
              children: [{ title: "五折优惠" }]
            }
          ]
        },
        {
          title: "学生票",
          children: [{ title: "学生三馆联票" }, { title: "学生五馆联票" }]
        },
        {
          title: "儿童票",
          children: [{ title: "儿童三馆联票" }, { title: "儿童五馆联票" }]
        },
        {
          title: "特惠票",
          children: [{ title: "特惠三馆联票" }, { title: "特惠五馆联票" }]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.container {
  height: 20rem;
}
</style>
