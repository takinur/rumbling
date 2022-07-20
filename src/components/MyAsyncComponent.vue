<script setup lang="ts">
import { ref } from "vue";

const data = ref(null);

await new Promise((r) => setTimeout(r, 5000));

try {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data.value = await res.json();
} catch (e) {
  console.error(e);
}


</script>

<template>
  <pre>{{ data }}</pre>
</template>
