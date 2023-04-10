<template>
  <div class="composition-api">
    <h1>This is compositionAPI</h1>
    <h2>{{ nameRef }}</h2>
  </div>
  <!-- 生命周期 -->
  <!-- <LifeCycles></LifeCycles> -->
  <!-- <LifeCyclesComposition></LifeCyclesComposition> -->
  <Communication></Communication>
  <!-- <Watch></Watch> -->
  <!-- <Ref></Ref> -->
  <!-- <RefTemplate></RefTemplate> -->
  <!-- <ToRef></ToRef> -->
  <!-- <ToRefs></ToRefs> -->
  <!-- <MousePosition></MousePosition> -->
</template>
<script>
import LifeCycles from "../components/lifeCycles.vue";
import LifeCyclesComposition from "../components/lifeCyclesComposition.vue";
import Communication from "../components/communication/index.vue";
import Watch from "../components/watch.vue";
import Ref from "../components/ref.vue";
import RefTemplate from "../components/refTemplate.vue";
import ToRef from "../components/toRef.vue";
import ToRefs from "../components/toRefs.vue";
import MousePosition from "../components/mousePosition/index.vue";

import { reactive, } from "vue";

export default {
  name: "HelloWorld",
  components: {
    LifeCycles,
    LifeCyclesComposition,
    Watch,
    Ref,
    RefTemplate,
    ToRef,
    ToRefs,
    MousePosition,
    Communication,
  },
  setup() {
    const state = reactive({
      type: "compositionAPI",
      source: "顶级",
    });
    return {
      state,
    };
  },
};
</script>
<style>
</style>
