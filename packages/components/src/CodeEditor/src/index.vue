<template>
  <div class="code-editor" ref="codeEditor"></div>
</template>

<script name="DCodeEditor" setup>
import { ref, onMounted } from "vue";
import * as monaco from "monaco-editor";

let editor = null;
const init = () => {
  editor = monaco.editor.create(this.$refs.codeEditor, {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
  });
};

onMounted(() => {
  init();
});
</script>

<style lang="scss">
.code-editor {
  width: 300px;
  height: 500px;
}
</style>
