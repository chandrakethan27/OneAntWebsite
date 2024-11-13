<template>
  <div class="">
    <v-app-bar
      class="py-5 max-w-7xl pl-20 mx-auto"
      scroll-behavior="elevate"
      absolute
    >
      <LogoAllScreenType />
      <!-- <v-spacer></v-spacer> -->
      <!-- <logo-medium></logo-medium> -->
      <!-- <v-spacer></v-spacer> -->

      <NuxtLink
        to="/"
        class="mr-5 ml-20 text-decoration-none text-capitalize text-black navbar-fonts text-body-1 font-weight-bold"
        >HOME</NuxtLink
      >

      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link['link']"
        class="mx-5 text-decoration-none text-capitalize text-black navbar-fonts text-body-1 font-weight-bold"
        >{{ link["title"] }}</NuxtLink
      >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <CtaDesktopNavbar />
      <v-spacer></v-spacer>

      <!-- <cta-get-started></cta-get-started> -->
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const links = ref([
{
  link: "about-us",
  title: "ABOUT US",
},
{
  link: "services",
  title: "PRODUCT",
},
{
  link: "sellers",
  title: "SELLERS",
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
.navbar-fonts {
  font-size: 1.2rem;
}
</style>
