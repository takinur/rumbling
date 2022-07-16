<script setup lang="ts">
import { ref } from "vue";
import AccrodionVue from "../components/Accrodion.vue";

const items = ([
  {
    id: "why",
    heading: "Why did you create it?",
    content: "well here we go again",
  },
  {
    id: "ok",
    heading: "Is it okay ?",
    content: "Yes, itz okaz",
  },
  {
    id: "eh",
    heading: "Eh this?",
    content: "eh this is a test",
  },
]);
</script>

<template>
  <div class="container">
    <main class="p-5 bg-light-blue ">
      <h2 class="text-xl font-semibold text-vnet-blue mb-2">Accrodion --VUE Tailwind</h2>
      <AccrodionVue :items="items" />
    </main>
    
  </div>
</template>
