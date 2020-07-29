<template>
  <swiper :options="swiperOptions">
    <swiper-slide
      v-for="(iconList, index) of pages"
      :key="index"
      class="home-icons"
    >
      <div class="icon" v-for="{ id, url, desc } of iconList" :key="id">
        <div class="img-wrap">
          <img :src="url" alt="project image" class="icon-img" />
        </div>
        <p class="icon-desc">{{ desc }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    // 动态计算ions正确的分页
    pages() {
      const pages = [];
      this.iconList.forEach((v, i) => {
        if (i % 8 === 0) {
          pages.push([]);
        }
        pages[pages.length - 1].push(v);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/mixins.styl';

.home-icons {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;

  .icon {
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    text-align: center;
    overflow: hidden;
    position: relative;

    .img-wrap {
      box-sizing: border-box;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      padding: 0.3rem;

      .icon-img {
        height: 100%;
      }
    }

    .icon-desc {
      width: 80%;
      position: absolute;
      left: 0.2rem;
      bottom: 0;
      text-align: center;
      height: 14px;
      line-height: 15px;
      ellipis();
    }
  }
}
</style>
