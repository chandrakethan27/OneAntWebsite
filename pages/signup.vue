<template>
  <div>
    <v-container class="py-5 py-md-16 form-container">
      <v-row class="my-5" justify="center">
        <v-col cols="4" align-self="center">
          <v-btn flat to="/" size="large">
            <v-icon class="text-deep-purple-accent-2" size="large"
              >mdi-arrow-left</v-icon
            >
          </v-btn>
        </v-col>
        <v-col>
          <h1>Sign Up</h1>
        </v-col>
      </v-row>
      <v-card class="pa-10 rounded-lg form-card">
        <form action="https://formspree.io/f/xvoejbzp" method="POST">
          <p class="text-body-1 my-3">Personal Details</p>
          <v-text-field
            placeholder="First Name"
            class="input-field"
            name="First Name"
          >
          </v-text-field>
          <v-text-field placeholder="Last Name" name="Last Name"></v-text-field>

          <v-text-field placeholder="Phone Number" name="Phone"></v-text-field>
          <v-text-field placeholder="Email Address" name="Email"></v-text-field>
          <p class="text-body-1 my-3">Business Details</p>
          <v-text-field
            placeholder="Business Name"
            name="Business Name"
          ></v-text-field
          ><v-text-field
            placeholder="Product Selling"
            name="Product Selling"
          ></v-text-field
          ><v-text-field placeholder="Team Size" name="Team Size"></v-text-field
          ><v-text-field placeholder="Location" name="Location"></v-text-field>
          <p class="text-body-1 my-3">Password</p>
          <v-text-field placeholder="Enter Password" name="Password" type="password">
          </v-text-field>
          <v-text-field
            placeholder="Confirm Password"
            name="Confirm Password"
            type="password"
          ></v-text-field>

          <v-btn class="bg-deep-purple-accent-2" type="submit">Submit</v-btn>
        </form>
      </v-card>
    </v-container>
    <v-container class="form-hubspot"></v-container>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Sign up",
});
</script>

<style scoped>
@import "~/assets/scss/global.scss";

.form-card {
  border: 0.5px solid lightgrey;
}

.form-container {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .form-container {
    width: 500px !important ;
  }
}

@media only screen and (min-width: 900px) {
  .form-container {
    width: 650px !important ;
  }
}
/* @media only screen and (min-width:1100px){
      .form-container{
        width: 500px !important;
      }
    } */
</style>
