<template>
  <div class="home">
    <header/>
    <swiper/>
    <icons/>
    <recommend/>
    <weekend/>
  </div>
</template>

<script>
import axios from 'axios';

import Header from "./component/Header";
import Swiper from "./component/Swiper";
import Icons from "./component/Icons";
import Recommend from "./component/Recommend";
import Weekend from "./component/Weekend";

export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend,
  },
  mounted(){
    this.getHomeInfo();
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/home.json')
      .then(this.getHomeInfoSuccess)
      .catch(this.getHomeInfoFailed)
    },
    getHomeInfoSuccess(res){
      console.log(res);
    },
    getHomeInfoFailed(err){
      console.error(err);
    }
  },

};
</script>

<style>
