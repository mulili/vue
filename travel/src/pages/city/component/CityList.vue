<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <button class="btn">{{currentCity}}</button>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <button
            class="btn"
            v-for="(city,index) of popularCities"
            :key="`${index}_${city}`"
          >{{city}}</button>
        </div>
      </div>
      <div v-for="{id,alphabet,list} of cityList" :key="id" class="area">
        <div class="title border-topbottom">{{alphabet}}</div>
        <ul class="city-list">
          <li
            v-for="(city,index) of list"
            :key="`${city}_${index}`"
            class="city border-bottom"
          >{{city}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "CityList",
  data() {
    return {
      currentCity: "北京",
      popularCities: ["北京", "上海", "广州", "深圳", "成都"],
      cityList: [
        {
          id: 0,
          alphabet: "A",
          list: ["阿坝", "阿拉善", "阿里", "安康", "安庆"]
        },
        {
          id: 1,
          alphabet: "B",
          list: ["北京", "白银", "保定", "宝鸡", "保山"]
        },
        {
          id: 2,
          alphabet: "C",
          list: ["重庆", "成都", "长沙", "长春", "沧州", "常德"]
        },
        {
          id: 3,
          alphabet: "D",
          list: ["大连", "东莞", "大理", "丹东", "大庆"]
        },
        {
          id: 4,
          alphabet: "E",
          list: ["鄂尔多斯", "恩施", "鄂州", "抚顺", "抚州"]
        },
        {
          id: 5,
          alphabet: "F",
          list: ["福州", "防城港", "佛山", "甘南", "赣州"]
        }
      ]
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
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
