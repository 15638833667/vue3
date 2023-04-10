<template>
  <div class="composition-api-composition">
    <h2>孙子组件</h2>
    <h4>{{ provideVal }}</h4>
    <h4>{{ provideStaticVal }}</h4>
  </div>
</template>
<script setup>
import { inject, getCurrentInstance } from "vue";
// console.log(props.msg)
const provideVal = inject("provideVal");
const provideStaticVal = inject("provideStaticVal");

// 事件总线
const cxt = getCurrentInstance(); //相当于Vue2中的this
const bus = cxt.appContext.config.globalProperties.$bus;
setTimeout(() => {
  bus.emit("printMessage", 1234567);
}, 3000);
</script>
<style lang="scss" scoped>
.composition-api-composition {
  border: 1px solid #ddd;
  padding: 20px;
}
</style>
