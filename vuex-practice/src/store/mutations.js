import mutationTypes from './mutationTypes';

const { INCREMENT } = mutationTypes;
/* 
  Mutation 必须是同步函数
    每一条mutation被记录，devtools 都需要捕捉到前一状态和后一状态的快照；
    异步函数中的回调让这不可能完成，因为当 mutation 触发的时候，状态的改变不可追踪，无法确切的知道回调函数的调用时机；


*/
const mutations = {
  [INCREMENT](state, { count }) {
    state.count += count;
  },
};
export default mutations;
