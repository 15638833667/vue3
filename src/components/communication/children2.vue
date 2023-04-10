<template>
  <div class="composition-api-composition">
    <h2>孙子组件 - 单根节点组件属性透传</h2>
  </div>
</template>
<script setup>
import { defineEmits, useAttrs } from "vue";
// 默认情况下，父组件传递的，但没有被子组件解析为 props 的 attributes 绑定会被“透传”
const attrs = useAttrs();
console.log(attrs);
console.log(attrs.topData);
console.log(attrs.type);
console.log(attrs.color);
console.log(attrs.fontSize);

// 事件
setTimeout(() => {
  let randomNum = Math.random();
  console.log(randomNum);
  attrs.onAddList(randomNum)
}, 2000);

</script>
<style lang="scss" scoped>
.composition-api-composition {
  border: 1px solid #ddd;
  padding: 20px;
}
</style>
