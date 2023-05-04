<template>
  <div>
    <div><input type="text" v-model="word"></div>
    <div><textarea v-model="mean"></textarea></div>
    <div class="center">
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardForm',
  data() {
    return {
      word: '',
      mean: ''
    }
  },
  methods: {
    save() {
      let card = {
        word: this.word,
        mean: this.mean
      }
      // storeに保存
      this.$store.commit('save', card)
      // homeに戻る
      this.$router.push('/')
    }
  }
}
</script>

<!-- scopedを入れるとそのファイルだけstyleを当てることができる -->
<style scoped>
  div {
    margin-bottom: 10px;
  }
  input[type=text] {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 30em;
  }
  button {
    width: 5em;
    margin: 3px;
  }
  .center {
    text-align: center;
  }
</style>