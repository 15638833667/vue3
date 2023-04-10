<template>
  <h1>compositionAPI - 生命周期</h1>
</template>
<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
console.log("setup");

onBeforeMount(() => {
  console.log("compositionAPI - onBeforeMount");
});
onMounted(() => {
  console.log("compositionAPI - onMounted");
});
onBeforeUpdate(() => {
  console.log("compositionAPI - onBeforeUpdate");
});
onUpdated(() => {
  console.log("compositionAPI - onUpdated");
});
onBeforeUnmount(() => {
  console.log("compositionAPI - onBeforeUnmount");
});
onUnmounted(() => {
  console.log("compositionAPI - onUnmounted");
});
</script>
<style lang="scss" scoped>
</style>
