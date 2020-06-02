<template>
  <div class="home">
    <header/>
    <swiper/>
    <icons/>
    <recommend/>
    <weekend/>
  </div>
</template>

<script>
import Header from "./component/Header";
import Swiper from "./component/Swiper";
import Icons from "./component/Icons";
import Recommend from "./component/Recommend";
import Weekend from "./component/Weekend";

export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend,
  }
};
</script>

<style>
