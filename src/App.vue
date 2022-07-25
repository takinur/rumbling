<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./components/sections/Header.vue";

// const theme = ref();
// const htmlElem  = document.querySelector("html");

// onMounted(() => {
//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     htmlElem?.classList.add("dark");
//   } else {
//     htmlElem?.classList.remove("dark");
//   }
//   console.log("current theme: ", localStorage.theme);
// });
</script>

<template>
  <div class="wrapper antialiased bg-gray-100">
    <HeaderVue />
    <div class="px-4 py-16">
      <RouterView />
    </div>
  </div>
</template>

<style></style>
