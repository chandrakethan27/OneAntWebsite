<template >
  <div class="bg-[#eeeeee]">
    <v-container fluid class="">
      <v-row no-gutters>
        <v-col cols="12" class="py-5 px-10 text-sm" style="background-color: #eeeeee;">
          <p>
            Our platform emerged from a shared vision among friends dedicated to revolutionizing the way people shop for affordable groceries. Born out of the lively streets of Vancouver, our brand was established by a group of enthusiastic entrepreneurs who recognized the untapped potential of community-driven purchases. The origin of our platform is deeply rooted in the vibrant culture and dynamic business environment of the city, where innovation meets social connectivity.
          </p>
          <br>
          <p>
            Our mission is to empower individuals through collective purchasing power, enabling them to access savings on groceries while fostering a sense of community and collaboration. What truly sets us apart is our unwavering commitment to offering not just grocery store discounts but also an engaging shopping experience that strengthens social ties. By leveraging the power of group dynamics, we transform ordinary shopping into an exciting, shared endeavor that benefits everyone involved.
          </p>
          <br>
          <p>
            At the heart of our brand is the belief that shopping for cheap groceries should be both economical and enriching. We aim to make discount grocery shopping easy and accessible, providing grocery deals that help individuals and families thrive. Our focus on discounted groceries ensures that our customers enjoy incredible value while nurturing a spirit of togetherness and mutual support.
          </p>
          <br>
          <p>
            As we continue to grow, we remain dedicated to expanding our reach, connecting more people, and continually redefining grocery shopping in Vancouver. Whether you’re searching for grocery store discounts or the best savings on groceries, we are here to make shopping affordable and rewarding for everyone.
          </p>
        </v-col>
      </v-row>
      <v-row class="bg-[#000000] text-white">
        <v-col cols="12" md="2" >
          <LogoAllScreenType />
        </v-col>
        <v-col cols="12" md="8" align-self="center">
          <v-row justify="center">
            <v-col
              v-for="(link, index) in links"
              :key="index"
              align-self="center"
              cols="6"
              md="2"
            >
              <NuxtLink
                class="text-white text-decoration-none"
                :to="link['link']"
                >{{ link["title"] }}</NuxtLink
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" align-self="center"
          >&copy; {{ new Date().getFullYear() }} - OneAnt</v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const links = ref([
{
  link: "about-us",
  title: "ABOUT US",
},
{
  link: "product",
  title: "PRODUCT",
},
{
  link: "sellers",
  title: "SELLERS",
},
{
  link: "commitment",
  title: "COMMITMENT ",
},
{
  link: "frequently-asked-questions",
  title: "FAQs",
},
{
  link: "contact-us",
  title: "CONTACT ",
},
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
</style>
