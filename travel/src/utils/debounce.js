/**
 * 返回一个防抖化后的函数 debounceFn ,
 * 重复调用 debounceFn 时会采用防抖策略，而且会返回一个清除计时器的方法 clearTimer
 * 调用 clearTimer 时会清除防抖时最后一个计时器
 */
const debounce = (fn, time=16) => {
  let timer
  let start = Date.now()
  const clearTimer = () => clearTimeout(timer)
  return function debounceFn(...args) {
    const current = Date.now()
    clearTimer()
    if(current - start > time){
      fn.apply(this,args)
      start = current
    } else {
      timer = setTimeout(() => {
        fn.apply(this,args)
      }, time)
    }
    return clearTimer
  }
};
export default debounce;
