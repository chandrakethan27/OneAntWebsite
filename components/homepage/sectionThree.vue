<template>
  <div>
    <v-container class="intra-section-space bg-red" fluid>
      <!-- Header Section -->
      <div class="flex flex-wrap items-center justify-center gap-2 px-4 ">
        <div
          class="my-5 text-center flex items-center gap-2 relative my-md-1 !font-inter !font-bold text-2xl sm:text-5xl flex-wrap"
        >
          <span>Team up to Unlock Local Deals</span>
          <div style="display: flex; align-items: center;">
            <span class="border-b-2 border-dashed !font-inter">with Friends</span>
          <v-img
            class=" absolute w-10 h-10 hidden md:block sm:w-20 sm:h-20"
            src="/public/images/homepage/sparkle.png"
            alt=""
          />
          </div>
       
        </div>
      </div>

      <!-- Main Grid Container -->
      <v-container class="py-2">
        <!-- First Row with 5 items -->
        <v-row justify="center" class="gap-y-5">
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/pantry.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Pantry Staples</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/snacks.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Snacks and Beverages</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/health_fitness.jpg"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Health and Wellness</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/laundry.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Cleaning Supplies</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/paper.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Paper Products</p>
            </div>
          </v-col>
        </v-row>

        <!-- Second Row with 5 items -->
        <v-row justify="center" class="gap-y-4">
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/baby.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Baby Products</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/dog.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Pet Supplies</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/personal.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Personal Care Items</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/organic.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Organic & Specialty Foods</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="2" class="d-flex justify-center">
            <div class="item-container text-center">
              <v-img
                src="/images/homepage/house.png"
                height="120"
                width="120"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">Household Essentials</p>
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
// No JavaScript required since content is now static
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.item-container {
  align-items: center;

  padding:1.5rem;
}

@media (max-width: 600px) {
  .item-container {
    width: 100%;
    max-width: 200px;
  }
}
</style>
