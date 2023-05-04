<template>
  <div>
    <div><input type="text"></div>
    <div><textarea></textarea></div>
    <div class="center">
      <button>保存</button>
    </div>
  </div>
</template>

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