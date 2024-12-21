<template>
  <div>
    <v-container class="intra-section-space">
      <v-container class="mx-auto max-w-7xl">
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="flex flex-col items-center gap-1">
              <!-- Image with Alt Text -->
              <img
                class="my-5 image"
                :src="images_path(item['icon_link'])"
                :alt="item['alt']"
              />
              <h3 class="max-w-sm text-xl font-semibold text-center">
                {{ item["title"] }}
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const images_path = (name: string) => `/images/icons/${name}`;
const items = ref([
  {
    icon_link: "clock.png",
    title: "No Impulse Buys",
    alt: "Illustration emphasizing no impulse buys with OneAnt",
  },
  {
    icon_link: "fiance.png",
    title: "No Hidden Fees",
    alt: "Graphic highlighting transparency and no hidden fees on OneAnt",
  },
  {
    icon_link: "refund.png",
    title: "Refund Guarantee",
    alt: "Badge representing refund guarantee offered by OneAnt",
  },
  {
    icon_link: "internet.png",
    title: "Online Redemption",
    alt: "Icon depicting easy online redemption process on OneAnt",
  },
  {
    icon_link: "cancellation.png",
    title: "No Vouchers Needed",
    alt: "Symbol indicating no vouchers are needed with OneAnt deals",
  },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.image {
  width: 100px;
  height: 100px;
}
</style>
