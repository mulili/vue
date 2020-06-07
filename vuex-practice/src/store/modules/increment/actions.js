import mutationTypes from '../../mutationTypes';
/* 
  1. mutation 必须同步执行；
  2. action 不受此限制，可以在 action 内部执行异步操作；
*/
const { INCREMENT, ASYNC_INCREMENT } = mutationTypes;
const actions = {
  [ASYNC_INCREMENT]({ commit }, value) {
    /* 
      可以通过将action的处理函数处理为返回一个promise，并在特定的时机进行resolve/reject，
      然后就可以通过 async / await 或者 promise.then /catch/finally 来调用action
      这样就可以清晰的控制复杂的异步流程了
    */
    return new Promise(resolve => {
      setTimeout(() => {
        commit(INCREMENT, value);
        resolve();
      }, 2000);
    });
  },

  // 👇 更能说明action的使用场景的官方示例 👇
  // checkout({ commit, state }, products) {
  // 把当前购物车的物品备份起来
  // const savedCartItems = [...state.cart.added];
  // 发出结账请求，然后乐观地清空购物车
  // commit(types.CHECKOUT_REQUEST);
  // 购物 API 接受一个成功回调和一个失败回调
  // buyProducts(
  //   products,
  //   // 成功操作
  //   () => commit(types.CHECKOUT_SUCCESS),
  //   // 失败操作
  //   () => commit(types.CHECKOUT_FAILURE, savedCartItems)
  // );
  // },
};
export default actions;
