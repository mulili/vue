<template>
  <div id="app">
    <input @keyup.v="handleHitV" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
Vue.config.keyCodes = { v: 86 };
export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    handleHitV(e) {
      console.log("hit v key");
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
