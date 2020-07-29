<template>
  <div class="header">
    <router-link class="back-btn" v-show="isShowAbs" to="/" tag="div">
      <i class="iconfont icon-back-arrow back-icon" />
    </router-link>
    <div v-show="!isShowAbs" class="fixed" :style="opacityStyle">
      <router-link to="/">
        <i class="iconfont icon-back-arrow back-icon" />
      </router-link>
      <span>景点详情</span>
    </div>
  </div>
</template>

<script>
import { scrollTop } from "@utils";

export default {
  name: "DetailHeader",
  data() {
    return {
      isShowAbs: true,
      opacityStyle: {}
    };
  },
  // <keep-alive>之后具有额外的activated 和 deactivated 钩子
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.watchScroll();
    },
    watchScroll() {
      const top = scrollTop.getScrollTop();
      let opacity;
      if (top > 60) {
        this.isShowAbs = false;
        // 确定显示之后，在一段距离内给显示的过程设置动态的透明度
        if (top < 140) {
          opacity = top / 140;
        }
      } else {
        this.isShowAbs = true;
        opacity = 0;
      }
      this.opacityStyle = {
        opacity
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.header {
	.back-btn {
		z-index: 2;
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		width: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		border-radius: 0.4rem;
		background-color: rgba(0, 0, 0, 0.8);

		.back-icon {
			color: #fff;
			font-size: 0.4rem;
		}
	}

	.fixed {
		line-height: $lineHeight;
		color: #fff;
		text-align: center;
		background-color: $bgColor;
		font-size: 0.32rem;
		position: fixed;
		z-index: 1;
		left: 0;
		right: 0;
		top: 0;

		.back-icon {
			font-size: 0.4rem;
			position: absolute;
			left: 0.16rem;
			top: 0;
			color: #fff;
		}
	}
}
</style>
