<template>
  <h1>ref-template</h1>
  <p ref="elemRef">我是一行文字elemRef</p>
  <p :ref="elemRef1">我是一行文字elemRef1</p>
  <p :ref="elemRef2">我是一行文字elemRef2</p>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "RefTemplate",
  setup() {
    const elemRef = ref();
    // 获取多个DOM结构
    const elemRef1 = (el)=>{
      console.log(el)
    };
    const elemRef2 = (el)=>{
      console.log(el)
    };

    onMounted(() => {
      console.log("ref template", elemRef.value.innerHTML, elemRef.value);
      console.log(elemRef1.value)
    });

    return {
      elemRef,
      elemRef1,
      elemRef2
    };
  },
};
</script>
