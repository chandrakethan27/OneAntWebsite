<template>
  <div class="bg-[#000000E5]/[90%]s">
    <v-container class="main-container bg-[#000000E5]" fluid>
      <v-container class="opening-text-container">
        <h1 class="text-center text-[36px] font-bold !font-inter py-10 ">
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
  {
    title: "What is a group buying site?",
    text: "Group buying platforms are a type of eCommerce platform or marketplace where consumers buy ingroups from vendors on the platform. Usually, a minimum number of buyers is needed to purchasegoods at a reduced price. Users can also engage with and join groups that are open to receiving individual members on the site.",
  },
  {
    title: "Who uses group buying sites?",
    text: "Group buying sites are used by a diverse range of individuals seeking cost-effective purchasing options and a sense of community engagement. With group buying, price-conscious consumers obtain discounts through bulk purchases, pooling their buying power with others. Students and households, frequent these platforms to access deals on products and services that might otherwise be financially out of reach. The social commerce aspect of group buying also appeals to consumers looking for shared experiences. Through collective purchasing, participants foster a sense of camaraderie and achieve mutual goals, whether that&#39;s obtaining a discount on a luxury item or supporting a local business through the group buying site. In essence, group buying platforms serve as a hub for a broad spectrum of individuals united by their desire for economical transactions and communal interactions.",
  },
  {
    title: "How does the group buying model work?",
    text: "The group buying model enables consumers to use the collective buying model for bulk purchasing, benefiting from discounts. Group buying sites partners with vendors to secure lower prices based on volume. When a user selects a product, they can join or create a group. Once the group reaches a predetermined size, the deal is activated, and all members receive the product at a discounted price. This model benefits consumers through savings, while vendors increase sales through volume. It’s a win-win approach that relies on collective purchasing power to unlock discounts that would not be available to individual buyers."  },
  {
    title: "Can group buying serve local businesses?",
    text: "Yes, group buy sites significantly benefit local businesses and deliver economic benefits. By aggregating consumer demand, group buying sites work to create opportunities for small businesses to reach a wider audience and increase sales. They help businesses attract new customers and enhance brand visibility within the community."  },
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
