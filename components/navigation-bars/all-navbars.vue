<template>
    <div class="mx-auto max-w-7xl">
      <div v-if="viewport.matches('mobile','mobileMedium','mobileWide','tablet')" >
        <mobile-navbar></mobile-navbar>
      </div>
      
      <div v-if="viewport.matches('desktop','desktopMedium','desktopWide')" >
        <desktop-navbar></desktop-navbar>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const viewport = useViewport();
  </script>
  
  <style lang="scss" scoped></style>
  