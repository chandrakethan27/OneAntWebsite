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
      script: [
        {
          innerHTML: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '939860');`,
        },
      ],
    });
  },
};
</script>
