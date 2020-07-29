<template>
  <div class="home">
    <home-header />
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconList="iconList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import { selfAxios } from "@/utils";
import HomeHeader from "./component/HomeHeader";
import HomeSwiper from "./component/HomeSwiper";
import HomeIcons from "./component/HomeIcons";
import HomeRecommend from "./component/HomeRecommend";
import HomeWeekend from "./component/HomeWeekend";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: "",
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    let { lastCity } = this;
    const { city, getHomeInfo } = this;
    if (lastCity !== city) {
      lastCity = city;
      getHomeInfo();
    }
  },
  methods: {
    getHomeInfo() {
      selfAxios
        .get(`/home.json?city=${this.city}`)
        .then(this.getHomeInfoSuccess)
        .catch(this.getHomeInfoFailed);
    },
    getHomeInfoSuccess(res) {
      const { ret, data } = res;
      if (ret && data) {
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
    getHomeInfoFailed(err) {
      console.error(err);
    },
  },
};
</script>
