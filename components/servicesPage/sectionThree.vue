<template>
  <section class="w-full bg-red-600 md:h-[550px] mt-12 md:mt-20 md:px-0 px-4">
    <div class="pt-10 mx-auto max-w-7xl md:pt-20">
      <div class="flex items-center justify-between">
        <v-typography>
        <h1 class="text-xl font-bold text-white md:text-5xl">
          Your marketing department upgrade, <br />
          <span class="border-b-4 border-dashed">minus</span> the overhead.
        </h1>
      </v-typography>
      <v-img
      src="/images/servicesPage/gold-leaf.png"
      class="w-36 h-36"
      contain
      alt=""
    />
      </div>
    </div>

    <div
      class="flex flex-wrap items-center justify-between py-10 mx-auto max-w-7xl md:grid-cols-2"
    >
      <!-- Column 1 -->
      <div class="col-span-1">
        <ul class="">
          <li class="flex items-center justify-between py-3">
            <div class="flex items-center space-x-4">
              <v-img
                src="/public/images/servicesPage/Picture4.png"
                alt=""
                class="w-20 h-20 mr-3"
              />
              <v-typography>
              <div class="font-semibold text-white md:text-lg text-md">
                Fractional CMO Services
              </div>
            </v-typography>
            </div>
          </li>
          <li class="flex items-center justify-between py-3">
            <div class="flex items-center space-x-4">
              <v-img
                src="/public/images/servicesPage/pict-5.png"
                alt=""
                class="w-20 h-20 mr-3"
              />
              <v-typography>
              <div class="font-semibold text-white md:text-lg text-md">
                Digital Transformation Consulting
              </div>
            </v-typography>
            </div>
          </li>
          <li class="flex items-center justify-between py-3">
            <div class="flex items-center space-x-4">
              <v-img
                src="/public/images/servicesPage/pict-6.png"
                alt=""
                class="w-20 h-20 mr-3"
              />
            <v-typography>
              <div class="font-semibold text-white md:text-lg text-md">
                Digital Marketing & Ecommerce Consulting
              </div>
            </v-typography>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="hidden w-full grid-cols-1 gap-4 lg:grid lg:w-auto md:grid-cols-2"
      >
        <div
          class="flex flex-col items-center justify-center col-span-1 gap-4 p-12 bg-white shadow-lg lg:-mb-20 w-72 rounded-xl"
        >
          <v-img class="w-48 h-48" src="/public/images/servicesPage/pict-7.png" />
          <div class="text-center">
            <v-typography>
            <span class="max-w-sm text-xl font-semibold text-red-600">
              22 years of Expertise
            </span>
          </v-typography>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center col-span-1 gap-4 p-12 bg-white shadow-lg md:-mb-20 w-72 rounded-xl"
        >
          <v-img class="w-48 h-48" src="/public/images/servicesPage/pict-8.png" />
          <div class="text-center">
          <v-typography>
            <span class="text-xl font-semibold text-red-600">
              Loved by 100+ clients and growing!
            </span>
            </v-typography>
          </div>
        </div>
      </div>
      <!-- Column 2 -->
      <!-- <div class="grid grid-cols-2 mt-5 md:gap-x-12 gap-x-3 md:mt-20">
        <div class="p-6 text-center bg-black shadow-2xl rounded-3xl">
          <div class="flex items-center justify-center pt-5 md:pt-10">
            <img
              src="/public/images/servicesPage/Picture7.png"
              class="w-36 h-36"
              alt=""
            />
          </div>
          <div class="pt-10">
            <p class="text-lg font-bold text-orange-600">
              22 years
              <br />
              of Expertise
            </p>
          </div>
        </div>
        <div class="p-4 bg-white shadow-2xl rounded-3xl">
          <div class="flex items-center justify-center pt-5 md:pt-10">
            <img src="/public/images/servicesPage/Picture8.png" alt="" />
          </div>
          <div class="pt-5">
            <p class="text-lg font-bold text-center text-orange-600">
              Loved by
              <br />
              100+ clients
              <br />
              and growing!
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
// const items = ref([
//   "Fractional CMO Services",
//   "Digital Transformation Consulting",
//   "Digital Marketing & Ecommerce Consulting",
// ]);

// const cards = ref([
//   {
//     title: "22 Years of Expertise",
//     image_link: "/images/servicesPage/icons/happy-face.png",
//   },
//   {
//     title: "Loved by 100+ clients and growing!",
//     image_link: "/images/servicesPage/icons/happy-face.png",
//   },
// ]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";

/* .list {
  list-style-type: disc;
}

@media only screen and (min-width: 600px) {
  .cards-column {
    translate: 0px 6rem;
  }
} */
</style>
