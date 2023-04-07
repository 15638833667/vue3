<template>
  <div class="composition-api">
    <h1>This is compositionAPI</h1>
    <p>年龄：{{angref}}</p>
    <p>名字：{{name}}</p>
    <button @click="setAge">点我修改年龄</button>
  </div>
  <Composition msg="test"/>
</template>
<script>
import Composition from '../components/composition.vue'
import {
  ref,
  reactive,
  toRef,
  toRefs,
  watch,
  watchEffect,
  
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "HelloWorld",
  components: {
    Composition
  },
  setup() {
    const angref = ref(30);
    const name = reactive({
      name: 111,
    });
    const setAge = function () {
      angref.value = 20;
    };
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    console.log("setup");
    return {
      angref,
      name,
      setAge,
    };
  },
};
</script>
<style>
</style>
