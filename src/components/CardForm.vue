<template>
  <div>
    <div><input type="text"></div>
    <div><textarea></textarea></div>
    <div class="center">
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardForm',
  methods: {
    save() {
      let card = {
        word: '単語',
        mean: '意味'
      }

      this.$store.commit('save', card)
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