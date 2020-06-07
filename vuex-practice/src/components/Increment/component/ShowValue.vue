<template>
  <div>
    <div>{{count}}</div>
    <div>{{capitalGreeting}}</div>
    <div>{{greeting}}</div>
    <div>{{getName(2)}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ShowValue",
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapState(["count", "greeting"]),
    ...mapGetters(["capitalGreeting", "getName"])
  },

  mounted() {
    console.log(this.$store);
  }
};
</script>

<style scoped>
</style>