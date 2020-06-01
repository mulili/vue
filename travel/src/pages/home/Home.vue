<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from "./component/HomeHeader";
import HomeSwiper from "./component/HomeSwiper";
import HomeIcons from "./component/HomeIcons";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
};
</script>

<style>
