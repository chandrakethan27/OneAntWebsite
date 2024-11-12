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
          <p class="py-2">Join Group or Create Group</p>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" sm="6">
              <div>
                <h2 class="py-4 text-lg font-semibold">Group Deals</h2>
              </div>
              <div class="pb-1 ">
              
              </div>
              <v-card class="rounded-lg">
                <v-list>
                  <v-list-item class="custom-list-item">
                  <ul class="bullet-list">
                  <li>
                  Get a link with deal from a
                  friend.
                  </li>

                  <li>
                  Click the deal link to view
                  details.
                  </li>
                  <li>
                  Select the option to join the
                  group deal.
                  </li>

                  <li>
                  Confirm deal details and
                  complete the payment.
                  </li>

                  <li>                 
                     Once the group is full, your
                    order will be processed!
                  </li>
                  </ul>

                </v-list-item>
               
                  <v-divider></v-divider>
                  <!-- <v-card-subtitle
                    ><span class="text-black text-h6 font-weight-bold">
                      $30
                    </span>
                    <span class="text-decoration-line-through">$100</span>
                    <span
                      class="text-overline text-green-darken-4 font-weight-bold"
                    >
                      70% OFF</span
                    ></v-card-subtitle>
                   -->
                </v-list>
                <v-container>
                  <v-row justify="center" class="mb-2">
                    <v-btn class="text-blue-darken-4" elevation="5" to="/signup"
                      ><v-icon class="text-blue-darken-4"
                        >mdi-account-plus</v-icon
                      >
                      <span class="ma-2">JOIN A GROUP</span></v-btn
                    >
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col class=" ">
              <div>
                <h2 class="py-4 text-lg font-semibold">Your Groups</h2>
              </div>
              <div class="pb-1 ">
              
            </div>
     
              <v-card class="rounded-lg">
                <v-list>
                  <v-list-item class="custom-list-item">
                  <ul class="bullet-list">
                  <li>
                    Get a link with deal from a
                    friend.
                  </li>

                  <li>
                    Click the deal link to view
                    details.
                  </li>
                  <li>
                    Select the option to join the
                    group deal.
                  </li>

                  <li>
                    Confirm deal details and
                    complete the payment.
                  </li>

                  <li>                 
                    Once the group is full, your
                    order will be processed!
                  </li>
                  </ul>

                </v-list-item>
                  

                  <!-- <v-card-subtitle
                    ><span class="text-black text-h6 font-weight-bold">
                      $30
                    </span>
                    <span class="text-decoration-line-through">$100</span>
                    <span
                      class="text-overline text-green-darken-4 font-weight-bold"
                    >
                      70% OFF</span
                    ></v-card-subtitle
                  > -->
 
                </v-list>

                <v-container>
                  <v-row justify="center" class="mb-2">
                    <v-btn class="text-blue-darken-4" elevation="5" to="/signup"
                      ><v-icon class="text-blue-darken-4"
                        >mdi-account-plus</v-icon
                      >
                      <span class="ma-2">CREATE GROUP</span></v-btn
                    >
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="flex items-center justify-center p-4">
      <button
        class="px-8 bg-red-500 !font-inter font-semibold text-white rounded-md py-2"
      >
        Explore Deals
      </button>
    </div> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bullet-list {
  list-style-type:disc !important;
  padding-left: 1rem !important;
}

.bullet-list li {
  font-weight: thin;
  display: list-item !important;
  margin-bottom: 0.5rem;
}

/* Override Vuetify's default padding */

@import "~/assets/scss/global.scss";
</style>
