<template>
  <div class="home">
    <header></header>
    <swiper></swiper>
    <icons></icons>
  </div>
</template>

<script>
import Header from "./component/Header";
import Swiper from "./component/Swiper";
import Icons from "./component/Icons";

export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons
  }
};
</script>

<style>
