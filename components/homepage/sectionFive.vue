<template>
  <div>
    <v-container class="intra-section-space">
      <!-- <v-row justify="center">
        <h2 class="my-5 text-h4 text-md-h4 font-weight-bold">
          What is OneAnt?
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
      </v-row> -->
      <v-container class="mx-auto max-w-7xl">
        <v-row class="" justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="flex flex-col items-center gap-1">
              <img class="my-5 image" :src="images_path(item['icon_link'])" />
              <h3 class="max-w-sm text-xl font-semibold text-center">
                {{ item["title"] }}
              </h3>
            </div>
          </v-col>
        </v-row>

 <!-- <v-row class="md:py-4 ">
  <v-col
    v-for="(benefit, index) in benefits.slice(0, 3)"
    :key="index"
    cols="12"      
    md="4"           
  >
    <p class="text-center text-body-2 text-md-body-1">
      <v-icon class="size-4 text-green-darken-2">mdi-check</v-icon>
      <span class="ml-1 text-lg font-semibold text-center">{{ benefit }}</span>
    </p>
  </v-col>
</v-row> -->

<!-- Second Row (2 items) -->
<!-- <v-row class=" ">
  <v-col
    v-for="(benefit, index) in benefits.slice(3, 5)"
    :key="index + 3"
    cols="12"       
    md="6"       
  >
    <p class="text-center text-body-2 text-md-body-1">
      <v-icon class="size-4 text-green-darken-2">mdi-check</v-icon>
      <span class="ml-1 text-lg font-semibold text-center">{{ benefit }}</span>
    </p>
  </v-col>
</v-row> -->
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const images_path = (name: string) => `/images/icons/${name}`;
const items = ref([
  {
    icon_link: "clock.png",
    title: "No Impulse Buys",
  },
  {
    icon_link: "fiance.png",
    title: "No Hidden Fees",
  },
  {
    icon_link: "refund.png",
    title: "Refund Guarantee",
  },
  {
    icon_link: "internet.png",
    title:   "Online Redemption",
  },
  {
    icon_link: "cancellation.png",
    title: "No Vouchers Needed",
  },
]);
const benefits = ref([
  // "Definite Savings",
  // "Product Trials",
  // "Peer Recommendations",
  // "Sustainable Shopping",
  "No Impulse Buys",
  "No Hidden Fees",
  "Refund Guarantee",
  "Online Redemption",
  "No Vouchers Needed"
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.image {
  width: 100px;
  height: 100px;
}
</style>
