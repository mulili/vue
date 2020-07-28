/*
  https://github.com/mqyqingfeng/Blog/issues/22

  在前端开发中会遇到一些频繁的事件触发，比如：

    window 的 resize、scroll
    mousedown、mousemove
    keyup、keydown
    ……

  为了解决这个问题，一般有两种解决方案：
    debounce 防抖
    throttle 节流

  防抖的原理就是：
    你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
    如果你在一个事件触发的 n 秒内又触发了这个事件，
    那我就以新的事件的时间为准，n 秒后才执行，
    总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!
*/

/*
  第一版，在内部防抖化执行高频函数，
  问题在于，每一次执行时，timer=null，定时器永远也无法清除，😂
*/
export const debounce1 = (fn, time = 16) => {
  let timer = null;
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, time);
};

/*
  第二版，返回一个 防抖化 的函数，
  利用闭包解决 多个debounce 之间 timer 的通信
*/
export const debounce = (fn, time = 16) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, time);
  };
};

/**
 * 返回一个节流的函数 debounceFn ,
 * 重复调用 debounceFn 时会采用防抖策略，而且会返回一个清除计时器的方法 clearTimer
 * 调用 clearTimer 时会清除防抖时最后一个计时器
 */
export const throttle = (fn, time = 16) => {
  let timer;
  let start = Date.now();
  const clearTimer = () => clearTimeout(timer);
  return function debounceFn(...args) {
    const current = Date.now();
    clearTimer();
    if (current - start > time) {
      fn.apply(this, args);
      start = current;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, time);
    }
    return clearTimer;
  };
};
