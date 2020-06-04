<template>
  <ul class="alphabet-list">
    <li @click="handleClick" class="alphabet" v-for="(value,key) of cityList" :key="key">{{key}}</li>
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
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit("target", e.target.innerText);
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
