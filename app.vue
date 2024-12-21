<template>
  <NuxtLayout>
    <v-app>
      <all-navbars></all-navbars>
      <v-main>
        <NuxtPage />
        <FooterAllScreenType />
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script>
export default {
  mounted() {
    useSeoMeta({
      title: "One Ant",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { property: 'og:title', content: 'Affordable Grocery Deals | OneAnt' },
        { property: 'og:description', content: 'Find affordable groceries and discounted deals with OneAnt. Save big today!' },
        { property: 'og:image', content: 'https://oneant.ca/path-to-your-image.jpg' },
        { property: 'og:url', content: 'https://oneant.ca' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'OneAnt' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Affordable Grocery Deals | OneAnt' },
        { name: 'twitter:description', content: 'Save on groceries with exclusive deals at OneAnt. Shop now!' },
        { name: 'twitter:image', content: 'https://oneant.ca/path-to-your-image.jpg' }
      ],
      script: [
        {
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "OneAnt",
            "url": "https://oneant.ca/",
            "logo": "https://oneant.ca/path-to-your-logo.jpg",
            "sameAs": [
              "https://www.facebook.com/oneant2023",
              "https://x.com/oneant_jp",
              "https://www.linkedin.com/company/oneantca"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-236-995-4946",
              "contactType": "Customer Service",
              "email": "oneant@oneant.ca"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "744 W Hastings St #420",
              "addressLocality": "Vancouver",
              "addressRegion": "BC",
              "postalCode": "v6c 1a5",
              "addressCountry": "Canada"
            },
            "description": "OneAnt is a platform that empowers local businesses and communities by facilitating group purchases, enabling users to discover, share, and save on local deals with friends.",
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "Janaki Ramani Kambhampati"
              }
            ]
          }),
          type: 'application/ld+json'
        },
        {
          innerHTML: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '939860');`
        }
      ]
    });
  },
};
</script>
