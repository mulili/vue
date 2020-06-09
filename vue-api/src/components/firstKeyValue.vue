<template>
  <h5 ref="firstKey">{{firstKey}}</h5>
</template>

<script>
import logRed from "../utils/logRed";
export default {
  name: "FirstKeyValue",
  props: {
    firstKey: {
      type: String,
      required: true
    }
  },
  mounted() {
    setTimeout(() => {
      throw new TypeError("child component error");
    }, 2000);
  },
  activated() {
    // 该钩子函数在 keep-alive 缓存的组件激活时调用
    logRed("activated");
    console.log(this);
  },
  deactivated() {
    // 该钩子函数在 keep-alive 缓存的组件停用时调用
    logRed("deactivated");
    console.log(this);
  },
  beforeDestroy() {
    // 实例被销毁之前调用，在这一步，实例仍然完全可用
    logRed("beforeDestroy");
  },
  destroyed() {
    /* 
      实例销毁后调用，
      该钩子被调用后，
        对应Vue实例的所有指令都被解绑；
        所有的的事件监听器被移除；
        所有的子实例也都被销毁；
      不能在该钩子函数中对组件实例做任何有效的操作；
    */
    logRed("destroyed");
  }
};
</script>

<style scoped>
</style>