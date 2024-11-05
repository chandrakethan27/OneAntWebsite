<template>
  <div>
    <v-container class="intra-section-space">
      <h2 class="text-center !font-inter text-h5 text-md-h4 font-weight-bold">
        Why OneAnt?
      </h2>
      <v-container class="my-5 my-md-10">
        <v-row>
          <v-col class="grid" cols="12" md="6" lg="3">
            <SvgExpandCustomerReach />
            <h3 class="my-2">{{ items[0].title }}</h3>
            <p class="my-3 text-center text-body-1">
              {{ items[0].description }}
            </p>
          </v-col>
          <v-col class="grid" cols="12" md="6" lg="3">
            <SvgSustainablePrices />
            <h3 class="my-2">{{ items[1].title }}</h3>
            <p class="my-3 text-center text-body-1">
              {{ items[1].description }}
            </p>
          </v-col>
          <v-col class="grid" cols="12" md="6" lg="3">
            <SvgDataDrivenInsight />
            <h3 class="my-2">{{ items[2].title }}</h3>
            <p class="my-3 text-center text-body-1">
              {{ items[2].description }}
            </p>
          </v-col>
          <v-col class="grid" cols="12" md="6" lg="3">
            <SvgEnhancedCx />
            <h3 class="my-2">{{ items[3].title }}</h3>
            <p class="my-3 text-center text-body-1">
              {{ items[3].description }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const image_link = (name: string) => `/images/icons/${name}`;
const items = ref([
  {
    title: "Expand Customer Reach",
    description: "Increase brand exposure and attract a wider audience",
  },
  {
    title: "Sustainable Prices",
    description: "Optimize logistics for reduced carbon footprint and waste",
  },
  {
    title: "Data-Driven Insights",
    description: "Use insights for inventory planning and demand forecasting",
  },
  {
    title: "Enhanced CX",
    description:
      "Benefit from real-time tracking and improved delivery services",
  },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";

.font-description {
  font-size: 1.2rem;
}
</style>
