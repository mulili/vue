<template>
  <ul class="alphabet-list" @touchmove="handleTouchMove">
    <li
      @click="handleClick"
      class="alphabet"
      v-for=" alphabet of alphabetList"
      :key="alphabet"
      :ref="alphabet"
    >{{alphabet}}</li>
  </ul>
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
      timer: null
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
    debounce(fn) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(fn, 10);
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
      }
      this.$emit("scroll", this.target);
    },
    handleTouchMove(e) {
      this.debounce(() => this.getStep(e));
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
}
</style>
