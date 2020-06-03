<template>
  <div class="wrapper">
    <div v-swiper:mySwiper="swiperOption" v-if="swiperListLength">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="{ id, url } of swiperList" :key="id">
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
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
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
</script >

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.swiper-wrapper {
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
