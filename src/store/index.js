import { createStore } from 'vuex'

export default createStore({
  state: {
    theincome: JSON.parse(localStorage.getItem('theincome')) == null ? [] : JSON.parse(localStorage.getItem('theincome')),
    // theTotal:,
  },
  getters: {
  },
  mutations: {
    getIncome(state , payload){
      
      state.theincome.push(payload);
      localStorage.setItem('theincome', JSON.stringify(state.theincome));
    },

  },
  actions: {
  },
  modules: {
  }
})
