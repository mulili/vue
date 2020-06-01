<template>
  <div class="wrapper">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="{ id, url } of banners" :key="id">
          <img class="swiper-img" :src="url" alt="风景图" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      banners: [
        {
          id: 0,
          url: "https://img1.qunarzz.com/qs/2003/18/8013e794c150e502.jpg"
        },
        {
          id: 1,
          url: "https://img1.qunarzz.com/qs/1909/c5/649aae0f58224002.jpg"
        },
        {
          id: 2,
          url: "https://img1.qunarzz.com/qs/2001/d9/8844a335554e1c02.jpg"
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  mounted() {
    // this.mySwiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>>  .swiper-pagination-bullet-active
    background-color:#fff;
  .swiper-wrapper
    width: 100%;
    height: 0;
    overflow:hidden;
    padding-bottom:54.49%;
    background-color:#eee;
    .swiper-img
      width: 100%;
</style>
