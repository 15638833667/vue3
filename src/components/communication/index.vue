<template>
  <h1>组件通信 - 子组件</h1>
  <div class="from-parent">
    <h4>父级传递的数据 - props.topData.source - {{ props.topData.source }}</h4>
    <ul>
      <li
        v-for="item in props.topData.list"
        :key="item.key"
      >{{ item.value }}</li>
    </ul>
  </div>
  <div class="self">
    <input
      type="text"
      v-model="listText"
    >
    <button @click="addToList">添加到列表</button>
  </div>
  <!-- <Children></Children> -->
  <!-- <Children2 v-bind="$attrs" class="wei122" style="color: #009588"></Children2> -->
  
  <Children3 v-bind="$attrs" class="wei123" style="color: #008877"></Children3>
</template>
<script setup>
import Children from "./children.vue";
import Children2 from "./children2.vue";
import Children3 from "./children3.vue";

import { ref, useAttrs, defineProps, defineEmits } from "vue";


const props = defineProps({
  topData: {
    type: Object || Array,
    default: {} || [],
  },
});
// console.log(props.topData);

const listText = ref("");
const addEmit = defineEmits(["add"]);
const addToList = function () {
  addEmit("add", listText.value);
  listText.value = "";
};

// // 透传的属性
// const attrs = useAttrs();
// console.log(attrs);

</script>
<style lang="scss" scoped>
.from-parent {
  padding: 10px;
  border: 1px solid #009588;
  border-radius: 4px;
  h4 {
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
}
.self {
  padding: 10px;
  button {
    background: #009588;
    padding: 5px 10px;
    color: #fff;
    border: 0;
    border-radius: 3px;
    margin-left: 10px;
  }
}
</style>
