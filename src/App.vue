<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app-desc">
    <h1>vue3简单使用</h1>

    <nav>
      <RouterLink to="/">optionsAPI</RouterLink>
      <RouterLink to="/compositionAPI">compositionAPI</RouterLink>
      <RouterLink to="/compositionAPINew">compositionAPINew</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

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
