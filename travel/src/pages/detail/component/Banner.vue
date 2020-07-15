<template>
  <div>
    <div class="banner" @click="toggleShowGallery">
      <div class="img-wrapper">
        <img class="banner-img" :src="bannerImg" alt="banner image" />
      </div>
      <div class="banner-info">
        <p class="banner-name">{{ sightName }}</p>
        <p class="banner-number">
          <i class="iconfont icon-img banner-icon" />
          {{ galleryImgS.length }}
        </p>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        @closeGallery="toggleShowGallery"
        v-if="isShowGallery"
        :imgUrls="galleryImgS"
      />
    </fade-animation>
  </div>
</template>

<script>
import FadeAnimation from "@common/fadeAnimation/FadeAnimation";
import CommonGallery from "@common/gallery/Gallery";

export default {
  name: "DetailBanner",
  components: {
    FadeAnimation,
    CommonGallery
  },
  props: {
    sightName: {
      type: String,
      required: true
    },
    bannerImg: {
      type: String,
      required: true
    },
    galleryImgS: {
      type: Array,
      required: true,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    }
  },
  data() {
    return {
      isShowGallery: false
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
