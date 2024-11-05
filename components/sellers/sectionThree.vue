<template>
  <div>
    <v-container class="mx-auto max-w-7xl">
      <v-row
      align="center"
      justify="center"
      class="py-10"
    >
      <v-col
        class="text-center"
        cols="12"
        sm="10"
        md="8"
      >
        <v-typography
          variant="h4"
          class="font-weight-bold text-4xl pb-8"
        >
          Everything you need to grow your business
        </v-typography>
      </v-col>
    </v-row>
    
      <v-container>
        <v-row>
        <!--cols-1-->
        <v-col cols="12" md="6">
          <v-card
            class="rounded-xl h-full w-full"
            :style="{background: 'linear-gradient(93.56deg, #8629f5 5.85%, #ee36aa 94.6%)',}"
          >
            <v-card-title class="pa-6" height="auto">
              <v-row class="fill-height" align="center" justify="space-between">
                <v-col class="text-white text-uppercase text-[14px] font-inter">
                  Solution 1
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-icon size="52" class="text-white">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 47.6667C37.9662 47.6667 47.6667 37.9662 47.6667 26C47.6667 14.0339 37.9662 4.33337 26 4.33337C14.0338 4.33337 4.33334 14.0339 4.33334 26C4.33334 37.9662 14.0338 47.6667 26 47.6667Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26 17.3334V25.6667"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.3333 26H25.6667"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g opacity="0.5">
                        <path
                          d="M25.9333 34.6V28.2666"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M34.6 25.9333H28.2667"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-title>
              <h1 class="text-white px-6 text-wrap leading-snug text-4xl font-bold" style="color:white;">
                Boost savings with group buying on OneAnt
              </h1>
            <v-card-text class="pa-6 mt-10">
              <v-img
                src="/public/images/sellersPage/cards.png"
                alt="Card Image"
                height="200px"
                contain
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>
        <!--cols-2-->
        <v-col cols="12" md="6">
          <v-card
            class="rounded-xl h-full w-full shadow-none"
            :style="{background: '#F6F7F9', shadow: '0px',}"
          >
            <v-card-title class="pa-6" height="auto">
              <v-row class="fill-height" align="center" justify="space-between">
                <v-col class="text-[#2A2A2A] text-uppercase text-[14px] font-inter">
                  Solution 2
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-icon size="52" class="text-[#2A2A2A]">
                    <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 47.6667C37.9662 47.6667 47.6666 37.9662 47.6666 26C47.6666 14.0339 37.9662 4.33337 26 4.33337C14.0338 4.33337 4.33331 14.0339 4.33331 26C4.33331 37.9662 14.0338 47.6667 26 47.6667Z"
                      stroke="#2A2A2A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26 17.3334V25.6667"
                      stroke="#2A2A2A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.3333 26H25.6666"
                      stroke="#2A2A2A"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g opacity="0.5">
                      <path
                        d="M25.9333 34.6V28.2666"
                        stroke="#2A2A2A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34.6 25.9333H28.2666"
                        stroke="#2A2A2A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-title>
              <h1 class="text-[#2A2A2A] px-6 text-wrap leading-snug text-4xl font-bold">
                Increase your customers and revenue with group deals
              </h1>
            <v-card-text class="pa-6 mt-10">
              <v-img
                src="/public/images/sellersPage/cards2.png"
                alt="Card Image"
                height="200px"
                contain
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>
        <!--cols-3-->
        <v-col cols="12" md="6" class="relative">
          <v-card
            class="rounded-xl w-full pt-2 h-[100%] shadow-none"
            :style="{background: 'black', shadow: '0px',}"
          >
            <v-card-title class="d-flex px-8 justify-between align-center py-4" height="auto">
              <v-row class="fill-height" align="center" justify="space-between">
                <v-col class="text-white text-uppercase text-[14px] font-inter">
                  Solution 2
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-icon size="52" class="text-[#2A2A2A]">
                    <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 47.6667C37.9662 47.6667 47.6667 37.9662 47.6667 26C47.6667 14.0339 37.9662 4.33337 26 4.33337C14.0338 4.33337 4.33334 14.0339 4.33334 26C4.33334 37.9662 14.0338 47.6667 26 47.6667Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26 17.3334V25.6667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.3333 26H25.6667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g opacity="0.5">
                      <path
                        d="M25.9333 34.6V28.2666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34.6 25.9333H28.2667"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-title>
              <h1 class="text-white p-6 text-wrap leading-snug text-4xl font-bold">
                Increase your customers and revenue with group deals
              </h1>
              <div class="lg:flex hidden ">
              <v-card-actions class="pa-0 w-[100%] absolute bottom-0">
                <v-img
                  class="w-[100%]"
                  height="192"
                  src="/public/images/sellersPage/cards3.png"
                  alt="Group buys"
                />
              </v-card-actions>
            </div>
          </v-card>
        </v-col>

      <!--col-4-->
         <v-col cols="12" md="6" class="flex h-full flex-col gap-4" >
          <v-card
          class="rounded-xl h-[350px] bg-1   pa-6 w-full shadow-none"
          :style="{
            backgroundImage: 'url(/images/sellersPage/cards4.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'none'
          }"
        >
          <v-card-title class="d-flex justify-between align-center p-6" height="auto">
            <v-row class="fill-height" align="center" justify="space-between">
              <v-col class="text-white text-uppercase text-[14px] font-inter">
                Solution 4
              </v-col>
              <v-col class="d-flex justify-end">
                <v-icon size="52" class="text-[#2A2A2A]">
                  <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 47.6667C37.9662 47.6667 47.6667 37.9662 47.6667 26C47.6667 14.0339 37.9662 4.33337 26 4.33337C14.0338 4.33337 4.33334 14.0339 4.33334 26C4.33334 37.9662 14.0338 47.6667 26 47.6667Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 17.3334V25.6667"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.3333 26H25.6667"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g opacity="0.5">
                    <path
                      d="M25.9333 34.6V28.2666"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.6 25.9333H28.2667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                </v-icon>
              </v-col>
            </v-row>
          </v-card-title>
            <h1 class="text-white px-3 py-6 text-wrap leading-snug text-4xl font-bold">
              OneAnt promotes eco-friendly shopping & less waste
            </h1>
            <v-card class="rounded-xl top-10 d-flex justify-between items-center relative custom-card" tile 
            :style="{
              borderRadius: '20px',
            }"
            >
              <v-avatar size="50" class="ml-4">
                <svg
                      width="50"
                      height="50"
                      viewBox="0 0 76 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.9996 73.8239L31.2923 74.5308L31.9996 73.8239L29.2625 71.0851C28.5607 70.3829 27.5571 70.0733 26.5818 70.2582L22.7774 70.9793C22.3461 71.061 21.9119 70.8519 21.7069 70.4637L19.8987 67.0397C19.4351 66.1619 18.5673 65.5703 17.5808 65.4595L13.7329 65.0271C13.2967 64.9781 12.9434 64.6503 12.8619 64.219L12.1432 60.4141C11.959 59.4387 11.3041 58.6176 10.3942 58.2209L6.84462 56.6735C6.44221 56.4981 6.20126 56.0808 6.25055 55.6446L6.68529 51.7969C6.79675 50.8105 6.41304 49.8328 5.66041 49.1856L2.72464 46.6607C2.39182 46.3745 2.28459 45.9047 2.46026 45.5024L4.00981 41.9538C4.40706 41.0441 4.32857 39.9967 3.80017 39.1564L1.73903 35.8784C1.50537 35.5067 1.54138 35.0262 1.82782 34.6935L1.07006 34.041L1.82782 34.6935L4.3545 31.7593C5.00225 31.0071 5.23596 29.9832 4.97873 29.0244L3.97537 25.2845C3.86162 24.8605 4.03769 24.4119 4.40945 24.1785L7.68874 22.1194C8.52943 21.5915 9.05457 20.682 9.09138 19.69L9.23495 15.8205C9.25123 15.3818 9.55169 15.005 9.97575 14.8916L13.7163 13.8905C14.6752 13.6339 15.4451 12.9195 15.7727 11.9825L17.0504 8.32721C17.1953 7.91282 17.5935 7.64135 18.0321 7.65791L21.9015 7.8039C22.8935 7.84133 23.8398 7.38563 24.429 6.58674L26.7274 3.4705L25.9226 2.87693L26.7274 3.4705C26.9879 3.11721 27.4484 2.97517 27.8627 3.12028L31.5172 4.40032C32.4541 4.72847 33.4926 4.57194 34.2911 3.98221L37.4059 1.68188C37.759 1.42109 38.241 1.42109 38.5941 1.68188L41.7089 3.98221C42.5074 4.57194 43.5459 4.72848 44.4828 4.40032L48.1373 3.12028C48.5516 2.97517 49.0121 3.11721 49.2726 3.47049L51.571 6.58674C52.1602 7.38563 53.1065 7.84133 54.0985 7.8039L57.9679 7.65791C58.4065 7.64135 58.8047 7.91282 58.9496 8.32721L60.2273 11.9825C60.5549 12.9195 61.3248 13.6339 62.2837 13.8905L66.0243 14.8916C66.4483 15.005 66.7488 15.3818 66.765 15.8205L66.9086 19.69C66.9454 20.682 67.4706 21.5915 68.3113 22.1194L71.5905 24.1785C71.9623 24.4119 72.1384 24.8605 72.0246 25.2845L71.0213 29.0244C70.764 29.9832 70.9977 31.0071 71.6455 31.7593L74.1722 34.6935C74.4586 35.0262 74.4946 35.5067 74.261 35.8783L72.1998 39.1564C71.6714 39.9967 71.5929 41.044 71.9902 41.9538L73.5397 45.5024C73.7154 45.9047 73.6082 46.3745 73.2754 46.6607L70.3396 49.1856C69.587 49.8328 69.2032 50.8105 69.3147 51.7969L69.7495 55.6446C69.7987 56.0808 69.5578 56.4981 69.1554 56.6735L65.6058 58.2209C64.6959 58.6176 64.041 59.4387 63.8568 60.4141L63.1381 64.219C63.0566 64.6503 62.7033 64.9781 62.2671 65.0271L58.4192 65.4595C57.4327 65.5703 56.5649 66.1619 56.1013 67.0397L54.2931 70.4637C54.0881 70.8519 53.6539 71.061 53.2226 70.9793L49.4182 70.2582C48.4429 70.0733 47.4393 70.3829 46.7375 71.0851L44.0004 73.8239C43.6901 74.1344 43.2135 74.2063 42.8255 74.001L39.4026 72.1906C38.5251 71.7265 37.4749 71.7265 36.5974 72.1906L33.1745 74.001C32.7865 74.2063 32.3099 74.1344 31.9996 73.8239Z"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M36.6435 19.2521C37.4096 18.5449 38.5904 18.5449 39.3565 19.2521L41.5246 21.2532C42.0078 21.6993 42.6795 21.8792 43.321 21.7346L46.1992 21.0856C47.2162 20.8562 48.2388 21.4466 48.5487 22.4421L49.4258 25.2592C49.6212 25.8871 50.1129 26.3788 50.7408 26.5742L53.5579 27.4513C54.5534 27.7612 55.1438 28.7838 54.9144 29.8008L54.2654 32.679C54.1208 33.3205 54.3007 33.9922 54.7468 34.4754L56.7479 36.6435C57.4551 37.4096 57.4551 38.5904 56.7479 39.3565L54.7468 41.5246C54.3007 42.0078 54.1208 42.6795 54.2654 43.321L54.9144 46.1992C55.1438 47.2162 54.5534 48.2388 53.5579 48.5487L50.7408 49.4258C50.1129 49.6212 49.6212 50.1129 49.4258 50.7408L48.5487 53.5579C48.2388 54.5534 47.2162 55.1438 46.1992 54.9144L43.321 54.2654C42.6795 54.1208 42.0078 54.3007 41.5246 54.7468L39.3565 56.7479C38.5904 57.4551 37.4096 57.4551 36.6435 56.7479L34.4754 54.7468C33.9922 54.3007 33.3205 54.1208 32.679 54.2654L29.8008 54.9144C28.7838 55.1438 27.7612 54.5534 27.4513 53.5579L26.5742 50.7408C26.3788 50.1129 25.8871 49.6212 25.2592 49.4258L22.4421 48.5487C21.4466 48.2388 20.8562 47.2162 21.0856 46.1992L21.7346 43.321C21.8792 42.6795 21.6993 42.0078 21.2532 41.5246L19.2521 39.3565C18.5449 38.5904 18.5449 37.4096 19.2521 36.6435L21.2532 34.4754C21.6993 33.9922 21.8792 33.3205 21.7346 32.679L21.0856 29.8008C20.8562 28.7838 21.4466 27.7612 22.4421 27.4513L25.2592 26.5742C25.8871 26.3788 26.3788 25.8871 26.5742 25.2592L27.4513 22.4421C27.7612 21.4466 28.7838 20.8562 29.8008 21.0856L32.679 21.7346C33.3205 21.8792 33.9922 21.6993 34.4754 21.2532L36.6435 19.2521Z"
                        fill="white"
                      />
                      <path
                        d="M44.4425 35.6869C47.2997 39.7154 45.114 44.3297 44.0568 46.1297C43.9018 46.3815 43.6936 46.5963 43.4468 46.7592C43.2001 46.9221 42.9207 47.029 42.6282 47.0726C40.5568 47.4297 35.3997 47.8297 32.6282 43.8011C29.8997 40.0011 30.014 33.3154 30.2568 30.1297C30.2664 29.8924 30.3322 29.6607 30.4488 29.4538C30.5654 29.2468 30.7295 29.0705 30.9276 28.9394C31.1257 28.8083 31.3521 28.7261 31.5881 28.6996C31.8242 28.673 32.0632 28.703 32.2854 28.7869C35.3568 29.6726 41.7568 31.8869 44.4425 35.6869Z"
                        fill="white"
                        stroke="#447D21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34.814 34.3574C38.0861 38.2135 40.958 42.3921 43.3854 46.8289"
                        stroke="#447D21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.8802 44.9332L8.8941 46.9548L8.46669 45.4777L14.235 43.8086L13.3683 40.8135L14.5861 40.4611L15.8802 44.9332Z"
                        fill="white"
                      />
                      <path
                        d="M20.3119 53.0058L21.3453 54.2891L14.1063 56.8953L12.8634 55.352L16.9553 48.8378L17.9888 50.1211L14.7614 55.0591L14.7971 55.1034L20.3119 53.0058ZM18.15 54.879L15.7088 51.8477L16.6437 51.0949L19.0848 54.1262L18.15 54.879Z"
                        fill="white"
                      />
                      <path
                        d="M28.329 59.0859L25.0202 65.5623L22.465 64.2569C21.9759 64.007 21.6032 63.7062 21.3469 63.3546C21.0873 63.004 20.9482 62.6232 20.9296 62.2123C20.9077 61.8023 21.0061 61.3834 21.2248 60.9554C21.4445 60.5253 21.7263 60.2027 22.0701 59.9876C22.4129 59.7746 22.8023 59.6758 23.2384 59.6912C23.6724 59.7056 24.1382 59.8399 24.6357 60.0941L26.3465 60.9681L25.7843 62.0686L24.2948 61.3076C24.0334 61.1741 23.798 61.099 23.5885 61.0823C23.379 61.0657 23.1954 61.1075 23.0379 61.2078C22.8782 61.307 22.7439 61.4631 22.6352 61.676C22.5253 61.891 22.4759 62.0944 22.4869 62.2861C22.4959 62.4768 22.5684 62.6548 22.7046 62.8201C22.8377 62.9864 23.0359 63.1369 23.2995 63.2715L24.2229 63.7433L26.9597 58.3863L28.329 59.0859ZM23.3257 60.2463L23.2219 56.4766L24.7335 57.2489L24.8025 61.0008L23.3257 60.2463Z"
                        fill="white"
                      />
                      <path
                        d="M36.6134 67.1408L36.5029 68.4038L30.5526 67.8835L30.6631 66.6205L32.8812 66.8145L33.4043 60.8323L34.9184 60.9647L34.3953 66.9469L36.6134 67.1408Z"
                        fill="white"
                      />
                      <path
                        d="M45.471 67.555L44.0192 68.0613L42.4638 63.6018C42.2892 63.101 42.256 62.6212 42.3642 62.1622C42.4701 61.704 42.7 61.2954 43.0536 60.9364C43.4081 60.5796 43.8692 60.3022 44.437 60.1042C45.007 59.9054 45.5418 59.8355 46.0412 59.8944C46.5415 59.9557 46.9755 60.1327 47.3435 60.4256C47.7114 60.7185 47.9827 61.1153 48.1573 61.6161L49.7126 66.0756L48.2608 66.582L46.7487 62.2465C46.6575 61.985 46.5194 61.7724 46.3345 61.6087C46.1473 61.4458 45.9283 61.3429 45.6777 61.2999C45.427 61.257 45.162 61.2842 44.8825 61.3817C44.6009 61.4799 44.3764 61.6234 44.209 61.8122C44.0395 62.0017 43.9331 62.218 43.8901 62.4612C43.8448 62.7052 43.8677 62.9579 43.959 63.2195L45.471 67.555Z"
                        fill="white"
                      />
                      <path
                        d="M55.7095 52.8237L60.9114 57.9063L57.4867 61.4115L56.5799 60.5255L58.9301 58.1201L57.6905 56.909L55.5165 59.1341L54.6098 58.2481L56.7837 56.0231L55.5417 54.8095L53.1816 57.2251L52.2748 56.3391L55.7095 52.8237Z"
                        fill="white"
                      />
                      <path
                        d="M65.4739 51.316L58.552 49.0846L58.9595 47.8205L64.2869 46.2135L64.3032 46.1628L59.9466 44.7584L60.4184 43.2949L67.3403 45.5263L66.9263 46.8107L61.6099 48.3951L61.5903 48.4559L65.9435 49.8593L65.4739 51.316Z"
                        fill="white"
                      />
                      <path
                        d="M66.5009 27.2772L60.1065 30.7418L59.4738 29.574L61.9911 24.6115L61.9658 24.5646L57.9411 26.7452L57.2086 25.3933L63.6031 21.9287L64.2459 23.1152L61.7198 28.0542L61.7503 28.1104L65.7718 25.9315L66.5009 27.2772Z"
                        fill="white"
                      />
                      <path
                        d="M57.0121 18.9156C56.558 19.5658 56.0484 20.0329 55.4833 20.3169C54.9202 20.6022 54.3431 20.7174 53.7519 20.6626C53.1639 20.6072 52.607 20.3958 52.081 20.0285C51.5511 19.6584 51.1596 19.2059 50.9065 18.6711C50.6534 18.1363 50.5639 17.5554 50.6379 16.9285C50.7119 16.3016 50.9753 15.664 51.428 15.0157C51.8821 14.3655 52.3907 13.8977 52.9538 13.6124C53.5169 13.3271 54.0924 13.2121 54.6804 13.2676C55.2696 13.321 55.8292 13.5328 56.3591 13.9029C56.8851 14.2702 57.2746 14.7213 57.5277 15.2561C57.7841 15.7904 57.8753 16.371 57.8013 16.9979C57.7292 17.6261 57.4662 18.2654 57.0121 18.9156ZM55.734 18.023C56.0281 17.6018 56.2131 17.2026 56.2889 16.8252C56.3667 16.4493 56.3442 16.1073 56.2215 15.7992C56.0988 15.4912 55.885 15.2308 55.5803 15.0179C55.2756 14.8051 54.9575 14.6941 54.626 14.685C54.2946 14.6758 53.9648 14.7718 53.6366 14.9729C53.3104 15.1753 53.0003 15.4872 52.7061 15.9083C52.412 16.3295 52.226 16.7281 52.1482 17.104C52.0724 17.4814 52.0959 17.824 52.2186 18.1321C52.3413 18.4401 52.555 18.7006 52.8598 18.9134C53.1645 19.1262 53.4826 19.2372 53.814 19.2463C54.1455 19.2555 54.4743 19.1588 54.8005 18.9564C55.1287 18.7553 55.4398 18.4442 55.734 18.023Z"
                        fill="white"
                      />
                      <path
                        d="M39.0326 14.9904L40.0469 7.78878L42.9304 8.19489C43.4602 8.26951 43.891 8.41028 44.2229 8.61721C44.5548 8.82413 44.7901 9.07963 44.929 9.38369C45.0682 9.68541 45.1124 10.0168 45.0616 10.3778C45.0219 10.6591 44.9308 10.8985 44.7883 11.096C44.646 11.2911 44.4669 11.4428 44.2508 11.5511C44.0374 11.6573 43.8013 11.7208 43.5426 11.7418L43.5327 11.8121C43.8053 11.8625 44.0511 11.976 44.2701 12.1527C44.4914 12.3297 44.6589 12.5577 44.7726 12.8367C44.8867 13.1133 44.9188 13.4287 44.8689 13.7826C44.8151 14.1648 44.6721 14.4925 44.4399 14.7658C44.2105 15.0371 43.8995 15.2336 43.507 15.3552C43.1145 15.4769 42.6487 15.4997 42.1095 15.4238L39.0326 14.9904ZM40.7306 13.9601L41.9719 14.1349C42.3962 14.1946 42.717 14.1574 42.9344 14.023C43.1521 13.8863 43.2801 13.682 43.3184 13.4101C43.3464 13.2108 43.3231 13.0282 43.2485 12.8623C43.1738 12.6964 43.0535 12.5575 42.8876 12.4457C42.724 12.3342 42.5203 12.2612 42.2764 12.2269L41 12.0471L40.7306 13.9601ZM41.1451 11.0168L42.2739 11.1758C42.4825 11.2052 42.6728 11.1949 42.8448 11.145C43.0195 11.0931 43.1633 11.0058 43.2762 10.883C43.3915 10.7606 43.4625 10.6044 43.4892 10.4146C43.5259 10.1543 43.4628 9.93148 43.3001 9.74598C43.1397 9.56082 42.8907 9.44446 42.5531 9.39692L41.3962 9.23398L41.1451 11.0168Z"
                        fill="white"
                      />
                      <path
                        d="M30.2883 16.3206L28.2037 9.35304L30.9526 8.5306C31.4788 8.37317 31.956 8.33293 32.3843 8.4099C32.8142 8.48391 33.1779 8.66298 33.4754 8.94711C33.7745 9.22828 33.993 9.59908 34.1307 10.0595C34.2692 10.5222 34.2884 10.9501 34.1886 11.3432C34.0881 11.7341 33.8749 12.0746 33.5491 12.3649C33.2255 12.6544 32.7961 12.8793 32.2608 13.0394L30.4203 13.5901L30.066 12.4061L31.6684 11.9267C31.9497 11.8426 32.1718 11.7341 32.3347 11.6014C32.4976 11.4686 32.6013 11.3115 32.6459 11.1302C32.6928 10.9481 32.6819 10.7426 32.6134 10.5135C32.5442 10.2821 32.4393 10.101 32.2988 9.97004C32.1606 9.83842 31.9851 9.75994 31.7725 9.73461C31.5614 9.70634 31.3141 9.73461 31.0306 9.81944L30.0371 10.1167L31.7614 15.8799L30.2883 16.3206ZM33.1024 12.024L35.7827 14.6767L34.1565 15.1633L31.5136 12.4994L33.1024 12.024Z"
                        fill="white"
                      />
                      <path
                        d="M22.4014 21.0263L21.1531 22.1018L18.3078 14.9534L19.809 13.6599L26.4556 17.5331L25.2073 18.6086L20.1648 15.5472L20.1217 15.5842L22.4014 21.0263ZM20.4574 18.9279L23.4059 16.3873L24.1894 17.2966L21.2408 19.8372L20.4574 18.9279Z"
                        fill="white"
                      />
                      <path
                        d="M13.4755 24.3165L12.9042 25.7633C12.7066 25.7158 12.5191 25.7041 12.3416 25.7282C12.1619 25.7514 11.9951 25.8064 11.8411 25.8933C11.6872 25.9801 11.5497 26.0964 11.4286 26.242C11.3083 26.3854 11.2099 26.554 11.1334 26.7478C10.9952 27.0979 10.9617 27.4372 11.0331 27.7657C11.1022 28.0934 11.2737 28.394 11.5475 28.6675C11.8191 28.9402 12.1894 29.1691 12.6584 29.3543C13.1407 29.5447 13.5741 29.6331 13.9587 29.6196C14.3442 29.6038 14.6719 29.499 14.9418 29.3052C15.2118 29.1115 15.4141 28.844 15.5489 28.5026C15.6245 28.3111 15.6692 28.1238 15.6829 27.9409C15.6975 27.7557 15.6815 27.5802 15.635 27.4142C15.5864 27.2474 15.5081 27.0943 15.4002 26.955C15.2932 26.8134 15.1559 26.6905 14.9884 26.5862L15.5662 25.1421C15.8619 25.3021 16.1245 25.5139 16.3538 25.7776C16.5818 26.0381 16.7597 26.3387 16.8873 26.6793C17.0137 27.0168 17.0747 27.3845 17.0703 27.7824C17.0646 28.1772 16.9761 28.5915 16.8048 29.0253C16.5666 29.6286 16.217 30.1142 15.7562 30.482C15.2962 30.8476 14.7531 31.0659 14.127 31.1368C13.5017 31.2056 12.8213 31.0947 12.0859 30.8043C11.3482 30.5131 10.7754 30.1265 10.3675 29.6448C9.95959 29.163 9.71411 28.6308 9.63107 28.0483C9.54582 27.4648 9.62057 26.8758 9.85532 26.2813C10.0101 25.8893 10.2086 25.5477 10.4508 25.2565C10.694 24.9631 10.9725 24.7282 11.2865 24.5518C11.5983 24.3746 11.9383 24.2645 12.3065 24.2215C12.6756 24.1763 13.0652 24.208 13.4755 24.3165Z"
                        fill="white"
                      />
                    </svg>
              </v-avatar>
              <v-card-title class="">
                <h1 class="text-white text-[13px] bg-opacity-30 rounded-lg">
                Your order ships carbon neutral, reducing emissions by 0.252 units
              </h1>
              </v-card-title>
              
            </v-card>
        </v-card>
        <v-card
          class="rounded-xl bg-1 h-1/3 ..h-[280px] pa-6 w-full shadow-none"
          :style="{
            backgroundImage: 'url(/images/sellersPage/cards4.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'none'
          }"
        >
          <v-card-title class="d-flex justify-between align-center p-6" height="auto">
            <v-row class="fill-height" align="center" justify="space-between">
              <v-col class="text-white text-uppercase text-[14px] font-inter">
                Solution 4
              </v-col>
              <v-col class="d-flex justify-end">
                <v-icon size="52" class="text-[#2A2A2A]">
                  <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 47.6667C37.9662 47.6667 47.6667 37.9662 47.6667 26C47.6667 14.0339 37.9662 4.33337 26 4.33337C14.0338 4.33337 4.33334 14.0339 4.33334 26C4.33334 37.9662 14.0338 47.6667 26 47.6667Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 17.3334V25.6667"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.3333 26H25.6667"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g opacity="0.5">
                    <path
                      d="M25.9333 34.6V28.2666"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.6 25.9333H28.2667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                </v-icon>
              </v-col>
            </v-row>
          </v-card-title>
            <h1 class="text-white px-3 py-6 text-wrap leading-snug text-4xl font-bold">
              OneAnt promotes eco-friendly shopping & less waste
            </h1>
            
        </v-card>
          </v-col>
          
        
     
        
        
        
      </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts">

  
</script>

<style scoped>
@import "~/assets/scss/global.scss";
.bg1 {
  background-image: url("/public/images/sellersPage/cards4.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 999;
}
.bg1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 24px;
}
.v-card {
  position: relative;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}



.custom-card {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
 
}

</style>
