const getScrollTop = () =>
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  window.pageYOffset;

const setScrollTop = scrollTop => {
  document.documentElement.scrollTop = scrollTop;
  document.body.scrollTop = scrollTop;
  window.pageYOffset = scrollTop;
};
export default { getScrollTop, setScrollTop };
