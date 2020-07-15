<template>
  <div class="wrapper" @click="handleCloseGallery">
    <!--
        @click.stop 避免事件被子元素触发
    -->
    <div class="container" @click.stop>
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="{ id, url } of imgUrls" :key="id">
          <img :src="url" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" />
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props: {
    imgUrls: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        loop: true,
        observer: true,
        observerParent: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  methods: {
    handleCloseGallery() {
      this.$emit("closeGallery");
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #000;

  .container {
    height: 0;
    padding-bottom: 66.67%;
    overflow: hidden;

    img {
      width: 100%;
    }

    .swiper-pagination {
      position: fixed;
      bottom: 5rem;
      left: 0;
      color: #fff;
    }
  }
}
</style>
