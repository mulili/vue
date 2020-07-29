<template>
  <div class="wrapper">
    <detail-header />
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgS="galleryImgS"
    />
    <detail-list :list="categoryList" />
    <div class="container"></div>
  </div>
</template>

<script>
import { selfAxios } from "@utils";

import DetailBanner from "./component/Banner";
import DetailHeader from "./component/Header";
import DetailList from "./component/List";

export default {
  name: "Detail",
  props: ["id"],
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      galleryImgS: [],
      categoryList: []
    };
  },
  methods: {
    getDetailSuccess(res) {
      if (res.data) {
        this.sightName = res.data.sightName;
        this.bannerImg = res.data.bannerImg;
        this.galleryImgS = res.data.galleryImgS;
        this.categoryList = res.data.categoryList;
      }
    },
    getDetailError(err) {
      console.error(err);
    },
    getDetailInfo() {
      const { id } = this.$route.params;
      return selfAxios.get("/detail.json", {
        params: {
          id
        }
      });
    }
  },
  mounted() {
    this.getDetailInfo()
      .then(this.getDetailSuccess)
      .catch(this.getDetailError);
  }
};
</script>

<style lang="stylus" scoped>
.container {
	height: 20rem;
}
</style>
