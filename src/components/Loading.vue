<script lang="ts" setup>
import { ContentLoader } from "vue-content-loader";
console.log('From another World');
</script>

<template>
  <div>
    <h1>YES LOADING</h1>
    <content-loader
      viewBox="0 0 476 124"
      primaryColor="#f5f5f5"
      secondaryColor="#000"
    >
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </content-loader>
  </div>
</template>
