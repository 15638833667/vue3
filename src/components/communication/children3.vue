<template>
  <h2>孙子组件 - 多跟节点属性透传</h2>
  <!-- <div class="composition-api-composition" v-bind="attrs"></div> -->
  <div class="composition-api-composition"></div>
</template>
<script setup>
import { defineProps, useAttrs , defineEmits } from "vue";

// 默认情况下，父组件传递的，但没有被子组件解析为 props 的 attributes 绑定会被“透传”
const props = defineProps({
  fontSize: {
    type: String,
    default: '',
  },
});
console.log(props.fontSize)
// 透传的属性
const attrs = useAttrs();
console.log(attrs)
console.log(attrs.topData)
console.log(attrs.type)
console.log(attrs.style)

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
