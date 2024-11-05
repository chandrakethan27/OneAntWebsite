<template>
  <div>
    <v-container class="my-10 my-md-10 py-10 py-md-10 responsive-container ">
      <div class="first-container">
        <v-img
          src="/images/servicesPage/get-into-a-dialogue-with-one-ant.png"
          class="image"
        />
      </div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="3" align-self="center">
            <v-row justify="center" justify-md="end" class="my-5">
              <p class="text-center text-red">
                <v-icon>mdi-email</v-icon> info@oneant.ca
              </p>
            </v-row>
          </v-col>
          <v-col cols="12" md="3" align-self="center">
            <v-row justify="center">
              <v-btn
                class="bg-red text-capitalize font-weight-bold rounded-lg"
                size="large"
                to="/contact-us"
                >Contact us</v-btn
              >
            </v-row>
          </v-col>
          <v-col cols="12" md="3" align-self="center">
            <v-row justify="center" justify-md="start" class="my-5" >
              <p class="text-red">
                <v-icon>mdi-phone</v-icon> +1 (236) 995-4946
              </p>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "~/assets/scss/global.scss";

.image {
  width: 300px;
}

.first-container {
  display: grid;
  place-items: center;
}

@media only screen and (min-width: 450px) {
  .image {
    width: 350px;
  }
}

@media only screen and (min-width: 600px) {
  .image {
    width: 400px;
  }
}

@media only screen and (min-width: 700px) {
  .image {
    width: 500px;
  }
}
@media only screen and (min-width: 800px) {
  .image {
    width: 650px;
  }
}
</style>
