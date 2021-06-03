<template>
  <a
    class="editor_val"
    @click='click()'
  >{{ text }}</a>
</template>

<script>
import event from "../utils/event"
export default {
  props: {
    text: String
  },
  methods: {
    click () {
      event.$emit("set-input", this.text)
    }
  }
}
</script>

<style scoped>
.editor_val {
  cursor: pointer;
}
</style>