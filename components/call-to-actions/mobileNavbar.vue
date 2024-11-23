<template>
  <div>
    <div v-if="$route.path === '/'">
      <CtaJoinOneAntRed />
    </div>
    <div v-if="$route.path !== '/'"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "~/assets/scss/global.scss";
</style>
