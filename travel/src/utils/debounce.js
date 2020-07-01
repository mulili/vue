let timer = null;
const debounce = (fn, time=16) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, time);
};
export default debounce;
