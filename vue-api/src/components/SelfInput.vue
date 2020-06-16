<template>
  <div>
    <input v-model="inputValue" />
    <h3>{{inputValue}}</h3>
  </div>
</template>

<script>
export default {
  name: "selfInput",
  props: ["upValue"],
  data() {
    return {
      inputValue: this.upValue
    };
  },
  watch: {
    upValue(value) {
      this.inputValue = value;
    }
  }
};
</script>

<style>
</style>