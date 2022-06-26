<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./components/sections/Header.vue";

</script>

<template>
  <div
    class="wrapper antialiased bg-gray-100"
  >
    <HeaderVue />
    <div class="px-4 py-16">
        <RouterView />
    </div>
  </div>
</template>

<style></style>
