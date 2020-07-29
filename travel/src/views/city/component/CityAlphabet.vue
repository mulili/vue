<template>
  <div class="alphabet-list">
    <ul
      ref="alphabet-list"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <li
        @click="handleClick"
        class="alphabet"
        v-for="alphabet of alphabetList"
        :key="alphabet"
        :ref="alphabet"
      >
        {{ alphabet }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cityList: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      target: "",
      startTop: 0,
      normalLiClassName: "alphabet",
      touchedLiClassName: "alphabet touched"
    };
  },
  computed: {
    alphabetList() {
      return Object.keys(this.cityList);
    }
  },
  updated() {
    this.startTop = this.$refs.A[0].offsetTop;
  },
  methods: {
    handleClick(e) {
      this.$emit("target", e.target.innerText);
    },
    getStep(e) {
      // offsetTop 是相当于包裹元素或定位元素左上角的垂直距离
      /*
        clientY 是相当于视窗左上角的垂直距离
        79px is (title +search) height
      */
      const endTop = e.touches[0].clientY - 79;
      const distance = endTop - this.startTop;
      // 减去1是因为要对表index从0开始的下标
      const step = Math.ceil(distance / e.target.offsetHeight) - 1;
      if (this.alphabetList[step]) {
        this.target = this.alphabetList[step];
        this.protrudeTouchedItem(step);
      }
      this.$emit("scroll", this.target);
    },
    handleTouchMove(e) {
      this.getStep(e);
    },
    handleTouchEnd() {
      this.restoreDefaultStyle();
    },
    // 参考微信联系人列表的滑动效果，突出显示 touched 的 item
    protrudeTouchedItem(step) {
      const { touchedLiClassName, normalLiClassName } = this;
      this.mapLiToSetClassName((li, index) => {
        // eslint-disable-next-line no-param-reassign
        li.className = index === step ? touchedLiClassName : normalLiClassName;
      });
    },
    // touchmove 结束后，回复默认的css
    restoreDefaultStyle() {
      this.mapLiToSetClassName(li => {
        // eslint-disable-next-line no-param-reassign
        li.className = this.normalLiClassName;
      });
    },
    mapLiToSetClassName(fn) {
      Array.from(this.$refs["alphabet-list"].children).forEach(fn);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.alphabet-list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .alphabet {
    color: $bgColor;
    line-height: 0.44rem;
    font-weight: bold;
  }

  .touched {
    position: relative;
    top: -0.1rem;
    left: -0.6rem;
  }
}
</style>
