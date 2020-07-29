<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="swiperListLength">
      <swiper-slide v-for="{ id, url } of swiperList" :key="id">
        <div class="img-wrapper">
          <img class="swiper-img" :src="url" alt="风景图" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  computed: {
    swiperListLength() {
      return this.swiperList.length;
    }
  },
  mounted() {
    // this.mySwiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.img-wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
