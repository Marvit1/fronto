<template>
  <div class="flex flex-col sm:flex-row justify-center items-center sm:items-start max-w-[1260px] m-auto">
    <div class="sm:w-2/3 w-full">
  <div class="flex flex-col items-center justify-center my-6">
    <!-- Videos Section -->
    <div class="flex flex-col w-full sm:w-4/5">
      <div v-for="video in displayedVideos" :key="video.id" class="m-4 p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <NuxtLink :to="`/video/${video.id}`">
          <video controls :src="video.get_video_url" alt="Video" class="w-full h-64 object-cover rounded-lg mb-2"></video>
          <h3 class="text-xl font-semibold text-gray-800 hover:text-yellow-600">{{ video.name }}</h3>
        </NuxtLink>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center mt-6 space-x-2">
      <button @click="prevPage" :disabled="currentPage === 1" class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-l-lg disabled:opacity-50 transition duration-200">
        Prev
      </button>
      <button v-for="num in pageNumbers" :key="num" @click="changePage(num)" :class="{'bg-gray-700 text-white': num === currentPage, 'bg-gray-300 hover:bg-gray-400 text-gray-800': num !== currentPage}" class="font-semibold py-2 px-4 rounded-lg transition duration-200">
        {{ num }}
      </button>
      <button @click="nextPage" :disabled="currentPage >= totalPages" class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-r-lg disabled:opacity-50 transition duration-200">
        Next
      </button>
    </div>
  </div>
  </div>
  <Aside />
</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNuxtApp } from '#app';

const { $api } = useNuxtApp();

const videos = ref([]);
const currentPage = ref(1);
const videosPerPage = 3;

onMounted(async () => {
  await getVideos();
});

async function getVideos() {
  try {
    const response = await $api.get('/latest-video/');
    videos.value = response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
}

const displayedVideos = computed(() => {
  const start = (currentPage.value - 1) * videosPerPage;
  const end = currentPage.value * videosPerPage;
  return videos.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(videos.value.length / videosPerPage);
});

function changePage(page) {
  currentPage.value = page;
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

const pageNumbers = computed(() => {
  let pages = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i);
  }
  return pages;
});
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
