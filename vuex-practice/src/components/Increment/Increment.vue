<template>
  <div>
    <show-value />
    <button @click="handleClick">+ 1</button>
    <button @click="handleClick">+ 2</button>
    <button @click="handleClick">+ 3</button>
  </div>
</template>

<script>
import ShowValue from "./component/ShowValue";
export default {
  name: "Increment",
  components: { ShowValue },
  methods: {
    handleClick(e) {
      const value = Number(e.target.innerText.split(" ")[1]);
      this.$store.commit("increment", value);
    }
  }
};
</script>

<style>
</style>