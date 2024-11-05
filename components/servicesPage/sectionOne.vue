<template>
  <div class="py-10">
    <div class="min-h-[100vh] bg">
      <div>
        <div class="mx-auto max-w-7xl">
          <div class="text-on-image-container">
            <v-typography
            variant="h1"
            class="text-white  text-6xl font-weight-bold"
          >
            Serve <span class="text-red darken-2">More</span> Customers,
          </v-typography>
          <br />
          <v-typography
            variant="h1"
            class="mt-4 text-white relative top-2 text-6xl font-weight-bold"
          >
            Pay <span class="text-red darken-2">Less</span> to Get Them,
          </v-typography>
          <br />
          <v-typography
            variant="h1"
            class="mt-4 text-white relative top-4 text-6xl font-weight-bold"
          >
            Grow <span class="text-red darken-2">Infinitely.</span>
          </v-typography>
          <v-typography>
          <p class="my-5 text-white font-weight-medium text-h6 text-lg-h5">
            22 years of experience crafting customer-focused digital marketing
            <br v-if="$viewport.isGreaterThan('mobileWide')" />
            strategies that empower small businesses to achieve sustainable
            growth
          </p>
        </v-typography>
        <v-btn
        :to="'/contact-us'"
        class="px-4 py-2 rounded-lg red bg-red darken-2"
        elevation="2" 
      >
        Find out how
      </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg {
  background-image: linear-gradient(
      rgba(130, 130, 130, 0.1),
      rgba(1, 1, 1, 0.9)
    ),
    url("/images/servicesPage/digital-marketing-office.jpg");
  background-position: 50% 40%;
  background-size: cover;
  backdrop-filter: brightness(0.1);
  display: grid;
  align-items: center;
}
@import "~/assets/scss/global.scss";

/*
.main-container {
  background-image: linear-gradient(
      rgba(130, 130, 130, 0.1),
      rgba(1, 1, 1, 0.9)
    ),
    url("/images/servicesPage/digital-marketing-office.jpg");
  min-height: 100vh;
  background-position: 50% 40%;
  background-size: cover;
  /* filter: brightness(0.8); */
/* backdrop-filter: brightness(0.1);
  display: grid;
  align-items: center;
}
.text-on-image-container {
  filter: brightness(1);
}

@media only screen and (min-width: 600px) {
  .main-container {
    min-height: 70vh;
  }
} */


.text-red-darken-2 {
  color: #c62828; /* Adjust this color as needed */
}
.bg-red-darken-2 {
  background-color: #c62828; /* Adjust this color as needed */
}
</style>
