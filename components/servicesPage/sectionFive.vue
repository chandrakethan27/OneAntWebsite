<template>
  <div>
    <v-container class="intra-sections-space">
      <v-row justify="center">
        <p class="text-center font-weight-bold text-h5">
          At OneAnt, we are working to promote sustainability, empower local
          businesses, and create community.
        </p>
      </v-row>
      <v-row justify="center">
        <p class="mt-2 text-center text-body-1">
          OneAnt aims to bridge the gap between local businesses and customers
          by offering a platform that provides value through deals and promotes
          collaborative and sustainable shopping practices
        </p>
      </v-row>
      <v-row justify="center" class="my-10">
        <button class="px-12 py-3 text-white bg-red-600 rounded-md shadow-md">
          OneAnt Home
        </button>
      </v-row>
    </v-container>
    <v-container class="responsive-container">
      <v-row class="" justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="grid">
            <v-img
              class="my-5 image"
              :src="images_path(item['icon_link'])"
            ></v-img>
            <h3 class="text-center">{{ item["title"] }}</h3>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const images_path = (name: string) => `/images/icons/${name}`;

const items = ref([
  {
    icon_link: "TrustWorthyIcon.svg",
    title: "Trustworthy Recommendations",
  },
  {
    icon_link: "Enhancedicon.svg",
    title: "Enhanced Product Discovery",
  },
  {
    icon_link: "SavingsIcon.svg",
    title: "Definite Savings",
  },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.image {
  width: 100px;
}
</style>
