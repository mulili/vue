<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from "./component/HomeHeader";
import HomeSwiper from "./component/HomeSwiper";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style>
