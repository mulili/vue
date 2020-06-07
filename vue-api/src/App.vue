<template>
  <div id="app">
    <input @keyup.v="handleHitV" />
    <br />
    <button @click="handleAddKey">Add key</button>
    <button @click="handleDeleteKey">Delete key</button>
    <ul>
      <li v-for="key of obj" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
Vue.config.keyCodes = { v: 86 };
export default {
  name: "App",
  data() {
    return {
      obj: { A: "a", B: "B", C: "c" }
    };
  },
  methods: {
    handleHitV() {
      console.log("hit v key");
    },
    handleAddKey() {
      /*  
        data 为对象时，修改data需要注意：
          1. 可以修改已存在的value；
          2. 可以修改对象的引用，也就是换一个新对象；
          3. 注意，不能利用 ./[]语法添加新属性，需要使用Vue.set(target,key/index,value)的方式；
          4. vue也无法监测到使用 delete 删除属性后的 view 变化，需要使用Vue.delete(target,key/index)
      */

      Vue.set(this.obj, "abc", "abc");
    },
    handleDeleteKey() {
      Vue.delete(this.obj, "A");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
