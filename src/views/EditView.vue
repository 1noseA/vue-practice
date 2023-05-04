<template>
  <CardForm v-if="card" :card="card" />
  <p v-else>指定された単語はありません</p>
</template>

<script>
import CardForm from '@/components/CardForm.vue'
export default {
  name: 'EditView',
  components: {
    CardForm
  },
  computed: {
    card() {
      const id = parseInt(this.$route.params.id)
      return this.$store.getters.getCardById(id)
    }
  }
}
</script>