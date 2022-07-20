<script setup lang="ts">
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const items = ref(["🍎 Apple", "🍌 Banana", "🍒 Cherry"]);
const list = ref<HTMLElement>();
const fruitBasket = [
  "🍓 Strawberry",
  "🥥 Coconut",
  "🥝 Kiwi",
  "🍇 Grape",
  "🍉 Watermelon",
  "🍍 Pineapple",
  "🍐 Pear",
  "🍑 Peach",
  "👀 Blueberry",
  "🍊 Orange",
  "🥭 Mango",
];
const remove = (item: any) => {
  items.value = items.value.filter((fruit) => {
    if (fruit === item) {
      fruitBasket.push(fruit);
      return false;
    }
    return true;
  });
};
const add = () => {
  if (fruitBasket.length) {
    items.value.splice(
      Math.round(Math.random() * items.value.length - 1),
      0,
      fruitBasket.shift() as string
    );
  } else {
    alert("Out of fruit!");
  }
};
const randomize = () => items.value.sort(() => (Math.random() > 0.5 ? 1 : -1));
onMounted(() => autoAnimate(list.value as HTMLElement));

//
let todoItems = {};
</script>

<template>
  <div class="flex justify-center wrapper min-h-screen">
    <div class="container w-1/2">
      <button
        class="text-[#7510F7] -mt-1 py-2 px-6 text-sm font-semibold dark:text-white rounded-full border-2 border-[#7510F7] shadow-md block hover:text-white md:inline-block hover:bg-[#7510F7]"
        @click="add"
      >
        + Add Fruit
      </button>
      <button class="ml-5 hover:text-green-700 hover:bg-transparent -mt-1 py-2 px-6 text-sm font-semibold dark:text-white rounded-full border-2 border-green-700 shadow-md block text-white md:inline-block bg-green-700" @click="randomize">
        Randomize
      </button>
      <ul ref="list" class="mt-4">
        <li v-for="item in items" :key="item">
          <!-- Card -->
          <div
            class="bg-white shadow-lg transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 rounded mb-5 flex-col md:flex-row space-y-4 md:space-y-0"
          >
            <!-- Dot Follwing the Left Vertical Line -->
            <div
              class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"
            ></div>

            <!-- Line that connecting the box with the vertical line -->
            <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            <!-- Content that showing in the box -->
            <div class="flex justify-between w-full">
              <span>{{ item }}</span>
              <button @click.prevent="remove(item)" aria-label="Remove Fruit">
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
