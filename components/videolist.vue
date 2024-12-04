<template>
  <div v-if="videoList.length > 0" class="p-4 bg-gray-100 rounded-lg shadow-md">
    <NuxtLink to="/video">
      <h1 class="text-2xl font-bold mb-4 text-center">Տեսանյութ</h1>
    </NuxtLink>

    <!-- Container with conditional scrolling -->
    <div class="custom-scrollbar max-h-[calc(100vh-120px)]  overflow-y-auto sm:overflow-x-auto  sm:overflow-y-hidden">
      <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <li
          v-for="video in videoList"
          :key="video.id"
          class="flex-none sm:w-64 bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          <NuxtLink :to="`/video/${video.id}`">
            <video
              controls
              :src="video.get_video_url"
              alt="Video"
              class="w-full h-32 object-cover rounded-lg mb-2"
            ></video>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">{{ video.name }}</h3>
            <p class="text-gray-500 text-sm truncate hover:text-orange-400">{{ video.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $api } = useNuxtApp();
const videoList = ref([]);

// Fetch the video list on component mount
const getVideoList = async () => {
  try {
    const response = await $api.get('/latest-video/');
    videoList.value = response.data;
  } catch (error) {
    console.error('Error fetching video list:', error);
  }
};

onMounted(getVideoList);
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4a5568;
  border-radius: 4px;
}
</style>
