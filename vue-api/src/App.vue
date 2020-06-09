<template>
  <keep-alive>
    <div id="app">
      <keep-alive>
        <first-key-value v-if="isShow" :firstKey="firstKey" ref="h5" />
      </keep-alive>
      <input @keyup.v="handleHitV" />
      <br />
      <button @click="handleAddKey">Add key</button>
      <button @click="handleDeleteKey">Delete key</button>
      <button @click="handleChangeFirstKey">Change firstKey</button>
      <button @click="handleIsShow">Toggle</button>
      <ul>
        <li v-for="(value,index) of obj" :key="index">{{value}}</li>
      </ul>
    </div>
  </keep-alive>
</template>

<script>
import Vue from "vue";
import FirstKeyValue from "./components/firstKeyValue";
import logRed from "./utils/logRed";

Vue.config.keyCodes = { v: 86 };
export default {
  name: "App",
  components: {
    FirstKeyValue
  },
  /* 
      1. 子组件中data 必须定义为一个函数返回对象，避免引用相同的对象，造成数据干扰；
      2. data作为返回对象的函数时，该函数接受一个参数，是当前组件的实例对象；
    */
  data: () => {
    // console.log("vm", vm);
    return {
      obj: { A: "a", B: "b", C: "c", D: { d: { a: "c" } } },
      isShow: true
    };
  },
  computed: {
    firstKey: {
      get: vm => Object.keys(vm.obj)[0].toUpperCase(),
      set() {
        this.obj = { B: "b", C: "c", D: { d: { a: "c" } } };
      }
    }
  },
  /* 
    watch 中的handler接收两个参数 newValue, odlValue;
  */
  watch: {
    // use array, can includes more watch handler
    obj: [
      {
        //immediate: true，使得该回调会在侦听开始之后被立即调用
        immediate: true,
        /*  
          注意：默认的呃行为不会监视嵌套的属性的变化
           deep: true，使得该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深；
        */

        deep: true,
        handler: (value, oldValue) => {
          console.log(
            "new: %s, old: %s, other: %s",
            JSON.stringify(value),
            JSON.stringify(oldValue)
          );
        }
      },
      () => {
        console.log("use array, can includes more watch handler");
        console.log("this", this);
      }
    ]
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
      // Vue.set(this.obj, "abc", "abc");

      // this.obj = { abc: "abc", ...this.obj };
      this.obj.D.d.a = "aaa";
    },
    /*  
      methods undefined
      为什么不能像 data 和 computed 那样，把组件实例传入呢？
    */
    handleDeleteKey() {
      Vue.delete(this.obj, "A");
    },
    handleChangeFirstKey() {
      this.firstKey = `changed ${this.firstKey.toLowerCase()}`;
    },
    handleIsShow() {
      this.isShow = !this.isShow;
    }
  },
  /* 
      所有的生命周期钩子自动绑定 this 上下文到实例中；
      意味着不能使用 箭头函数 来定义一个生命周期函数，那样 this 会指向 undefined
    */
  beforeCreate() {
    /* 
      在实例初始化之后，
      数据观测（ data observe ）和 event/watcher 事件配置之前被调用；
    */
    logRed("beforeCreate");
    console.log(this);
  },
  created() {
    /* 
      实例创建完成后被立即调用。
      在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。
      然而，挂载阶段还没开始，$el property 目前尚不可用。
    */
    logRed("created");
    console.log(this);
  },
  beforeMount() {
    /* 
      在挂载开始之前被调用：相关的 render 函数首次被调用。
      该钩子在服务器端渲染期间不被调用。
     */
    logRed("beforeMount");
    console.log(this);
  },
  mounted() {
    /* 
      实例被挂载后调用，
      这时 el 已被新创建的 vm.$el 替换了，
      如果根实例挂在到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内；

      注意， mounted 不会保证所有的子组件也都一起被挂载，
      如果希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick

      该钩子在服务器端渲染期间不被调用。
    */
    logRed("mounted");
    console.log(this);
  },
  beforeUpdate() {
    /*
      数据更新时调用，发生在虚拟 DOM 打补丁（ patch ）之前，
      这里适合在更新之前访问现有的 DOM ，比如手动移除已添加的事件监听器
      
      该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
    */
    logRed("beforeUpdate");
    console.table(this.$refs.h5.$refs.firstKey.innerText);
    console.log(this);
  },
  updated() {
    /* 
      由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子；
      当这个钩子被调用时，组件 DOM 已经更新，所以现在可以执行依赖于 DOM 的操作。

      注意 updated 不会保证所有的紫钻也都一起被重绘。

      如果想得到整个视图都重回完毕，可以在 updated 里使用 vm.$nextTick;

      该钩子在服务器端渲染期间不被调用。
    */
    logRed("updated");
    console.log(this);
    console.table(this.$refs.h5.$refs.firstKey.innerText);
  },
  errorCaptured(err, component, info) {
    logRed("errorCapture");
    console.log("err", err);
    console.log("component", component);
    console.log("info", info);
    return false;
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
