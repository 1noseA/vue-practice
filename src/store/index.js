import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    cards: []
  },
  getters: {
    getCount: (state) => {
      return state.cards.length
    },
    getAll: (state) => {
      return state.cards
    }
  },
  mutations: {
    /* 単語を保存する */
    save (state, newCard) {
      newCard.id = ++state.count,
      // unshiftは先頭に保存する
      state.cards.unshift(newCard)
    }
  },
  actions: {
  },
  modules: {
  }
})
