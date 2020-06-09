<template>
  <div></div>
</template>

<script>
import firstKeyValue from "./firstKeyValue";

export default {
  name: "HelloWorld",
  props: {
    firstKey: {
      type: String,
      required: true
    }
  },
  extends: firstKeyValue
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
