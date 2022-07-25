<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Object,
    default: [
      {
        id: "non",
        heading: "Hmm something went Wrong isn't it?",
        content: "Well here we go again without Data!",
      },
    ],
  },
});

const tasks = ref([
  {
    name: "Events",
    status: "done",
  },
  {
    name: "Queue",
    status: "done",
  },
  {
    name: "Migration",
    status: "done",
  },
  {
    name: "Inspire",
    status: "failed",
  },
]);
</script>

<template>
  <div class="wrapper bg-slate-700 text-white h-screen p-7">
    <div class="mx-2 my-1">
      <div class="space-x-1">
        <span class="px-1 bg-blue-400 text-white uppercase">Info</span>
        <span>I wll find you and I will help You!</span>
      </div>
      <div class="mt-1" v-for="task in tasks" :key="task.name">
        <div class="flex space-x-1">
          <span class="font-bold">{{ task.name }}</span>
          <!--FIXME: Reapeated DOT -->
          <span class="flex-1 after:content-['................................................................'] text-gray-50"></span>
          <span class="font-bold text-green-400 uppercase">
            {{ task.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
