<template>
  <div class="composition-api-composition">
    <h1>子组件</h1>
    <!-- <h2>{{ msg }}</h2> -->
    <Child></Child>
  </div>
</template>
<script>
import Child from './child.vue'
import { ref, reactive, toRef, toRefs, watch, watchEffect, getCurrentInstance } from "vue";
export default {
  name: "HelloWorld",
  components: {
    Child
  },
  setup(props) {
    console.log(toRefs(props))
    // console.log(context)
    const angref = ref(30);
    const name = reactive({
      name: 111,
    });
    const setAge = function () {
      angref.value = 20;
    };
    console.log("setup");
    return {
      angref,
      name,
      setAge,
    };
  },
};
</script>
<style lang="scss" scoped>
.composition-api-composition {
  border: 1px solid #ddd;
  padding: 20px;
}
</style>
