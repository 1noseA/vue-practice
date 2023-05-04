import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: []
  },
  getters: {
  },
  mutations: {
    /* 単語を保存する */
    save (state, newCard) {
      // unshiftは先頭に保存する
      state.cards.unshift(newCard)
    }
  },
  actions: {
  },
  modules: {
  }
})
