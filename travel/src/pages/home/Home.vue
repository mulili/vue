<template>
  <div class="home">
    <home-header :city="city" />
    <swiper :swiperList="swiperList" />
    <icons :iconList="iconList" />
    <recommend :recommendList="recommendList" />
    <weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import axios from "axios";

import HomeHeader from "./component/Header";
import Swiper from "./component/Swiper";
import Icons from "./component/Icons";
import Recommend from "./component/Recommend";
import Weekend from "./component/Weekend";

export default {
  name: "Home",
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Recommend,
    Weekend
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
      axios
        .get("/api/home.json")
        .then(this.getHomeInfoSuccess)
        .catch(this.getHomeInfoFailed);
    },
    getHomeInfoSuccess(res) {
      const { ret, data } = res.data;
      if (ret && data) {
        console.log(data);
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
