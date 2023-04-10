<template>
  <h1>toRef</h1>
  <p>toRef demo - {{ageRef}} </p>
  <p>toRef demo - state数据 - {{state.name}} {{state.age}}</p>
  <p>toRef demo - computed - {{age1}} </p>
</template>

<script>
import { ref, toRef, reactive, computed } from "vue";

export default {
  name: "ToRef",
  setup() {
    const state = reactive({
      age: 20,
      name: "小明",
    });

    // toRef 如果用于普通对象（非响应式对象），产出的结果不具备响应式
    // const state = {
    //   age: 20,
    //   name: "小明",
    // };

    // computed 返回的是一个类似于 ref 的对象，也有 .value
    const age1 = computed(() => {
      return state.age + 1;
    });

    const ageRef = toRef(state, "age");

    setTimeout(() => {
      state.age = 25;
    }, 1500);

    setTimeout(() => {
      ageRef.value = 30; // .value 修改值
    }, 3000);

    return {
      state,
      ageRef,
      age1,
    };
  },
};
</script>
