<template>
  <div>
    <v-container class="pt-15 responsive-container intra-section-space">
      <v-row justify="center">
        <h2 class="text-h4 text-md-h3 !font-inter font-weight-bold">
          <span class="text-red-darken-2 !font-inter">How</span> does OneAnt
          Work?
        </h2>
      </v-row>
      <v-row justify="center" class="pt-5 mt-5 mt-md-10 pt-md-10">
        <v-col
          v-for="(section, index) in section_work"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card flat class="grid">
            <v-img
              class="image"
              :src="work_section_icons_path(section['icon_link'])"
              max-width="100px"
              max-height="100px"
            ></v-img>
            <v-card-title class="text-red font-weight-bold">{{
              section["title"]
            }}</v-card-title>
            <v-card-text class="">{{ section["description"] }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="pt-5 mt-5" justify="center">
        <CtaJoinOneAntRed />
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const work_section_icons_path = (name: string) => `/images/icons/${name}`;

const section_work = ref([
  {
    title: "Discover",
    description: "Discover the deals offered by a host of local businesses",
    icon_link: "discover.png",
  },
  {
    title: "Share",
    description: "share the deals with your friends and family",
    icon_link: "share.png",
  },
  {
    title: "Save",
    description: "Shop and save more in a group",
    icon_link: "save.png",
  },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";

.image {
  width: 100px;
  height: 100px;
  justify-self: center;
}
</style>
