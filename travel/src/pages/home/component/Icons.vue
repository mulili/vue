<template>
  <div class="home-icons">
    <div v-for="{ id, url, content } of icons" :key="id" class="icon">
      <div class="img-wrap">
        <img :src="url" alt="project image" class="icon-img" />
      </div>
      <p class="icon-desc">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
  data() {
    return {
      icons: [
        {
          id: 0,
          url:
            "https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
          content: "民宿客栈等等等"
        },
        {
          id: 1,
          url:
            "https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png",
          content: "专车自驾"
        },
        {
          id: 2,
          url:
            "https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png",
          content: "赚钱"
        },
        {
          id: 3,
          url:
            "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
          content: "旅游团购"
        },
        {
          id: 4,
          url:
            "https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png",
          content: "一日游"
        },
        {
          id: 5,
          url:
            "https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png",
          content: "特惠酒店"
        },
        {
          id: 6,
          url:
            "https://picbed.qunarzz.com/799d9d090d1625a854194460c8849fee.png",
          content: "邮轮"
        },
        {
          id: 7,
          url:
            "https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png",
          content: "周边短途"
        }
      ]
    };
  },
  computed: {
    // 动态计算ions正确的分页
    pages() {
      const pages = [];
      this.icons.forEach((v, i) => {
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
@import "~@style/mixins.styl"
.home-icons
  width:100%;
  height:0;
  padding-bottom:50%;
  display: flex;
  flex-wrap:wrap;
  .icon
    width:25%;
    height:0;
    padding-bottom:25%;
    text-align:center;
    overflow:hidden;
    position:relative;
    .img-wrap
      box-sizing:border-box;
      width: 100%;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:.44rem;
      padding: .3rem;
      .icon-img
        height:100%;
    .icon-desc
      width:80%;
      position:absolute;
      left:0.2rem;
      bottom:0;
      text-align:center;
      height: 14px;
      line-height: 15px;
      ellipis()

</style>
