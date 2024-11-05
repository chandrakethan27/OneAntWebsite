<template>
  <div>
    <v-container class="my-5 my-md-10">
      <v-row>
        <v-col cols="12" md="2">
          <LogoAllScreenType />
        </v-col>
        <v-col cols="12" md="7" align-self="center">
          <v-row justify="center">
            <v-col
              v-for="(link, index) in links"
              :key="index"
              align-self="center"
              cols="6"
              md="3"
            >
              <NuxtLink
                class="text-black text-decoration-none"
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
  { title: "Terms Of Use", link: "/terms-conditions" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Services", link: "/services" },
  { title: "Sellers", link: "/sellers" },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
</style>
