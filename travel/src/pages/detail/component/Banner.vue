<template>
  <div>
    <div class="banner" @click="toggleShowGallery">
      <div class="img-wrapper">
        <img
          class="banner-img"
          src="https://imgs.qunarzz.com/p/tts2/1807/43/0cdbb72913b35a02.jpg_r_390x260x95_2c5e2446.jpg"
          alt="banner image"
        />
      </div>
      <div class="banner-info">
        <p class="banner-name">大连圣亚海洋世界（AAAA景区）</p>
        <p class="banner-number">
          <i class="iconfont icon-img banner-icon" />
          39
        </p>
      </div>
    </div>
    <common-gallery @closeGallery="toggleShowGallery" v-if="isShowGallery" :imgUrls="imgUrls" />
  </div>
</template>

<script>
import CommonGallery from "@common/gallery/Gallery";

export default {
  name: "DetailBanner",
  components: {
    CommonGallery
  },
  data() {
    return {
      isShowGallery: false,
      imgUrls: [
        {
          id: 0,
          url:
            "https://imgs.qunarzz.com/p/tts8/1807/6f/1c13592a0ae23202.jpg_r_390x260x95_f4f34290.jpg"
        },
        {
          id: 1,
          url:
            "https://imgs.qunarzz.com/p/tts4/1807/84/3e9d39f18e97ff02.jpg_r_390x260x95_0a3c6067.jpg"
        },
        {
          id: 2,
          url:
            "https://imgs.qunarzz.com/p/tts9/1807/93/1578f06b9e0e5702.jpg_r_390x260x95_24d44773.jpg"
        }
      ]
    };
  },
  methods: {
    toggleShowGallery() {
      this.isShowGallery = !this.isShowGallery;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  top: 0;
  left: 0;

  .img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;

    .banner-img {
      width: 100%;
    }
  }

  .banner-info {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 0.6rem;
    color: #fff;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-name {
      flex: 1;
      padding: 0 0.2rem;
      font-size: 0.32rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background-color: black;
      opacity: 0.8;
      font-size: 0.24rem;
      margin: 0.14rem 0.2rem 0 0;

      .banner-icon {
        font-size: 0.24rem;
        padding-left: 0.1rem;
      }
    }
  }
}
</style>
