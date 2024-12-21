<template>
  <div>
    <v-app-bar class=" mx-auto">
      <!-- <NuxtLink to="/"  class="text-decoration-none text-black"><logo-small></logo-small></NuxtLink> -->

      <div v-if="drawer === false">
        <v-icon
          variant="text"
          @click.stop="drawer = !drawer"
          size="x-large"
          class="pa-10"
          >mdi-menu</v-icon
        >
      </div>
      <div v-if="drawer === true">
        <v-icon
          variant="text"
          @click.stop="drawer = !drawer"
          size="x-large"
          class="pa-10"
          >mdi-close</v-icon
        >
      </div>
      <LogoAllScreenType/>
      
      <v-spacer></v-spacer>
      <CtaMobileNavbar/>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      disable-resize-watcher
      disable-route-watcher
      elevation="10"
      persistent
      location="left"
    >
      <v-list @click.stop="drawer = !drawer">
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          :href="link['link']"
          class="font-weight-bold text-capitalize"
        >
          {{ link["title"] }}
        </v-list-item>
      </v-list>
      <CtaMobileNavigationDrawer />
      
    </v-navigation-drawer>
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

const drawer = ref(false);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/global.scss";
</style>
