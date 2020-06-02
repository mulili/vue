<template>
  <div class="home">
    <header></header>
    <swiper></swiper>
    <icons></icons>
    <recommend></recommend>
  </div>
</template>

<script>
import Header from "./component/Header";
import Swiper from "./component/Swiper";
import Icons from "./component/Icons";
import Recommend from "./component/Recommend";

export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
  }
};
</script>

<style>
