<script setup lang="ts">
import { ref } from "vue";
import FruitsListVue from "@/components/FruitsList.vue";
</script>

<template>
  <div>
    <h1 class="font-semibold text-2xl text-indigo-400 text-center my-5">Playground with Fruits!</h1>
    <fruits-list-vue />
  </div>
</template>

<style scoped></style>
