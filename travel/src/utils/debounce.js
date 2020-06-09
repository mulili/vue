let timer = null;
const debounce = (fn, time) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, time);
};
export default debounce;
