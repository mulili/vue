<template>
  <div>
    <show-value />
    <button @click="handleIncrement(1)">+ 1</button>
    <button @click="handleIncrement(2)">+ 2</button>
    <button @click="handleIncrement(3)">+ 3</button>
    <button @click="handleAsyncIncrement(3)">Async + 3</button>
    <button @click="handleAsyncIncrementDouble(3)">Async + 3, Async + 3 + 3</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import mutationTypes from "../../store/mutationTypes";
import ShowValue from "./component/ShowValue";

const { INCREMENT, ASYNC_INCREMENT } = mutationTypes;

export default {
  name: "Increment",
  components: { ShowValue },
  methods: {
    ...mapMutations([INCREMENT]),
    ...mapActions([ASYNC_INCREMENT]),
    handleIncrement(count) {
      /*
        不能直接调用一个 mutation handler，这个选项更像是事件注册，“当触发一个 increment 的mutation时，调用此函数”；
        要唤醒一个 mutation handler，需要以相应的 type 调用 store.commit 方法；
      */
      // this.$store.commit(INCREMENT,  { count } );

      // this.$store.commit({
      //   type: INCREMENT,
      //   count
      // });

      this[INCREMENT]({ count });
    },
    handleAsyncIncrement(count) {
      // this.$store.dispatch(ASYNC_INCREMENT, { count: this.getValue(e) });
      this[ASYNC_INCREMENT]({ count });
    },
    handleAsyncIncrementDouble(count) {
      this[ASYNC_INCREMENT]({ count }).then(() => {
        this[ASYNC_INCREMENT]({ count });
      });
    }
  }
};
</script>

<style>
</style>