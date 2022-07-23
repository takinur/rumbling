<script setup lang="ts">
import { ref } from "vue";
import BaseSelectVue from "@/components/BaseSelect.vue";

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
    <h1 text-green-500>This is an about page</h1>
    <BaseSelectVue
      :options="categories"
      v-model="form.category"
      label="Select a category"
    />
  </div>
</template>

<style></style>
