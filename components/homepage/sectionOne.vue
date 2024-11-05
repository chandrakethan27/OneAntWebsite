<template>
  <div>
    <v-container class="main-container" fluid>
      <v-row class="h-full">
        <v-col class="flex">
          <v-container class="text-on-image-container mb-32 my-auto">
            <h1
              class="text-white flex items-end gap-4 !font-inter pt-15 text-h3 text-md-h2 text-lg-h1 font-weight-bold"
            >
              Your
              <span class="flex flex-col text-3xl font-black text-red-600"
                ><span class="!font-inter">Friends,</span>
                <span class="!font-inter">Deals,</span>
                <span class="!font-inter">Savings</span>
              </span>
            </h1>

            <p class="my-5 text-white !font-inter font-weight-medium">
              Experience the power of buying with friends, your wallet will
              thank you.
            </p>
            <CtaJoinOneAntRed />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "~/assets/scss/global.scss";

.main-container {
  background-image: linear-gradient(rgba(1, 1, 1, 10), rgba(130, 130, 130, 0.1)),
    url("/public/images/homepage/homepage.jpg");
  height: 70vh;
  background-position: 50% 40%;
  background-size: cover;
  /* filter: brightness(0.8); */
  backdrop-filter: brightness(0.1);
}
.text-on-image-container {
  filter: brightness(1);
}
</style>
