<template>
  <header>
    <nav
      class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"
    >
      <div>
        <a href="#"> LOGO </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <ul
          class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
        >
          <li>
            <RouterLink to="/" class="md:p-4 py-2 block hover:text-purple-400"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="md:p-4 py-2 block hover:text-purple-400"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/Candidates"
              class="md:p-4 py-2 block hover:text-purple-400"
              >Candidates</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped></style>
