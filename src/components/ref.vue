<template>
  <h1>ref</h1>
  <p>ref demo ageRef {{ageRef}} </p>
  <p>ref demo state.name {{state.name}}</p>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Ref",
  setup() {
    const ageRef = ref(20); // 值类型 响应式
    const nameRef = ref("小明");

    const state = reactive({
      name: nameRef,
    });

    setTimeout(() => {
      console.log("ageRef", ageRef.value);

      ageRef.value = 25; // .value 修改值
      nameRef.value = "小明A";
    }, 1500);

    return {
      ageRef,
      state,
    };
  },
};
</script>
