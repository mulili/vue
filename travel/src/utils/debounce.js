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
