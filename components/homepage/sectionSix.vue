<template>
  <div>
    <v-container class="intra-section-space">
      <v-row justify="center">
        <h2 class="my-5 text-h4 text-md-h4 font-weight-bold">
          OneAnt Benefits
        </h2>
      </v-row>
      <v-row justify="center">
        <p class="text-center font-weight-bold">
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
        <v-btn class="bg-red" to="sellers"> Sellers start here </v-btn>
      </v-row>
      <v-container class="mx-auto max-w-7xl">
        <v-row class="" justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="flex flex-col items-center gap-2">
              <img class="my-5 image" :src="images_path(item['icon_link'])" />
              <h3 class="max-w-sm text-xl font-semibold text-center">
                {{ item["title"] }}
              </h3>
            </div>
          </v-col>
        </v-row>

        <v-row class="py-10 my-2 my-md-5">
          <v-col
            v-for="(benefit, index) in benefits"
            :key="index"
            cols="6"
            md="3"
          >
            <p class="text-center text-body-2 text-md-body-1">
              <v-icon class="size-4 text-green-darken-2">mdi-check</v-icon
              ><span class="ml-1 text-lg font-semibold text-center">{{
                benefit
              }}</span>
            </p>
          </v-col>
        </v-row>
      </v-container>
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
const benefits = ref([
  "Definite Savings",
  "Product Trials",
  " Peer Recommendations",
  "Sustainable Shopping",
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.image {
  width: 100px;
  height: 100px;
}
</style>
