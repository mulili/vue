<template>
  <div id="app">
    <h5>{{firstKey}}</h5>
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
  /* 
      1. 子组件中data 必须定义为一个函数返回对象，避免引用相同的对象，造成数据干扰；
      2. data作为返回对象的函数时，该函数接受一个参数，是当前组件的实例对象；
    */
  data: vm => {
    console.log("vm", vm);
    return {
      obj: { A: "a", B: "B", C: "c" }
    };
  },
  computed: {
    firstKey: vm => Object.keys(vm.obj)[0].toUpperCase()
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
      this.obj = { abc: "abc", ...this.obj };
      // Vue.set(this.obj, "abc", "abc");
    },
    handleDeleteKey() {
      Vue.delete(this.obj, "A");
    }
  },
  mounted() {
    console.log(Vue.version);
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
