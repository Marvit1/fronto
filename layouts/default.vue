<template>
    <div>
      <head>
        <link rel="icon" type="image.png" href="/fav.png" />
      </head>
      <Header />
      <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  </style>
  