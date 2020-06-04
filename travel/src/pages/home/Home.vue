<template>
  <div class="home">
    <home-header :city="city" />
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconList="iconList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script>
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
    HomeWeekend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      selfAxios
        .get("/api/home.json")
        .then(this.getHomeInfoSuccess)
        .catch(this.getHomeInfoFailed);
    },
    getHomeInfoSuccess(res) {
      const { ret, data } = res;
      if (ret && data) {
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
    getHomeInfoFailed(err) {
      console.error(err);
    }
  }
};
</script>

<style>
