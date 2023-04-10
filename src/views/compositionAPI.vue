<template>
  <div class="composition-api">
    <h1>This is compositionAPI</h1>
    <!-- <h3>{{ state }}</h3>
    <h4>{{ source }}</h4> -->
  </div>
  <!-- 生命周期 -->
  <!-- <LifeCycles></LifeCycles> -->
  <!-- <LifeCyclesComposition></LifeCyclesComposition> -->
  <!-- <Communication :topData="state" :type="state.type" color="red" fontSize="12" @add="addToList" @addList="addToList"></Communication> -->
  <!-- <Ref></Ref> -->
  <!-- <RefTemplate></RefTemplate> -->
  <!-- <ToRef></ToRef> -->
  <!-- <ToRefs></ToRefs> -->
  <!-- <Watch></Watch> -->
  <!-- <MousePosition></MousePosition> -->
  <GetInstance></GetInstance>
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
import GetInstance from "../components/getInstance.vue";

import { provide, reactive, ref, toRefs } from "vue";

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
    GetInstance
  },
  setup() {
    const state = reactive({
      type: "compositionAPI",
      source: "顶级",
      list: [
        {
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          key: "A",
        },
        { value: "Libero omnis laboriosam, assumenda dolorem.", key: "B" },
        { value: " Corrupti, dolorem excepturi.", key: "C" },
      ],
    });
    const toRefsState = toRefs(state);
    
    // 自定义事件
    function addToList (event){
      console.log(event)
      state.list.push({
        value: event,
        key: event
      })
      console.log(state.list)
    }
    
    // 依赖注入
    const provideVal = ref('provideVal-11111111111111')
    provide('provideVal', provideVal)
    provide('provideStaticVal', 'provideStaticVal')
    setTimeout(()=>{
      provideVal.value = Math.random()
    }, 1500)
    
    return {
      state,
      ...toRefsState,
      addToList
    };
  },
};
</script>
<style>
</style>
