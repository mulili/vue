<template>
  <div class="wrapper">
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-result" ref="search-result" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="{ id, spell, name } of resultList"
          :key="id"
          @click="handleClickCity(name)"
        >
          {{ name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoMatch">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "CitySearch",
  props: {
    cityList: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      keyword: "",
      resultList: []
    };
  },
  computed: {
    hasNoMatch() {
      return !this.resultList.length;
    }
  },
  watch: {
    keyword(value) {
      this.matchResultList(value);
    }
  },
  methods: {
    ...mapMutations(["changeCity"]),
    matchResultList(value) {
      if (!value) {
        this.resultList = [];
        return;
      }
      this.resultList = Object.values(this.cityList)
        .flat(Infinity)
        .filter(
          item => item.name.includes(value) || item.spell.includes(value)
        );
    },
    handleClickCity(city) {
      this.changeCity(city);
      this.$router.push("/");
      this.keyword = "";
    }
  },
  mounted() {
    /*
      BetterScroll 默认会阻止浏览器的原生 click 事件。
      当设置为 true，BetterScroll 会派发一个 click 事件
    */
    this.scroll = new BScroll(this.$refs["search-result"], { click: true });
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.wrapper {
  .search {
    height: 0.72rem;
    background-color: $bgColor;
    display: flex;
    justify-content: center;
    padding: 0 0.1rem;

    .search-input {
      width: 100%;
      height: 0.62rem;
      text-align: center;
      border-radius: 0.06rem;
      color: #666;
      padding: 0 0.1rem;

      &::placeholder {
        color: #ccc;
      }
    }
  }

  .search-result {
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    padding-top: 0.1rem;
    background-color: #eee;

    .search-item {
      line-height: 0.62rem;
      color: #666;
      text-indent: 0.2rem;
      background-color: #fff;
    }
  }
}
</style>
