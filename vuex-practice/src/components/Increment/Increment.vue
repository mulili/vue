<template>
  <div>
    <show-value />
    <button @click="handleClick">+ 1</button>
    <button @click="handleClick">+ 2</button>
    <button @click="handleClick">+ 3</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import mutationTypes from "../../store/mutationTypes";
import ShowValue from "./component/ShowValue";

const { INCREMENT } = mutationTypes;

export default {
  name: "Increment",
  components: { ShowValue },
  methods: {
    ...mapMutations([INCREMENT]),
    handleClick(e) {
      const value = Number(e.target.innerText.split(" ")[1]);
      /*
        不能直接调用一个 mutation handler，这个选项更像是事件注册，“当触发一个 increment 的mutation时，调用此函数”；
        要唤醒一个 mutation handler，需要以相应的 type 调用 store.commit 方法；
      */
      // this.$store.commit(INCREMENT,  { count: value } );

      // this.$store.commit({
      //   type: INCREMENT,
      //   count: value
      // });

      this[INCREMENT]({ count: value });

      
    }
  }
};
</script>

<style>
</style>