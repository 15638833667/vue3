<template>
  <div class="composition-api-composition">
    <h1>子组件</h1>
  </div>
</template>
<script setup>
import { ref, reactive, toRef, toRefs, watch, watchEffect } from "vue";
// console.log(props.msg)
const ageRef = ref(30);
const state = reactive({
  name: 111,
});
const setAge = function () {
  ageRef.value = 20;
};
</script>
<style lang="scss" scoped>
.composition-api-composition {
  border: 1px solid #ddd;
  padding: 20px;
}
</style>
