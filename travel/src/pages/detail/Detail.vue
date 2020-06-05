<template>
  <!-- <div>{{id}}</div> -->
  <div class="wrapper">
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailBanner from "./component/Banner";

export default {
  name: "Detail",
  props: ["id"],
  components: {
    DetailBanner
  }
};
</script>

<style lang="stylus" scoped></style>
