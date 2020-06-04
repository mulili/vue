/*
  ios 系统 浏览器隐身模式下，包括Safari，Chrome，调用localStorage 方法会报错，导致页面crash；
  所以需要自己封装，捕获错误，避免页面crash
*/
const selfLocalStorage = {
  getItem(key) {
    let value;
    try {
      value = localStorage.getItem(key);
    } catch (error) {
      console.error(error);
    }
    return value;
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  }
};

export default selfLocalStorage;
