<template>
    <div class="facebook-page-container flex justify-center my-6 mx-4">
      <div class="fb-page" 
           data-href="https://www.facebook.com/YourPageID" 
           data-tabs="timeline" 
           data-width="340" 
           data-height="500" 
           data-small-header="false" 
           data-adapt-container-width="true" 
           data-hide-cover="false" 
           data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/YourPageID" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/YourPageID">Your Page Name</a>
        </blockquote>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    // Load Facebook SDK for JavaScript
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
  </script>
  
  <style scoped>
  .facebook-page-container {
    max-width: 340px;
    margin: 0 auto;
  }
  </style>
  