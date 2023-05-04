<template>
  <div>{{ card.word }}</div>
</template>

<script>
export default {
  name: 'EditView',
  computed: {
    card() {
      const id = parseInt(this.$route.params.id)
      return this.$store.getters.getCardById(id)
    }
  }
}
</script>