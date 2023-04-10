
<template>
  <div class="options-api">
    <h1>options API</h1>
    <input
      type="text"
      v-model="text"
    >
    <p>输入框的内容: {{ text }}</p>
    <button @click="handleClick">添加到列表</button>
    <h4>list:</h4>
    <ul class="list">
      <li
        v-for="(item, index) in  listArr"
        :key="index"
      >{{ item }}</li>
    </ul>
  </div>
</template>

  <script>
import { thisExpression } from "@babel/types";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  name: "home",
  data() {
    return {
      text: "",
      listArr: [],
    };
  },
  setup() {
    console.log("setup");

    // onBeforeMount(() => {
    //   console.log("onBeforeMount");
    // });
    // onMounted(() => {
    //   console.log("onMounted");
    // });
    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate");
    // });
    // onUpdated(() => {
    //   console.log("onUpdated");
    // });
    // onBeforeUnmount(() => {
    //   console.log("onBeforeUnmount");
    // });
    // onUnmounted(() => {
    //   console.log("onUnmounted");
    // });
  },
  beforeCreate() {
    console.log("创建前");
  },
  created() {
    console.log("创建");
  },
  beforeMount() {
    console.log("挂载前");
  },
  mounted() {
    console.log("挂载");
  },
  beforeUpdate() {
    console.log("更新前");
  },
  updated() {
    console.log("更新后");
  },
  beforeUnmount() {
    console.log("卸载前");
  },
  unmounted() {
    console.log("卸载后");
  },
  methods: {
    handleClick() {
      this.listArr.push({
        text: this.text,
      });
      this.text = "";
    },
  },
};
</script>
