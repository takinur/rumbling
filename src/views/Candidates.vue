<script setup lang="ts">
import { ref } from "vue";

const faq = ref([
  {
    id: "why",
    question: "Why did you create it?",
    answer: `We needed a way to animate DOM elements without adding to the
    virtual DOM in Vue and React. And it turned out our solution was gonna work
    great for lots of other use cases as well.`,
  },
  {
    id: "license",
    question: "Is it open source?",
    answer: `It sure is! AutoAnimate is MIT licensed, which basically means you
    are free to take it and do whatever you want with it. If you find it useful
    consider <a href="https://github.com/sponsors/formkit">supporting our open source efforts</a>.`,
  },
  {
    id: "who",
    question: "Who made this?",
    answer: `AutoAnimate is a team effort 💪 . Most of the code was written by
      <a href='https://twitter.com/jpschroeder'>Justin Schroeder</a>,
      <a href='https://twitter.com/0xBOYD'>Andrew Boyd</a> played a key
      role on the docs, and the rest of the <a href='https://formkit.com'>FormKit</a>
      team held down the fort.`,
  },
]);
const current: any = ref(faq.value[0].id);

const handleClick = () => {
  console.log('clicked');
};
const handleRotate = () => {
  console.log('Rotated');
};

</script>

<template>
  <!-- <div class="example accordion-example">
    <ul class="accordion">
      <li class="accordion-item" v-for="q in faq" :key="q.id" v-auto-animate>
        <div
          class="question"
          @click="current = current === q.id ? false : q.id"
        >
          {{ q.question }}
        </div>
        <p class="answer" v-if="q.id === current" v-html="q.answer" />
      </li>
    </ul>
  </div> -->
  <main class="p-5 bg-light-blue">
    <div class="flex justify-center items-start my-2 ">
      <div class="w-full sm:w-10/12 md:w-1/2 my-1 ">
        <h2 class="text-xl font-semibold text-vnet-blue mb-2">
          Accroding --VUE Tailwind
        </h2>
        <ul class="flex flex-col">
          <li class="bg-white my-2 shadow-lg"  >
            <h2
              @click="handleClick()"
              class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
            >
              <span>When will my order arrive?</span>
              <svg
                :class="handleRotate()"
                class="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path
                  d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                ></path>
              </svg>
            </h2>
            <div
              class="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
            >
              <p class="p-3 text-gray-900">
                Shipping time is set by our delivery partners, according to the
                delivery method chosen by you. Additional details can be found
                in the order confirmation
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  display: block;
  background-color: var(--ui-light);
  border-radius: 0.5em;
  overflow: hidden;
}
[data-dark-mode="true"] li {
  background-color: var(--purple-d);
}
.question {
  padding: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.question::before {
  content: "Q";
  font-size: 1.5em;
  margin-right: 0.5em;
  color: var(--primary);
}
[data-dark-mode="true"] .question::before {
  color: var(--purple-m);
}
.answer {
  margin: 0 1rem;
  padding: 0 0 1rem 0;
  font-size: 0.875em;
} */
</style>
