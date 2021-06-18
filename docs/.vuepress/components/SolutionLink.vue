<template>
  <a
    class="editor_val"
    @click='click()'
  >{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: String
  },
  methods: {
    click () {
      this.$parent.$emit("set-input", this.text)
    }
  }
}
</script>

<style scoped>
.editor_val {
  cursor: pointer;
}
</style>