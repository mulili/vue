<template>
  <div class="list" ref="wrapper">
    <div class="BScroll-need-only-child">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <button class="btn">{{ city }}</button>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <button
            class="btn"
            v-for="{ id, name } of cities.popularCities"
            :key="id"
            @click="handleClickCity(name)"
          >
            {{ name }}
          </button>
        </div>
      </div>
      <div
        v-for="(cities, alphabet) of cities.cityList"
        :key="alphabet"
        class="area"
        :ref="alphabet"
      >
        <div class="title border-topbottom">{{ alphabet }}</div>
        <ul class="city-list">
          <li
            v-for="{ id, name } of cities"
            :key="id"
            @click="handleClickCity(name)"
            class="city border-bottom"
          >
            {{ name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "CityList",
  props: {
    cities: {
      type: Object,
      required: true
    },
    target: String
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["city"])
  },
  watch: {
    target() {
      const element = this.$refs[this.target][0];
      this.scroll.scrollToElement(element);
    }
  },
  methods: {
    ...mapMutations(["changeCity"]),
    handleClickCity(city) {
      this.changeCity(city);
      this.$router.push("/");
      this.scroll.scrollTo(0, 0);
    }
  },
  mounted() {
    /*
      BetterScroll 默认会阻止浏览器的原生 click 事件。
      当设置为 true，BetterScroll 会派发一个 click 事件
    */
    this.scroll = new BScroll(this.$refs.wrapper, { click: true });
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .area {
    .border-topbottom {
      &:before, &:after {
        border-color: #ccc;
      }
    }

    .title {
      background-color: #eee;
      line-height: 0.54rem;
      padding-left: 0.2rem;
      font-size: 0.26rem;
      color: #666;
    }

    .btn-list {
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;

      .btn {
        width: 30%;
        margin: 0.1rem;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
        background-color: #fff;
        padding: 0.1rem 0;
      }
    }

    .city-list {
      .city {
        line-height: 0.54rem;
        padding-left: 0.2rem;

        &:before {
          border-color: #ccc;
        }
      }
    }
  }
}
</style>
