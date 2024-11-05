<template>
  <div>
    <v-container class="intra-section-space bg-red" fluid>
      <!-- Header Section -->
      <div class="flex flex-wrap items-center justify-center gap-2 px-4">
        <h2
          class="my-5 text-center flex items-center gap-2 relative my-md-1 !font-inter !font-bold text-h5 text-md-h4"
        >
          <span>Team up to Unlock Local Deals</span>
          <span class="border-b-2 border-dashed !font-inter">with Friends</span>
          <v-img
            class="w-20 h-20 top-0 right-0 hidden md:block"
            src="/public/images/homepage/sparkle.png"
            alt=""
          />
        </h2>
      </div>

      <!-- Main Grid Container -->
      <v-container class="py-2">
        <v-row>
          <!-- Mobile view: full width (12 cols), Desktop: 3 cols -->
          <v-col
            v-for="(item, index) in items"
            :key="index"
            cols="12"
            sm="6"
            md="3"
            class="d-flex justify-center"
          >
            <div class="item-container text-center">
              <v-img
                :src="image_path(item.image_link)"
                height="150"
                width="150"
                cover
                class="rounded-circle mx-auto border-white border-2"
              />
              <p class="mt-1 font-weight-bold">{{ item.title }}</p>
            </div>
          </v-col>
        </v-row>

        <!-- CTA Button -->
        <v-row justify="center" class="my-5" >
            <v-btn class="text-capitalize font-weight-bold text-red " size="large" >
              Start shopping
            </v-btn>
        
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const image_path = (name: string) => `/images/homepage/${name}`;

const items = ref([
  {
    image_link: "events.jpg",
    title: "Events",
  },
  {
    image_link: "fashion_jewelry.jpg",
    title: "Fashion and Jewelry",
  },
  {
    image_link: "health_fitness.jpg",
    title: "Health and Fitness",
  },
  {
    image_link: "fun_entertainment.jpg",
    title: "Fun and Entertainment",
  },
  {
    image_link: "online_courses.jpg",
    title: "Online Courses",
  },
  {
    image_link: "groceries.jpg",
    title: "Groceries",
  },
  {
    image_link: "tours_travel.jpg",
    title: "Travel and Tours",
  },
  {
    image_link: "sports_outdoor.jpg",
    title: "Sports and Outdoors",
  },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
}

@media (max-width: 600px) {
  .item-container {
    width: 100%;
    max-width: 200px;
  }
}
</style>