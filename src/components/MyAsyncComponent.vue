<template>
  <pre>{{ data }}</pre>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "MyAsyncComponent",
  async setup() {
    const data = ref(null);

    await new Promise((r) => setTimeout(r, 2000));

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      data.value = await res.json();
    } catch (e) {
      console.error(e);
    }
    return {
      data,
    };
  },
};
</script>