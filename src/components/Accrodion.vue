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


//sleep for a while to make sure the items are loaded


const current: any = ref(props.items[0].id);
</script>

<template>
  <div class="wrapper">
    <div class="flex justify-center items-start my-2">
      <div class="w-full sm:w-10/12 md:w-1/2 my-1">
        <ul class="flex flex-col">
          <li
            class="bg-white my-2 shadow-lg"
            v-for="item in items"
            :key="item.id"
            v-auto-animate
          >
            <h2
              @click="current = current === item.id ? false : item.id"
              class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
            >
              <span>{{ item.heading }}</span>
              <svg
                :class="{ 'rotate-180': current === item.id }"
                class="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path
                  d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                ></path>
              </svg>
            </h2>
            <div
              class="border-l-2 border-purple-600 overflow-hidden duration-500 transition-all"
              v-if="item.id === current"
            >
              <p class="p-3 text-gray-900" v-html="item.content" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
