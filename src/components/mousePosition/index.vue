<template>
  <h1>composition-api 实践</h1>
  <p>mouse position {{x}} {{y}}</p>
  <p>mouse position state {{state.x}} {{state.y}}</p>
</template>

<script>
import { useMousePosition, useMousePosition2 } from "./useMousePosition";

export default {
  name: "MousePosition",
  setup() {
    const { x, y } = useMousePosition();
    const state = useMousePosition2();
    return {
      x,
      y,
      state,
    };
  },
};
</script>
