<template>
  <div class="h-screen text-center items-center justify-center">
    <h1 class="text-green-500">{{ msg }}</h1>
    <h2 class="h-16 text-green-500">Is tailwind enabled?</h2>
  </div>
  <div ref="dropdown" class="dropdown">
    <strong class="dropdown-label" @click="show = !show"
      >Click me to open!</strong
    >
    <p class="dropdown-content" v-if="show">Lorum ipsum...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref(); // we need a DOM node
const show = ref(false);

export default defineComponent({
  name: "Candidates",
  data() {
    return {
      msg: "Hello Vue.js!",
    };
  },
  setup() {
    onMounted(() => {
      autoAnimate(dropdown.value); // thats it!
    });
  },
});
</script>

<style></style>
