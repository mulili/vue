<template>
  <ul class="alphabet-list">
    <li
      class="alphabet"
      v-for="(alphabet,index) of alphabetList"
      :key="`${index}_${alphabet}`"
    >{{alphabet}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  data() {
    return {
      alphabetList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
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
