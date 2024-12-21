<template>
  <div class="video-container">
    <video controls autoplay class="background-video" >
      <source src="../../public/videos/vidd.mp4" type="video/mp4"  />
      Your browser does not support the video tag.
    </video>
    <v-container class="main-container" fluid>
      <v-row class="h-full">
        <v-col class="flex">
          <!-- <v-container class="text-on-image-container mb-32 my-auto">
            <h1
              class="text-white flex items-end gap-4 !font-inter pt-15 text-h3 text-md-h2 text-lg-h1 font-weight-bold"
            >
              Your
              <span class="flex flex-col text-3xl font-black text-red-600"
                ><span class="!font-inter">Friends,</span>
                <span class="!font-inter">Deals,</span>
                <span class="!font-inter">Savings</span>
              </span>
            </h1>
            <p class="my-5 text-white !font-inter font-weight-medium">
              Experience the power of buying with friends, your wallet will
              thank you.
            </p>
            <CtaJoinOneAntRed />
          </v-container> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style scoped>
@import "~/assets/scss/global.scss";

.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-container {
  height: 100%;
  z-index: 1; /* Ensures text is above the video */
}

.text-on-image-container {
  filter: brightness(1);
}
@media (max-width: 768px) {
  .video-container {
    height: 30vh; /* Reduce height for smaller screens */
  }
}
</style>
