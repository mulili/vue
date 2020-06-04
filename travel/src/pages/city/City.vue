<template>
  <div class="city">
    <city-header />
    <city-search />
    <city-list :cities="cities" />
    <city-alphabet :cityList="cityList" />
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
      cityList: {}
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      selfAxios
        .get("/api/city.json")
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
    }
  }
};
</script>

<style lang="stylus" scoped></style>
