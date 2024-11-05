<template>
  <div>
    <v-container fluid class="main-container">
      <v-row justify="center">
        <v-col
          align-self="center"
          class="container-one"
          cols="12"
          md="4"
        ></v-col>
        <v-col class="grid text-white container-two" cols="12" md="4">
          <div class="z-10">
            <h2
              class="!font-inter text-center text-h4 text-md-h3 font-weight-bold"
            >
              Ready to grow your business?
            </h2>
            <v-row justify="center" class="my-5">
              <button
                class="flex items-center gap-4 px-8 py-3 border rounded-lg ring-2 ring-white"
              >
                Get Started
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 12H19.5"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 19L19.5 12L12.5 5"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </v-row>
          </div>
        </v-col>
        <v-col class="container-three" cols="12" md="4"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "~/assets/scss/global.scss";
.main-container {
  min-height: 600px;
}

.container-one {
  background: url("/images/cta/signup/image-one.jpg");
  background-size: cover;
  background-position: 70% 40%;
  min-height: 400px;
}
.container-two {
  background: url("/images/cta/signup/image-two.jpg");
  background-size: cover;
  background-position: 70% 40%;
  min-height: 400px;
  position: relative;
  z-index: 1000;
}
.container-two::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.5);
}
.container-three {
  background: url("/images/cta/signup/image-three.jpg");
  background-size: cover;
  background-position: 70% 40%;
  min-height: 400px;
}

.container-containing-signup {
  background: rgba(20, 20, 20, 0.5);
  padding: 30px 20px;
}
</style>
