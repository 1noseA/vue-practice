<template>
  <div class="home">
    <ul v-if="hasCards">
      <li v-for="card in cards" :key="card.id">
        {{ card.word }}
      </li>
    </ul>
    <p v-else>単語はありません</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  // storeのデータを渡す
  computed: {
    hasCards() {
      return this.$store.state.cards.length
    },
    cards() {
      return this.$store.state.cards
    }
  }
}
</script>
