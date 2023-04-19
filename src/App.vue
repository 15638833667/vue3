
<template>
  <div class="app-desc">
    <h1>vue3简单使用</h1>

    <nav>
      <RouterLink to="/">testComponents</RouterLink>
      <!-- <RouterLink to="/optionsAPI">optionsAPI</RouterLink>
        <RouterLink to="/compositionAPI">compositionAPI</RouterLink> -->
    </nav>
  </div>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.app-desc {
  h1 {
    line-height: 60px;
  }
  nav {
    line-height: 32px;
    > * {
      text-decoration: none;
      margin-right: 30px;
    }
  }
}
</style>
