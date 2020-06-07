const getters = {
  capitalGreeting(state) {
    return state.greeting.toUpperCase();
  },
  /* 
        0.getter是一个接收state的函数；
        1.这个函数可以继续返回一个函数；
        2.在插值表达式中调用该函数并传入参数；
        3.这个被返回的函数将会接收传入的参数；

        👆用来处理对state的某个值进行查询时非常有用👆
        如果需要对state进行修改，仍然放在actions或者mutations里进行处理
     */
  getName: state => id => state.names.find((item, index) => id === index),
};
export default getters;
