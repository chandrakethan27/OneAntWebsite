<template>
  <div>
    <div class="px-4 mx-auto mt-10 text-center max-w-7xl md:px-0">
      <div class="flex flex-col items-center gap-4">
      <v-typography>
        <h1 class="mb-4 text-2xl font-bold md:text-4xl">
          <span class="text-orange-600">Do more</span> with OneAnt.
        </h1>
        </v-typography>
      <v-typography>
        <p class="max-w-2xl mb-6 text-sm font-bold text-center">
          22+ years of experience crafting customer-focused digital marketing
          strategies that empower small businesses to achieve sustainable
          growth.
        </p>
        </v-typography>
        <v-btn
    class="mt-4"
    color="red"
    dark
    elevation="2"
  >
    Join Oneant
  </v-btn>
      </div>
    </div>

    <v-container>
      <v-row>
    <!--col-1-->
    <v-col class="text-center " cols="12" md="4">
      <v-card class="mx-auto mt-10  rounded-full max-width-400" 
      flat
      
      >
        <v-card-title>
          <h2 class="text-xl pb-5 font-semibold">Generate new Businesses</h2>
        </v-card-title>
        <v-list class="text-left" two-line
        :style="{ 
          backgroundColor: '#F3E8FF',  /* Custom background color */
         
        }"
        >
          <v-list-item class="px-8 py-4"
          
          >
            <v-list-item-content class="flex border-b-[2px] pb-6 pt-4 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
                Live Streaming (1-to-1 & 1-to-Many)
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                src="/public/images/servicesPage/live.png"
                class="w-6 h-6"
                alt=""
              />
              </v-list-item-action>
            </v-list-item-content>
            
            <v-list-item-content class="flex border-b-[2px] py-6 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Schedule a Video Call Widget
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                class="w-6 h-6"
                src="/public/images/servicesPage/camera.png"
                alt=""
              />
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex border-b-[2px] py-6 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Video Chat Widget
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <v-img
                class="w-6 h-6"
                src="/public/images/servicesPage/chat.png"
                alt=""
              />
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex py-6 justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Digital Marketing Support
              </v-list-item-title>
              <v-list-item-action>
                <v-img src="/public/images/servicesPage/girl.png" class="w-5 h-5" alt="" />
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <!--col-2-->
    <v-col class="text-center " cols="12" md="4">
      <v-card class="mx-auto mt-10  rounded-full max-width-400" 
      flat
      >
        <v-card-title>
          <h2 class="text-xl pb-5 font-semibold">Optimize Your Business</h2>
        </v-card-title>
        <v-list class="text-left" two-line
        :style="{ 
          backgroundColor: '#DCFCE7',  /* Custom background color */
         
        }"
        >
          <v-list-item class="px-8 py-4" >
            <v-list-item-content class="flex border-b-[2px] pb-6 pt-4 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              AI Customer Support
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                src="/public/images/servicesPage/Ai.png"
                class="w-6 h-6"
                alt=""
              />
              </v-list-item-action>
            </v-list-item-content>
            
            <v-list-item-content class="flex border-b-[2px] py-6 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Inventory Management

              </v-list-item-title>
              <v-list-item-action>
                <v-img
                src="/public/images/servicesPage/inventory.png"
                class="w-6 h-6"
                alt=""
              />
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex border-b-[2px] py-6 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Sales Analytics
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                src="/public/images/servicesPage/sales.png"
                class="w-6 h-6"
                alt=""
              />
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex py-6 justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Secure Payment Reconciliation

              </v-list-item-title>
              <v-list-item-action>
                <v-img
                src="/public/images/servicesPage/card.png"
                class="w-6 h-6"
                alt=""
              />
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <!--col-3-->
    <v-col class="text-center " cols="12" md="4">
      <v-card class="mx-auto mt-10  rounded-full max-width-400" 
      flat
      
      >
        <v-card-title>
          <h2 class="text-xl pb-5 font-semibold">Grow Your Business</h2>
        </v-card-title>
        <v-list class="text-left" two-line
        :style="{ 
          backgroundColor: '#FEE2E2',  /* Custom background color */
         
        }"
        >
          <v-list-item class="px-8 py-4" >
            <v-list-item-content class="flex border-b-[2px] pb-6 pt-4 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Video Emails & Feedback
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                src="/public/images/servicesPage/video.png"
                class="w-6 h-6"
                alt="video"
              />
              </v-list-item-action>
            </v-list-item-content>
            
            <v-list-item-content class="flex border-b-[2px] py-6 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Customer Insights
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                  src="/public/images/servicesPage/insight.png"
                  class="w-6 h-6"
                  alt=""
                />
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex border-b-[2px] py-6 border-white justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              AI Based Influencer Marketing
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                  src="/public/images/servicesPage/Picture22.png"
                  class="w-6 h-6"
                  alt=""
                />
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex py-6 justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Share Video QR on Social Channels
              </v-list-item-title>
              <v-list-item-action>
                <v-img
                src="/public/images/servicesPage/phone.png"
                class="w-6 h-6"
                alt=""
              />
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  </v-container>

    
</div>
</template>

<script setup lang="ts">
const image_path = (name: string) => `/images/sellers-page/icons/${name}`;
const items = ref([
  {
    title: "Generate New Business",
    background_color: "purple-lighten-4",
    text_lines: [
      "live streaming(1 to 1 & 1 to many)",
      "schedule a video call widget",
      "video chat widget",
      "digital marketing support",
    ],
    images: ["live.png", "live.png", "live.png", "live.png"],
  },
  {
    title: "Optimize Your Business",
    background_color: "light-green-lighten-4",
    text_lines: [
      "AI customer support",
      "inventory management",
      "sales analytics",
      "secure payment reconciliation",
    ],
    images: ["live.png", "live.png", "live.png", "live.png"],
  },
  {
    title: "Generate New Business",
    background_color: "orange-lighten-4",
    text_lines: [
      "video emails and feedback",
      "customer insights",
      "AI based influencer marketing",
      "share video QR on social media",
    ],
    images: ["live.png", "live.png", "live.png", "live.png"],
  },
]);
</script>

<style scoped lang="scss">
@import "~/assets/scss/global.scss";

.divider {
  height: 1px;
  margin: 13px 0px;
  border-radius: 15px;
  background-color: white;
}

.text-for-card {
  font-size: 1.2rem;
}
.list {
  display: grid;
  place-items: center;
  .img {
    align-self: start;
  }
}

.card-size {
  min-height: 400px;
  display: grid;
  place-items: center;
}

.cards-container {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .cards-container {
    width: 100%;
  }
}

@media only screen and (min-width: 900px) {
  .cards-container {
    width: 85%;
  }
}

.v-container{
  max-width: 94%;
}

.v-list{
  border-radius: 40px;
}
</style>
