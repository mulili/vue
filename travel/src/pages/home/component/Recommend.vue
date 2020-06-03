<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul class="list">
      <li
        class="item border-bottom"
        v-for="{ id, url, name, desc } of list"
        :key="id"
      >
        <img :src="url" alt="remommend image" />
        <div class="detail">
          <h5 class="name">{{ name }}</h5>
          <p class="desc">{{ desc }}</p>

          <button class="btn-detail">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      list: [
        {
          id: 0,
          url:
            "https://imgs.qunarzz.com/sight/p0/1411/61/d92ba6a30aa12eb0a9a4a9c82214cb8e.water.jpg_224x148_4db588c3.jpg",
          name: "秦始皇帝陵博物院（兵马俑）",
          desc: "世界第八大奇迹"
        },
        {
          id: 1,
          url:
            "https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_224x148_ca6e26e9.jpg",
          name: "华山景区",
          desc: "只有天在上，更无山与齐"
        },
        {
          id: 2,
          url:
            "https://imgs.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_224x148_878c10b8.jpg",
          name: "长恨歌",
          desc: "中国首部大型实景历史舞剧"
        },
        {
          id: 3,
          url:
            "https://imgs.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_224x148_f39d1e7f.jpg",
          name: "秦岭野生动物园",
          desc: "走进大自然，亲近小动物"
        },
        {
          id: 4,
          url:
            "https://imgs.qunarzz.com/sight/p0/1804/51/512ff9f3a6e9b1a6a3.water.jpg_224x148_ca6506e6.jpg",
          name: "华夏文旅海洋公园",
          desc: "领略独特奇美的海滨风情"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/mixins.styl';
.title
  line-height: .8rem;
  background-color: #eee;
  text-indent: .2rem;
.item
  display: flex;
  height: 1.9rem;
  img
    height: 1.48rem;
    width: 2.26rem;
    padding: .1rem;
  .detail
    height: 100%;
    width: 100%;
    /*
    flex布局 ... 未生效
      因为flex布局中，如果容器的宽度小于flex item本身的宽度，flex item 会拒绝收缩;
      除非给flex item的 min-width:0
     */
    min-width: 0;
    box-sizing: border-box;
    .name, .desc
      line-height:0.5rem;
      ellipis();
    .name
      font-weight: bold;
    .desc
      width: 100%;
      color: #ccc;
    .btn-detail
      background-color:#ff9300
      color: #fff;
      padding: .1rem;
      border-radius: .06rem;
</style>
