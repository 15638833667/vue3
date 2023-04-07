<template>
  <div class="composition-api-composition">
    <h1>子子组件</h1>
    <Children></Children>
  </div>
</template>
<script setup>
import { ref, reactive, toRef, toRefs, watch, watchEffect } from "vue";
import children from "./children.vue";
// console.log(props.msg)
const angref = ref(30);
const name = reactive({
  name: 111,
});
const setAge = function () {
  angref.value = 20;
};
console.log("setup");
</script>
<style lang="scss" scoped>
.composition-api-composition {
  border: 1px solid #ddd;
  padding: 20px;
}
</style>
