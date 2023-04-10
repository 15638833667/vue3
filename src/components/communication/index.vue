<template>
  <div class="composition-api">
    <h1>组件通信</h1>
    <p>年龄：{{ageRef}}</p>
    <p>名字：{{state}}</p>
    <button @click="changeState">点我修改年龄</button>
  </div>
  <Children></Children>
</template>
<script setup>
import Children from "./children.vue";
import {
  ref,
  reactive,
} from "vue";

const ageRef = ref(30);
const state = reactive({
  name: '小明',
});
const changeState = function () {
  ageRef.value = 20;
  state.name = '小红'
};


</script>
<style>
</style>
