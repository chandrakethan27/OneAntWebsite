// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

// import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import colors from 'vuetify/util/colors'
import '~/assets/scss/main.scss';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr:true,
    theme:{
      defaultTheme:"light",
      themes:{
        light:{
          dark:false,
          colors:{
            primary:colors.red.darken2,
            secondary:colors.deepPurple.accent3
          }
        },
        dark:{}
      }
    }


  })
  app.vueApp.use(vuetify)
})
