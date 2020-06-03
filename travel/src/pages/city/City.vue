<template>
  <div class="city">
    <city-header />
    <city-search />
  </div>
</template>

<script>
import CityHeader from "./component/CityHeader";
import CitySearch from "./component/CitySearch";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch
  }
};
</script>

<style lang="stylus" scoped></style>
