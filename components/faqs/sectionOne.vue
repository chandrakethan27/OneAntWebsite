<template>
  <div class="bg-[#000000E5]/[90%]s">
    <v-container class="main-container bg-[#000000E5]" fluid>
      <v-container class="opening-text-container">
        <h1 class="text-center text-[36px] font-bold !font-inter">
          Frequently Asked Questions
        </h1>
        <p class="my-5 text-center text-grey">
          Get the answers of all your questions below. If you still have doubts
          or questions, please reach out to help@aneant.com.
        </p>
      </v-container>
      <v-container class="expansion-container">
        <v-expansion-panels>
          <v-expansion-panel
            bg-color="#000000E5"
            v-for="(panel, index) in panels"
            :key="index"
          >
            <v-expansion-panel-title class="text-white text-h6">{{
              panel["title"]
            }}</v-expansion-panel-title>
            <v-expansion-panel-text class="text-grey">{{
              panel["text"]
            }}</v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const panels = ref([
  {
    title: "what is OneAnt?",
    text: "OneAnt is a unique shopping platform that focuses on supporting and promoting local businesses by curating exclusive in-store deals, offering personalized recommendations, and enabling group purchases for bigger discounts.",
  },
  {
    title: "How does OneAnt curate deals?",
    text: "Local businesses can upload products and set deals via the admin dashboard. OneAnt implements an approval workflow to ensure that only high-quality and genuine deals are presented to the customers.",
  },
  {
    title: "How does the personalized recommendation system work?",
    text: "OneAnt tracks user browsing history and uses collaborative filtering to suggest products based on similar users' behavior, ensuring that customers receive personalized recommendations that align with their interests and preferences.",
  },
  {
    title: "What is the group purchase and sharing feature?",
    text: "OneAnt allows users to create a group for a particular deal, enabling them to invite friends and family through a shareable link. Once the required number of people join, the group purchase is processed, unlocking bigger discounts.",
  },
  {
    title: "How does OneAnt handle payments and checkout?",
    text: "OneAnt integrates with various payment gateways such as Stripe and PayPal, ensuring a secure handling of user payment information. Users can add multiple products to a cart and choose between in-store pickup or delivery options during checkout.",
  },
  {
    title: "How does OneAnt incorporate sustainability into its platform?",
    text: "OneAnt is committed to promoting sustainable practices by offering carbon-neutral delivery options, highlighting eco-friendly products or businesses, and implementing a reward system for customers making sustainable choices.",
  },
  {
    title: "How does the feedback and review system work?",
    text: "Customers can rate and review products and businesses on OneAnt. This feedback is valuable, as it helps improve the platform’s recommendations and overall user experience.",
  },
  {
    title: "How can I sign up for OneAnt?",
    text: "Users can sign up for OneAnt using their email and password or through their social media accounts, ensuring a smooth and flexible registration process.",
  },
  {
    title: "How does OneAnt capture and utilize user interests?",
    text: "User interests are captured during registration or inferred through browsing behavior, which helps in personalizing recommendations and curating deals that resonate with the users.",
  },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";

.main-container {
  background-color: #000000e5;
  color: white;
  min-height: 60vh;
}
.opening-text-container {
  width: 100%;
}

.expansion-container {
  background: #000000e5;
}

@media only screen and (min-width: 600px) {
  .opening-text-container {
    width: 90%;
  }
}

@media only screen and (min-width: 900px) {
  .opening-text-container {
    width: 80%;
  }
}
@media only screen and (min-width: 1100px) {
  .opening-text-container {
    width: 60%;
  }
}
</style>
