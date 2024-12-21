<template>
    <div class="">
      <div class="min-h-[100vh] bg">
        <div class="video-container">
      <video controls autoplay class="background-video" >
        <source src="../public/videos/vidd.mp4" type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
      <v-container class="main-container" fluid>
        <v-row class="h-full">
        </v-row>
      </v-container>
    </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
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
  /*
  .main-container {
    background-image: linear-gradient(
        rgba(130, 130, 130, 0.1),
        rgba(1, 1, 1, 0.9)
      ),
      url("/images/servicesPage/digital-marketing-office.jpg");
    min-height: 100vh;
    background-position: 50% 40%;
    background-size: cover;
    /* filter: brightness(0.8); */
  /* backdrop-filter: brightness(0.1);
    display: grid;
    align-items: center;
  }
  .text-on-image-container {
    filter: brightness(1);
  }
  
  @media only screen and (min-width: 600px) {
    .main-container {
      min-height: 70vh;
    }
  } */
  
  
  .text-red-darken-2 {
    color: #c62828; /* Adjust this color as needed */
  }
  .bg-red-darken-2 {
    background-color: #c62828; /* Adjust this color as needed */
  }
  @media (max-width: 768px) {
    .video-container {
      height: 40vh; /* Reduce height for smaller screens */
    }
  }
  </style>
  