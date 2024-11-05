<template>
  <div>
    <v-container class="my-5 bg-grey-lighten-3 my-md-10 rounded-xl">
      <v-row justify="center" class="py-5 py-md-10">
        <v-col cols="12" lg="4" align-self="start">
          <h2 class="text-[30px] font-black">
            Join your community to discover, share and save together
            <v-img
              class="inline w-12 h-12 ml-4"
              src="/public/images/homepage/arrow.png"
              alt=""
            />
          </h2>
          <p class="py-2">Join Group to get these deals</p>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" sm="6">
              <div>
                <h2 class="py-4 text-lg font-semibold">Group Deals</h2>
              </div>
              <v-card class="rounded-lg">
                <v-list>
                  <v-list-item>
                    <h4 class="pa-0 ma-0">Sky Importer</h4>
                    <v-spacer></v-spacer>
                    <template v-slot:append>
                      <v-icon>mdi-account</v-icon>
                    </template>
                  </v-list-item>
                  <v-list-item>
                    <p class="py-0 my-0 text-body-2">2 members, 1 awating</p>
                    <template v-slot:append>
                      <p class="px-2 rounded-lg text-caption bg-grey-lighten-1">
                        3 PC
                      </p>
                    </template>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-card-subtitle
                    ><span class="text-black text-h6 font-weight-bold">
                      $30
                    </span>
                    <span class="text-decoration-line-through">$100</span>
                    <span
                      class="text-overline text-green-darken-4 font-weight-bold"
                    >
                      70% OFF</span
                    ></v-card-subtitle
                  >
                  <v-list-item>
                    <v-container class="bg-grey-lighten-4 text-yellow-darken-4">
                      <v-row>
                        <v-col>
                          <v-icon>mdi-gift</v-icon> Deal expiring in:

                          <v-icon>mdi-clock</v-icon>

                          09:56
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-list-item>
                </v-list>
                <v-container>
                  <v-row justify="center" class="mb-2">
                    <v-btn class="text-blue-darken-4" elevation="5" to="/signup"
                      ><v-icon class="text-blue-darken-4"
                        >mdi-account-plus</v-icon
                      >
                      <span class="ma-2">Request to join</span></v-btn
                    >
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col>
              <div>
                <h2 class="py-4 text-lg font-semibold">Your Groups</h2>
              </div>
              <v-card class="rounded-lg">
                <v-list>
                  <v-list-item>
                    <h4 class="pa-0 ma-0">Sky Importer</h4>
                    <v-spacer></v-spacer>
                    <template v-slot:append>
                      <v-icon>mdi-account</v-icon>
                    </template>
                  </v-list-item>
                  <v-list-item>
                    <p class="py-0 my-0 text-body-2">2 members, 1 awating</p>
                    <template v-slot:append>
                      <p class="px-2 rounded-lg text-caption bg-grey-lighten-1">
                        3 PC
                      </p>
                    </template>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-card-subtitle
                    ><span class="text-black text-h6 font-weight-bold">
                      $30
                    </span>
                    <span class="text-decoration-line-through">$100</span>
                    <span
                      class="text-overline text-green-darken-4 font-weight-bold"
                    >
                      70% OFF</span
                    ></v-card-subtitle
                  >
                  <v-list-item>
                    <v-container class="bg-grey-lighten-4 text-yellow-darken-4">
                      <v-row>
                        <v-col>
                          <v-icon>mdi-gift</v-icon> Deal expiring in:

                          <v-icon>mdi-clock</v-icon>

                          09:56
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-list-item>
                </v-list>
                <v-container>
                  <v-row justify="center" class="mb-2">
                    <v-btn class="text-blue-darken-4" elevation="5" to="/signup"
                      ><v-icon class="text-blue-darken-4"
                        >mdi-account-plus</v-icon
                      >
                      <span class="ma-2">Buy with Group</span></v-btn
                    >
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="flex items-center justify-center p-4">
      <button
        class="px-8 bg-red-500 !font-inter font-semibold text-white rounded-md py-2"
      >
        Explore Deals
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "~/assets/scss/global.scss";
</style>
