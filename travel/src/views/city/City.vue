<template>
  <div class="city">
    <city-header />
    <city-search :cityList="cityList" />
    <city-list :cities="cities" :target="target" />
    <city-alphabet
      @target="handleTargetChange"
      @scroll="handleScrollTarget"
      :cityList="cityList"
    />
  </div>
</template>

<script>
import { selfAxios } from "@utils";

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
  },
  data() {
    return {
      cities: {},
      cityList: {},
      target: ""
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      selfAxios
        .get("/city.json")
        .then(this.getCityInfoSuccess)
        .catch(this.getCityInfoFailed);
    },
    getCityInfoSuccess(res) {
      const { ret, data } = res;
      if (ret && data) {
        this.cities = data.cities;
        const {
          cities: { cityList }
        } = data;
        this.cityList = cityList;
      }
    },
    getCityInfoFailed(error) {
      console.error(error);
    },
    handleTargetChange(target) {
      this.target = target;
    },
    handleScrollTarget(target) {
      this.target = target;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
