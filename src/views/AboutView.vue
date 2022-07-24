<script setup lang="ts">
import { ref } from "vue";
import BaseSelectVue from "@/components/BaseSelect.vue";
import TerminalVue from "@/components/Terminal.vue";

const categories = ref([
  "Fruits",
  "Vegetables",
  "Dairy",
  "Grains",
  "Meats",
  "Drinks",
  "Sweets",
  "Others",
]);

const form = ref({
  category: "",
  name: "",
  description: "",
});
</script>

<template>
  <div class="about">
    <h1 class="text-green-500 text-lg text-center">This is an about page</h1>

    <TerminalVue />
    <div id="some-space" class="my-20">Hi</div>
    <BaseSelectVue
      :options="categories"
      v-model="form.category"
      label="Select a category"
    />
  </div>
</template>

<style></style>
