<template>
  <div>
    <v-container class="px-4 py-16 mx-auto mt-32 text-center" max-width="1280">
      <v-row class="d-flex flex-column align-center gap-4">
        <v-col>
          <h1 class="mb-4 text-2xl font-bold !font-inter md:text-4xl">
            Do more with OneAnt
          </h1>
        </v-col>
      </v-row>
    </v-container>
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
          backgroundColor: '#FAF5FF',  /* Custom background color */
         
        }"
        >
          <v-list-item class="px-8"
          
          >
            <v-list-item-content class="flex border-b-[2px] pb-6 pt-4 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
                Live Streaming (1-to-1 & 1-to-Many)
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33334 17H4.33334C3.80291 17 3.2942 16.7893 2.91913 16.4142C2.54406 16.0391 2.33334 15.5304 2.33334 15V5C2.33334 4.46957 2.54406 3.96086 2.91913 3.58579C3.2942 3.21071 3.80291 3 4.33334 3H20.3333C20.8638 3 21.3725 3.21071 21.7476 3.58579C22.1226 3.96086 22.3333 4.46957 22.3333 5V15C22.3333 15.5304 22.1226 16.0391 21.7476 16.4142C21.3725 16.7893 20.8638 17 20.3333 17H19.3333"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.3333 15L17.3333 21H7.33334L12.3333 15Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            
            <v-list-item-content class="flex border-b-[2px] py-6 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Schedule a Video Call Widget
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3833 5C16.3601 5.19057 17.2577 5.66826 17.9614 6.37194C18.6651 7.07561 19.1428 7.97326 19.3333 8.95M15.3833 1C17.4126 1.22544 19.3049 2.13417 20.7496 3.57701C22.1942 5.01984 23.1053 6.91101 23.3333 8.94M22.3333 16.92V19.92C22.3345 20.1985 22.2774 20.4742 22.1658 20.7293C22.0543 20.9845 21.8906 21.2136 21.6854 21.4019C21.4802 21.5901 21.2379 21.7335 20.9741 21.8227C20.7103 21.9119 20.4307 21.9451 20.1533 21.92C17.0762 21.5856 14.1203 20.5341 11.5233 18.85C9.10717 17.3147 7.05867 15.2662 5.52334 12.85C3.83332 10.2412 2.78158 7.27099 2.45334 4.18C2.42835 3.90347 2.46121 3.62476 2.54984 3.36162C2.63846 3.09849 2.78091 2.85669 2.9681 2.65162C3.1553 2.44655 3.38314 2.28271 3.63713 2.17052C3.89111 2.05833 4.16568 2.00026 4.44334 2H7.44334C7.92864 1.99522 8.39913 2.16708 8.7671 2.48353C9.13507 2.79999 9.37541 3.23945 9.44334 3.72C9.56996 4.68007 9.80479 5.62273 10.1433 6.53C10.2779 6.88792 10.307 7.27691 10.2272 7.65088C10.1475 8.02485 9.9622 8.36811 9.69334 8.64L8.42334 9.91C9.84689 12.4135 11.9198 14.4864 14.4233 15.91L15.6933 14.64C15.9652 14.3711 16.3085 14.1858 16.6825 14.1061C17.0564 14.0263 17.4454 14.0555 17.8033 14.19C18.7106 14.5286 19.6533 14.7634 20.6133 14.89C21.0991 14.9585 21.5427 15.2032 21.8599 15.5775C22.177 15.9518 22.3455 16.4296 22.3333 16.92Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex border-b-[2px] py-6 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Video Chat Widget
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3333 15C21.3333 15.5304 21.1226 16.0391 20.7476 16.4142C20.3725 16.7893 19.8638 17 19.3333 17H7.33334L3.33334 21V5C3.33334 4.46957 3.54406 3.96086 3.91913 3.58579C4.2942 3.21071 4.80291 3 5.33334 3H19.3333C19.8638 3 20.3725 3.21071 20.7476 3.58579C21.1226 3.96086 21.3333 4.46957 21.3333 5V15Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
                <v-icon>
                  <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3333 22C17.8562 22 22.3333 17.5228 22.3333 12C22.3333 6.47715 17.8562 2 12.3333 2C6.8105 2 2.33334 6.47715 2.33334 12C2.33334 17.5228 6.8105 22 12.3333 22Z"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.3333 16C14.5425 16 16.3333 14.2091 16.3333 12C16.3333 9.79086 14.5425 8 12.3333 8C10.1242 8 8.33334 9.79086 8.33334 12C8.33334 14.2091 10.1242 16 12.3333 16Z"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.26334 4.92993L9.50334 9.16993"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.1633 14.8301L19.4033 19.0701"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.1633 9.16993L19.4033 4.92993"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.1633 9.16989L18.6933 5.63989"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.26334 19.0701L9.50334 14.8301"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
                </v-icon>
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
          backgroundColor: '#F0FDF4',  /* Custom background color */
         
        }"
        >
          <v-list-item class="px-8" >
            <v-list-item-content class="flex border-b-[2px] pb-6 pt-4 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              AI Customer Support
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 22C18.1895 22 22.6667 17.5228 22.6667 12C22.6667 6.47715 18.1895 2 12.6667 2C7.14381 2 2.66666 6.47715 2.66666 12C2.66666 17.5228 7.14381 22 12.6667 22Z"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.75665 9.00008C9.99176 8.33175 10.4558 7.76819 11.0666 7.40921C11.6774 7.05024 12.3955 6.91902 13.0938 7.03879C13.7921 7.15857 14.4255 7.52161 14.8817 8.06361C15.338 8.60561 15.5877 9.2916 15.5867 10.0001C15.5867 12.0001 12.5867 13.0001 12.5867 13.0001"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6667 17H12.6767"
                  stroke="#2A2A2A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            
            <v-list-item-content class="flex border-b-[2px] py-6 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Inventory Management

              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 2H6.66666C6.13622 2 5.62752 2.21071 5.25244 2.58579C4.87737 2.96086 4.66666 3.46957 4.66666 4V20C4.66666 20.5304 4.87737 21.0391 5.25244 21.4142C5.62752 21.7893 6.13622 22 6.66666 22H18.6667C19.1971 22 19.7058 21.7893 20.0809 21.4142C20.4559 21.0391 20.6667 20.5304 20.6667 20V8L14.6667 2Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6667 2V8H20.6667"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 13H8.66666"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 17H8.66666"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6667 9H9.66666H8.66666"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex border-b-[2px] py-6 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Sales Analytics
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6667 12H18.6667L15.6667 21L9.66666 3L6.66666 12H2.66666"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex py-6 justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Secure Payment Reconciliation

              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1039_4767)">
                  <path
                    d="M21.6667 4H3.66666C2.56209 4 1.66666 4.89543 1.66666 6V18C1.66666 19.1046 2.56209 20 3.66666 20H21.6667C22.7712 20 23.6667 19.1046 23.6667 18V6C23.6667 4.89543 22.7712 4 21.6667 4Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.66666 10H23.6667"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1039_4767">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.666656)"
                    />
                  </clipPath>
                </defs>
              </svg>
                </v-icon>
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
          backgroundColor: '#FEF2F2',  /* Custom background color */
         
        }"
        >
          <v-list-item class="px-8" >
            <v-list-item-content class="flex border-b-[2px] pb-6 pt-4 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Video Emails & Feedback
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1039_4770)">
                    <path
                      d="M22.9999 7L15.9999 12L22.9999 17V7Z"
                      stroke="#2A2A2A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.9999 5H2.99994C1.89537 5 0.999939 5.89543 0.999939 7V17C0.999939 18.1046 1.89537 19 2.99994 19H13.9999C15.1045 19 15.9999 18.1046 15.9999 17V7C15.9999 5.89543 15.1045 5 13.9999 5Z"
                      stroke="#2A2A2A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1039_4770">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            
            <v-list-item-content class="flex border-b-[2px] py-6 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Customer Insights
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1039_4785)">
                    <path
                      d="M16.9999 21V19C16.9999 17.9391 16.5785 16.9217 15.8284 16.1716C15.0782 15.4214 14.0608 15 12.9999 15H4.99994C3.93907 15 2.92166 15.4214 2.17151 16.1716C1.42137 16.9217 0.999939 17.9391 0.999939 19V21"
                      stroke="#2A2A2A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.99994 11C11.2091 11 12.9999 9.20914 12.9999 7C12.9999 4.79086 11.2091 3 8.99994 3C6.7908 3 4.99994 4.79086 4.99994 7C4.99994 9.20914 6.7908 11 8.99994 11Z"
                      stroke="#2A2A2A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.9999 20.9999V18.9999C22.9993 18.1136 22.7043 17.2527 22.1613 16.5522C21.6183 15.8517 20.8581 15.3515 19.9999 15.1299"
                      stroke="#2A2A2A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.9999 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 15.9999 10.8799"
                      stroke="#2A2A2A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1039_4785">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex border-b-[2px] py-6 border-[#E5E7EB] justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              AI Based Influencer Marketing
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9999 2L10.9999 13"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.9999 2L14.9999 22L10.9999 13L1.99994 9L21.9999 2Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </v-icon>
              </v-list-item-action>
            </v-list-item-content>
            <v-list-item-content class="flex py-6 justify-between items-center w-full">
              <v-list-item-title class="text-sm md:text-base"
               :style="{ fontWeight: '700' }"
              >
              Share Video QR on Social Channels
              </v-list-item-title>
              <v-list-item-action>
                <v-icon>
                  <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99994 3H2.99994V10H9.99994V3Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.9999 3H13.9999V10H20.9999V3Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.9999 14H13.9999V21H20.9999V14Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99994 14H2.99994V21H9.99994V14Z"
                    stroke="#2A2A2A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </v-icon>
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
const image_path = (name: string) => `/images/servicesPage/icons/${name}`;
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

.cards-container {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .cards-container {
    width: 90%;
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
  border-radius: 20px;
}

.v-list-item {
  padding: 16px;
  border-radius: 100px;
}

.v-list-item-action {
  margin-left: 16px;
}
</style>
    