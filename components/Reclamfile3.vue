<template>
  <div>
    <!-- Reclamation Banner -->
    <div
      v-if="showBanner && Reclam.length"
      @click="bannerClicked"
      class="p-4 bg-blue-600 text-white flex items-center justify-between rounded-md mt-4"
      :style="{ backgroundImage: `url(${Reclam[0]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <div class="flex items-center">
        <img v-if="Reclam[0]?.image" :src="Reclam[0].image" alt="Banner Image" class="w-full h-full mr-4" />
      </div>
      <button @click.stop="closeBanner" class="text-white hover:text-gray-300">
        <!-- Close Button (X) -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $api } = useNuxtApp();
const showBanner = ref(true);
const Reclam = ref([]);

// Function to fetch reclamation data
const getReclam = async () => {
  try {
    const response = await $api.get('reclam/');
    Reclam.value = response.data;
  } catch (error) {
    console.error('Failed to fetch reclamation data:', error);
  }
};

// Function to close the banner
const closeBanner = () => {
  showBanner.value = false;
};

// Function to handle banner click
const bannerClicked = () => {
  if (Reclam.value.length && Reclam.value[0]?.link) {
    window.open(Reclam.value[0].link, '_blank');
  }
};

// Fetch reclamation data on component mount
onMounted(() => {
  getReclam();
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
