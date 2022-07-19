<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import AccrodionVue from "../components/Accrodion.vue";
// import MyAsyncComponenetVue from "../components/MyAsyncComponent.vue";

const MyAsyncComponenetVue = defineAsyncComponent(() =>
  import("../components/MyAsyncComponent.vue")
);

const items = [
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
];
</script>

<template>
  <div class="container">
    <main class="p-5 bg-light-blue">
      <h2 class="text-xl font-semibold text-vnet-blue mb-2 text-center">
        Accrodion --VUE Tailwind
      </h2>
      <AccrodionVue :items="items" />
    </main>
    <!--Async-->
    <Suspense>
      <template #default>
        <MyAsyncComponenetVue />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>
