<template>
  <div>
    <v-container>
      <div v-if="$route.path !== '/sellers'">
        <img
          src="/public/images/logos/OneAnt-red-logo.svg"
          alt="one ant logo red color"
          class="image"
        />
      </div>
      <div v-if="$route.path === '/sellers'">
        <img
          src="/public/images/logos/OneAnt-logo-purple.svg"
          alt="one ant logo purple color"
          class="image"
        />
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "~/assets/scss/global.scss";

.image {
  width: 75px;
}
</style>
