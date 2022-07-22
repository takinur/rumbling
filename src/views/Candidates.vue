<script setup lang="ts">
import { ref, defineAsyncComponent, onErrorCaptured } from "vue";
import AccrodionVue from "../components/Accrodion.vue";
// import { ContentLoader } from "vue-content-loader";
import LoadingVue from "../components/Loading.vue";
import MyAsyncComponentVue from "../components/MyAsyncComponent.vue";

// const MyAsyncComponenetVue = defineAsyncComponent({
//   loader: () => import("../components/MyAsyncComponent.vue"),
//   // loadingComponent: LoadingVue,
//   suspensible: true
// });

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
const error : any = ref(null);
onErrorCaptured((e) => {
  error.value = e;
  return true;
});
</script>

<template>
  <div class="container">
    <main class="p-5 bg-light-blue">
      <h2 class="text-xl font-semibold text-vnet-blue mb-2 text-center">
        Accrodion --VUE Tailwind
      </h2>
      <AccrodionVue :items="items" />
    </main>
    <!--Async Suspense with Err handling-->
    <div v-if="error" class="text-red-400">
      Uh oh ... {{  error }}
    </div>
    <Suspense>
      <template #default>
        <MyAsyncComponentVue />
      </template>
      <template #fallback>
         <loading-vue />
      </template>
    </Suspense>
  </div>
</template>
