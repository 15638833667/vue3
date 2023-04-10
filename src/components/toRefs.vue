<template>
  <h1>toRefs</h1>
  <p>toRefs demo ref {{ageRef}} {{nameRef}}</p>
  <p>toRefs demo {{age}} {{name}}</p>
</template>

<script>
import { ref, toRef, toRefs, reactive } from "vue";

export default {
  name: "ToRefs",
  setup() {
    const state = reactive({
      age: 20,
      name: "小明",
    });

    setTimeout(() => {
      state.age = 25;
    }, 1500);
    
    const stateAsRefs = toRefs(state); // 将响应式对象，变成普通对象

    // const { age: ageRef, name: nameRef } = stateAsRefs // 每个属性，都是 ref 对象
    // return {
    //     ageRef,
    //     nameRef
    // }


    return stateAsRefs;
  },
};
</script>
