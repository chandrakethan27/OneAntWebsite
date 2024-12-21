<template>
  <div>
    <v-container class="intra-section-space bg-red" fluid>
      <!-- Header Section -->
      <div class="flex flex-wrap items-center justify-center gap-2 px-4 ">
        <div
          class="my-5 text-center flex items-center gap-2 relative my-md-1 !font-inter !font-bold text-2xl sm:text-5xl flex-wrap"
        >
          Team up to Unlock Local Deals
          <div style="display: flex; align-items: center;">
            <span class="border-b-2 border-dashed !font-inter">with Friends</span>
            <v-img
              class="absolute w-10 h-10 hidden md:block sm:w-20 sm:h-20"
              src="../../public/images/homepage/sparkle.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- Main Grid Container -->
      <v-container class="py-2">
        <!-- Rows with 6 items each -->
        <v-row justify="center" class="gap-y-4">
          <v-col cols="12" sm="4" md="2" class="d-flex justify-center" v-for="(item, index) in items.slice(0, 6)" :key="index">
            <div class="item-container text-center">
     <v-img
  :src="`/images/Images_AI/${item.image}`"
  :alt="item.alt"
  height="120"
  width="120"
  cover
  class="rounded-circle mx-auto border-white border-2"
/>

              <p class="mt-1 font-weight-bold">{{ item.label }}</p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="gap-y-4">
          <v-col cols="12" sm="4" md="2" class="d-flex justify-center" v-for="(item, index) in items.slice(6, 12)" :key="index">
            <div class="item-container text-center">
     <v-img
  :src="`/images/Images_AI/${item.image}`"
  :alt="item.alt"
  height="120"
  width="120"
  cover
  class="rounded-circle mx-auto border-white border-2"
/>

              <p class="mt-1 font-weight-bold">{{ item.label }}</p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="gap-y-4">
          <v-col cols="12" sm="4" md="2" class="d-flex justify-center" v-for="(item, index) in items.slice(12, 18)" :key="index">
            <div class="item-container text-center">
     <v-img
  :src="`/images/Images_AI/${item.image}`"
  :alt="item.alt"
  height="120"
  width="120"
  cover
  class="rounded-circle mx-auto border-white border-2"
/>

              <p class="mt-1 font-weight-bold">{{ item.label }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- CTA Button -->
        <v-row justify="center" class="my-5">
          <v-btn class="text-capitalize font-weight-bold text-red" size="large">
            Start shopping
          </v-btn>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: "Canned and Jarred Foods", image: "Canned.webp", alt: "Assorted pantry staples available on OneAnt" },
  { label: "Chips, Popcorn, and Crackers", image: "ChipsPopcornandCrackers.webp", alt: "Variety of snacks and beverages offered by OneAnt" },
  { label: "Cleaning Supplies", image: "Cleaning Supplies.webp", alt: "Range of cleaning supplies available through OneAnt" },
  { label: "Dairy and Alternatives", image: "Dairy and Alternatives.webp", alt: "Health and wellness products on OneAnt platform" },
  { label: "First Aid and Wellness", image: "First Aid and Wellness.webp", alt: "Health and wellness products on OneAnt platform" },
  { label: "Fresh Produce", image: "Fresh Produce.webp", alt: "Health and wellness products on OneAnt platform" },
  { label: "Grocery and Snacks", image: "Grocery+Snacks.webp", alt: "Variety of snacks and beverages offered by OneAnt" },
  { label: "Indian Desserts and Sweets", image: "Indian Desserts and Sweets.webp", alt: "Organic and specialty foods offered by OneAnt" },
  { label: "Instant and Convenience Foods", image: "Instant and Convenience Foods.webp", alt: "Variety of snacks and beverages offered by OneAnt" },
  { label: "Instant Coffee, Tea, and Hot Chocolate", image: "Instant Coffee, Tea, and Hot Chocolate.webp", alt: "Variety of snacks and beverages offered by OneAnt" },
  { label: "Kitchen Essentials", image: "Kitchen Essentials.webp", alt: "Household essentials available through OneAnt's platform" },
  { label: "Organic Soups, Smoothies, and Juices", image: "organic soups, smoothies, and juices.webp", alt: "Organic and specialty foods offered by OneAnt" },
  { label: "Pantry Essentials", image: "Pantry Essentials.webp", alt: "Assorted pantry staples available on OneAnt" },
  { label: "Personal Hygiene Products", image: "Personal Hygiene Products.webp", alt: "Personal care items available for purchase on OneAnt" },
  { label: "Pet Essentials", image: "Pet Essentials.webp", alt: "Pet supplies offered through OneAnt's group deals" },
  { label: "Protein Bars and Health Snacks", image: "Protein Bars and Health Snacks.webp", alt: "Variety of snacks and beverages offered by OneAnt" },
  { label: "Ready to Eat Meals", image: "Ready-to-Eat Meals.webp", alt: "Instant and convenience foods offered by OneAnt" },
  { label: "Storage Solutions", image: "Storage Solutions.webp", alt: "Household essentials available through OneAnt's platform" },
];

</script>

<style scoped>
@import "~/assets/scss/global.scss";
.item-container {
  align-items: center;
  padding: 1.5rem;
}

@media (max-width: 600px) {
  .item-container {
    width: 100%;
    max-width: 200px;
  }
}
</style>
