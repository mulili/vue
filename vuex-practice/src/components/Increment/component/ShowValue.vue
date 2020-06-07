<template>
  <div>
    <div>{{count}}</div>
    <div>{{greeting}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShowValue",
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapState(["count", "greeting"])
  },

  mounted() {
    console.log(this.$store);
  }
};
</script>

<style scoped>
</style>