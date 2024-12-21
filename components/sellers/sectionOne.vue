<template>
  <div>
    <v-container class="group-purchase" fluid>
      <v-container class="intra-section-space" fluid>
        <v-row>
          <v-col
            cols="12"
            md="3"
            align-self="end"
            v-if="$viewport.isGreaterThan('tablet')"
          >
            <div class="butterfly">
              <img
                src="/public/images/sellersPage/butterfly.png"
                alt="Group of friends collaborating to unlock local deals on OneAnt"
              />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <h1
              class="my-5 text-center font-semibold !font-inter my-md-10 text-h4 text-md-h3 font-weight-bold"
            >
              Group Purchases Lead to Increased Business Growth
            </h1>
            <p class="text-center !font-inter">
              Unlock bigger discounts on curated local deals when you buy as a
              group with friends & family.
            </p>
            <v-row justify="center" class="my-5 my-md-10">
              <button
                class="px-8 py-3 flex items-center gap-2 text-white !font-inter font-semibold rounded-md bg-[#9038FF]"
              >
                <span> Get Started</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 19L19 12L12 5"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button> 
            </v-row>
          </v-col>
          <v-col cols="12" md="3" align-self="end">
            <div
              class="purple-ring"
              v-if="$viewport.isGreaterThan('mobileWide')"
            >
              <img
                src="/public/images/sellersPage/purple-ring.png"
                alt="Purple ring icon representing group purchasing power"
              />
            </div>
          </v-col>
        </v-row>
        <v-container
          class="container-with-three-images"
          v-if="$viewport.isGreaterThan('tablet')"
        >
          <v-row justify="center">
            <v-col cols="12" md="4" align-self="end">
              <img
                class="screenshot-numbers"
                src="/public/images/sellersPage/screenshot-numbers.png"
                alt="OneAnt platform interface displaying user engagement metrics"
              />
            </v-col>
            <v-col cols="12" md="4" align-self="start">
              <img
                src="/public/images/sellersPage/screenshot-graph.png"
                alt="Graph illustrating business growth through OneAnt's group deals"
                class="screenshot-graphs"
              />
            </v-col>
            <v-col cols="12" md="4" align-self="start">
              <div class="purple-money-amount">
                <img
                  src="/public/images/sellersPage/purple-money-amount.png"
                  alt="Purple money icon symbolizing increased revenue with OneAnt"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-if="$viewport.isLessThan('tablet')">
          <v-row>
            <v-col>
              <div class="screenshot-graph-mobile">
                <img
                  src="/public/images/sellersPage/screenshot-graph.png"
                  alt="Graph illustrating business growth through OneAnt's group deals"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-container>
  </div>
</template>


<script setup lang="ts"></script>

<style scoped lang="scss">
@import "~/assets/scss/global.scss";

.butterfly {
  display: grid;
  align-items: end;
  justify-items: start;
  transform: translate(-40px);
  img {
    width: 200px;
  }
}

.purple-ring {
  display: grid;
  align-items: end;
  justify-items: end;
  img {
    max-width: 100px;
  }
}

.group-purchase {
  min-height: 100vh;
  background: linear-gradient(90deg, #fdffdb, #fdffed, #fefffa, #fadfff);
}

.container-with-headline {
  width: 100%;
}

.screenshot-numbers {
  max-width: 400px;
}

.screenshot-graphs {
  max-width: 400px;
}

.screenshot-graph-mobile {
  display: grid;
  place-items: center;
  img {
    max-width: 300px;
  }
}

.purple-money-amount {
  display: grid;
  align-items: start;
  justify-items: end;
  transform: translate(10px, -50px);
}

.container-with-three-images {
  min-height: 600px;
  display: grid;
}

@media only screen and (min-width: 600px) {
  .container-with-headline {
    width: 90%;
  }
  .group-purchase {
    min-height: 80vh;
  }
}
@media only screen and (min-width: 800px) {
  .container-with-headline {
    width: 80%;
  }
}
@media only screen and (min-width: 900px) {
  .container-with-headline {
    width: 60%;
  }
}
</style>
