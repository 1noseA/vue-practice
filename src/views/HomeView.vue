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

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: 'HomeView',
  // storeのデータを渡す
  computed: {
    hasCards() {
      return this.$store.getters.getCount
    },
    cards() {
      return this.$store.getters.getAll
    }
  }
}
</script>
