<template>
  <div class="wrapper">
    <detail-header />
    <detail-banner />
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from "./component/Banner";
import DetailHeader from "./component/Header";

export default {
  name: "Detail",
  props: ["id"],
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
.container {
  height: 50rem;
}
</style>
