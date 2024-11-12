<template>
  <div>
    <v-container class="pt-15 responsive-container intra-section-space">
      <v-row justify="center">
        <div class="text-3xl sm:text-5xl !font-inter font-weight-bold">
          <span class="text-red-darken-2 !font-inter">How</span> does OneAnt Work?
        </div>
      </v-row>

      <!-- Step 1 to Step 3 in the first row -->
      <v-row justify="center" class="pt-5 mt-5 mt-md-10 pt-md-10">
        <v-col cols="12" sm="4" class="position-relative">
          <v-card flat class="grid1 flex text-center">
            <v-img class="image" src="../../public/images/icons/login.svg" max-width="100px" max-height="100px"></v-img>
            <v-card-title class="text-red font-weight-bold">Step 1: Sign Up or Log In</v-card-title>
            <v-card-text>Access exclusive local deals</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" class="position-relative">
          <v-card flat class="grid1 flex text-center">
            <v-img class="image" src="../../public/images/icons/deals.svg" max-width="100px" max-height="100px"></v-img>
            <v-card-title class="text-red font-weight-bold">Step 2: Browse Deals</v-card-title>
            <v-card-text>Explore offers to save more</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" class="position-relative">
          <v-card flat class="grid1 flex text-center">
            <v-img class="image" src="../../public/images/icons/invite.png" max-width="100px" max-height="100px"></v-img>
            <v-card-title class="text-red font-weight-bold">Step 3: Invite Friends</v-card-title>
            <v-card-text>Bring friends to join the savings</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Mobile view: Step 4 first, then Step 5 -->
      <v-row justify="center" class="pt-5 mt-5 d-sm-none">
        <v-col cols="12" sm="4" class="position-relative">
          <v-card flat class="grid1 flex text-center">
            <v-img class="image" src="../../public/images/icons/groups.svg" max-width="100px" max-height="100px"></v-img>
            <v-card-title class="text-red font-weight-bold">Step 4: Create or Join Groups</v-card-title>
            <v-card-text>Team up for better deals</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="pt-5 mt-5 d-sm-none">
        <v-col cols="12" sm="4" class="position-relative">
          <v-card flat class="grid1 flex text-center">
            <v-img class="image" src="../../public/images/icons/purchase.svg" max-width="100px" max-height="100px"></v-img>
            <v-card-title class="text-red font-weight-bold">Step 5: Complete Purchase</v-card-title>
            <v-card-text>Claim your deal with ease</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Desktop view: Original order -->
      <v-row justify="center" class="pt-5 mt-5 d-none d-sm-flex">
        <v-col cols="12" sm="4" class="position-relative">
          <v-card flat class="grid1 flex text-center">
            <v-img class="image" src="../../public/images/icons/purchase.svg" max-width="100px" max-height="100px"></v-img>
            <v-card-title class="text-red font-weight-bold">Step 5: Complete Purchase</v-card-title>
            <v-card-text>Claim your deal with ease</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" class="position-relative">
          <v-card flat class="grid1 flex text-center">
            <v-img class="image" src="../../public/images/icons/groups.svg" max-width="100px" max-height="100px"></v-img>
            <v-card-title class="text-red font-weight-bold">Step 4: Create or Join Groups</v-card-title>
            <v-card-text>Team up for better deals</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="pt-5 mt-5" justify="center">
        <CtaJoinOneAntRed />
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
@import "~/assets/scss/global.scss";

.image {
  width: 100px;
  height: 100px;
  justify-self: center;
}

.position-relative {
  position: relative;
}

.grid1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
