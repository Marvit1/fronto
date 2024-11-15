<template>
  <div class="max-w-[1280px] mx-auto flex-wrap items-center">
    <Section />

    <!-- Reclamation Banner Below Main Content -->
    <Reclamfile2 />

    <div class="flex flex-col sm:flex-row justify-center items-center sm:items-start my-2">
      <MainPost />

      <!-- Hide Aside on md and larger screens -->
      <Aside class="" />
      
    </div>
    
    <videolist />
     <Yvideolist />
   
    </div>
 
</template>

<script>
export default {
  data() {
    return {
      showBanner: true // Show the banner by default
    };
  },
  methods: {
    closeBanner() {
      this.showBanner = false; // Hide the banner when the X button is clicked
    }
  }
};
</script>
