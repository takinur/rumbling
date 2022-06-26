<template>
  <div class="h-screen text-center items-center justify-center">
    <h1 class="text-green-500">{{ msg }}</h1>
    <h2 class="h-16 text-green-500">Is tailwind enabled?</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Candidates",
  data() {
    return {
      msg: "Hello Vue.js!",
    };
  },
});
</script>

<style></style>
