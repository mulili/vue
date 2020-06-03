<template>
  <div class="city">
    <city-header />
    <city-search />
    <city-list />
    <city-alphabet />
  </div>
</template>

<script>
import CityHeader from "./component/CityHeader";
import CitySearch from "./component/CitySearch";
import CityList from "./component/CityList";
import CityAlphabet from "./component/CityAlphabet";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
};
</script>

<style lang="stylus" scoped></style>
