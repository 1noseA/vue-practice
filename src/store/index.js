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
    },
    // idが一致するカードを取り出す
    getCardById: (state) => (id) => {
      return state.cards.find(card => card.id === id)
    }
  },
  mutations: {
    /* 単語を保存する */
    save (state, newCard) {
      // IDが存在する時（編集）
      if (newCard.id) {
        let x = state.cards.find(card => card.id === newCard.id)
        x.word = newCard.word
        x.mean = newCard.mean
      } else {
        newCard.id = ++state.count,
      // unshiftは先頭に保存する
      state.cards.unshift(newCard)
      }
    },
    delete (state, id) {
      // 指定されたID以外のものを取り出して配列に入れる
      state.cards = state.cards.filter(card => card.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
