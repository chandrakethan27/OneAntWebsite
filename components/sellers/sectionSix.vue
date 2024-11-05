<template>
  <div>
    <v-container class="mx-auto">
      <div
        class="flex flex-col items-center justify-center space-y-2 text-center"
      >
        <h2 class="text-center !font-inter text-h4 text-md-h3 font-weight-bold">
          Benefits with OneAnt
        </h2>
        <p class="my-5 text-center !font-inter max-w-2xl">
          Get better at what you do, and catch new opportunities. Don’t just be
          online, Dominate the digital landscape with us.
        </p>
      </div>
      <div class="">
        <v-row class="no-gutters !font-inter">
          <v-col v-for="(item, index) in items" :key="index" cols="12" md="6">
            <v-list
              v-for="(title, title_index) in item['titles']"
              :key="title_index"
            >
              <div
                class="py-6 text-xs border-b !font-inter list-item-text flex justify-between gap-2"
              >
                <span class="truncate">{{ title }}</span>
                <component
                  :is="'div'"
                  v-html="
                    item.id === 1 ? icons[title_index] : icons[title_index + 3]
                  "
                ></component>
              </div>
            </v-list>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const icons = [
  `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1018_4294)">
<path d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.6362 2.6665 2.66667 8.63604 2.66667 15.9998C2.66667 23.3636 8.6362 29.3332 16 29.3332Z" fill="white"/>
</g>
<path d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.6362 2.6665 2.66667 8.63604 2.66667 15.9998C2.66667 23.3636 8.6362 29.3332 16 29.3332Z" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8V16L21.3333 18.6667" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_1018_4294" x="2.16667" y="-1.8335" width="27.6667" height="31.6665" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1018_4294"/>
</filter>
</defs>
</svg>
`,
  `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1018_4297)">
<path d="M17.3333 2.6665H8C7.29275 2.6665 6.61448 2.94746 6.11438 3.44755C5.61428 3.94765 5.33333 4.62593 5.33333 5.33317V26.6665C5.33333 27.3737 5.61428 28.052 6.11438 28.5521C6.61448 29.0522 7.29275 29.3332 8 29.3332H24C24.7072 29.3332 25.3855 29.0522 25.8856 28.5521C26.3857 28.052 26.6667 27.3737 26.6667 26.6665V11.9998L17.3333 2.6665Z" fill="white"/>
</g>
<path d="M17.3333 2.6665H8C7.29275 2.6665 6.61448 2.94746 6.11438 3.44755C5.61428 3.94765 5.33333 4.62593 5.33333 5.33317V26.6665C5.33333 27.3737 5.61428 28.052 6.11438 28.5521C6.61448 29.0522 7.29275 29.3332 8 29.3332H24C24.7072 29.3332 25.3855 29.0522 25.8856 28.5521C26.3857 28.052 26.6667 27.3737 26.6667 26.6665V11.9998L17.3333 2.6665Z" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3333 2.6665V11.9998H26.6667" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_1018_4297" x="4.83333" y="-1.8335" width="22.3333" height="31.6665" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1018_4297"/>
</filter>
</defs>
</svg>
`,
  `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 10.6665H25.3333C26.7478 10.6665 28.1044 11.2284 29.1046 12.2286C30.1048 13.2288 30.6667 14.5853 30.6667 15.9998C30.6667 17.4143 30.1048 18.7709 29.1046 19.7711C28.1044 20.7713 26.7478 21.3332 25.3333 21.3332H24" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#filter0_i_1018_4300)">
<path d="M2.66667 10.6665H24V22.6665C24 24.081 23.4381 25.4375 22.4379 26.4377C21.4377 27.4379 20.0812 27.9998 18.6667 27.9998H8C6.58551 27.9998 5.22896 27.4379 4.22877 26.4377C3.22857 25.4375 2.66667 24.081 2.66667 22.6665V10.6665Z" fill="white"/>
</g>
<path d="M2.66667 10.6665H24V22.6665C24 24.081 23.4381 25.4375 22.4379 26.4377C21.4377 27.4379 20.0812 27.9998 18.6667 27.9998H8C6.58551 27.9998 5.22896 27.4379 4.22877 26.4377C3.22857 25.4375 2.66667 24.081 2.66667 22.6665V10.6665Z" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 1.3335V5.3335" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 1.3335V5.3335" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 1.3335V5.3335" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_1018_4300" x="2.16667" y="6.1665" width="22.3333" height="22.3335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1018_4300"/>
</filter>
</defs>
</svg>
`,
  `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1018_4306)">
<path d="M24 4C22.9391 4 21.9217 4.42143 21.1716 5.17157C20.4214 5.92172 20 6.93913 20 8V24C20 25.0609 20.4214 26.0783 21.1716 26.8284C21.9217 27.5786 22.9391 28 24 28C25.0609 28 26.0783 27.5786 26.8284 26.8284C27.5786 26.0783 28 25.0609 28 24C28 22.9391 27.5786 21.9217 26.8284 21.1716C26.0783 20.4214 25.0609 20 24 20H8C6.93913 20 5.92172 20.4214 5.17157 21.1716C4.42143 21.9217 4 22.9391 4 24C4 25.0609 4.42143 26.0783 5.17157 26.8284C5.92172 27.5786 6.93913 28 8 28C9.06087 28 10.0783 27.5786 10.8284 26.8284C11.5786 26.0783 12 25.0609 12 24V8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12H24C25.0609 12 26.0783 11.5786 26.8284 10.8284C27.5786 10.0783 28 9.06087 28 8C28 6.93913 27.5786 5.92172 26.8284 5.17157C26.0783 4.42143 25.0609 4 24 4Z" fill="white"/>
</g>
<path d="M24 4C22.9391 4 21.9217 4.42143 21.1716 5.17157C20.4214 5.92172 20 6.93913 20 8V24C20 25.0609 20.4214 26.0783 21.1716 26.8284C21.9217 27.5786 22.9391 28 24 28C25.0609 28 26.0783 27.5786 26.8284 26.8284C27.5786 26.0783 28 25.0609 28 24C28 22.9391 27.5786 21.9217 26.8284 21.1716C26.0783 20.4214 25.0609 20 24 20H8C6.93913 20 5.92172 20.4214 5.17157 21.1716C4.42143 21.9217 4 22.9391 4 24C4 25.0609 4.42143 26.0783 5.17157 26.8284C5.92172 27.5786 6.93913 28 8 28C9.06087 28 10.0783 27.5786 10.8284 26.8284C11.5786 26.0783 12 25.0609 12 24V8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12H24C25.0609 12 26.0783 11.5786 26.8284 10.8284C27.5786 10.0783 28 9.06087 28 8C28 6.93913 27.5786 5.92172 26.8284 5.17157C26.0783 4.42143 25.0609 4 24 4Z" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_1018_4306" x="3.5" y="-0.5" width="25" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1018_4306"/>
</filter>
</defs>
</svg>
`,
  `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1018_4308)">
<path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" fill="white"/>
</g>
<path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 28.0002L22.2 22.2002" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_1018_4308" x="3.5" y="-0.5" width="22.3333" height="26.3335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1018_4308"/>
</filter>
</defs>
</svg>
`,
  `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1018_4311)">
<path d="M29.3334 16H24L20 28L12 4L8.00002 16H2.66669" fill="white"/>
</g>
<path d="M29.3334 16H24L20 28L12 4L8.00002 16H2.66669" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_1018_4311" x="2.16669" y="-0.5" width="27.6667" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1018_4311"/>
</filter>
</defs>
</svg>
`,
];
const items = ref([
  {
    id: 1,
    titles: [
      "A free 1-hour meeting with a SEO expert",
      "The know-how to plan (and achieve) measurable, long-term results",
      "Feedback specific to your business and competitive landscape",
    ],
  },
  {
    id: 2,
    titles: [
      "Stand out from the competition by uncovering profitable keywords",
      "Optimize your content to win top spots on search engines",
      "Win more site traffic with the right keywords and backlinks",
    ],
  },
]);
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.list-item-text {
  font-size: 1.1rem;
}

.main-container {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .main-container {
    width: 90%;
  }
}

@media only screen and (min-width: 800px) {
  .main-container {
    width: 80%;
  }
}
@media only screen and (min-width: 1000px) {
  .main-container {
    width: 70%;
  }
}
</style>
