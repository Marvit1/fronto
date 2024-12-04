<template>
  <div v-if="videos.length" class="p-4 bg-gray-100 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4 text-center">YouTube</h1>
    <!-- Container with conditional scrolling -->
    <div class="custom-scrollbar overflow-auto sm:overflow-x-auto sm:overflow-y-hidden h-full max-h-[calc(100vh-64px)]">
      <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <li
          v-for="video in limitedVideos"
          :key="video.id"
          class="bg-white p-4 rounded-lg shadow-md flex-none w-full sm:w-64"
        >
          <h2 class="text-lg sm:text-xl font-semibold mb-2">{{ video.title }}</h2>
          <!-- Embed YouTube video -->
          <iframe
            class="w-full h-40 sm:h-32 rounded-lgtransition-transform hover:scale-105 "
            :src="'https://www.youtube.com/embed/' + video.youtube_id"
            frameborder="0"
            allow="fullscreen"
            title="YouTube video titled {{ video.title }}"
          ></iframe>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNuxtApp } from '#app';

const { $api } = useNuxtApp();
const videos = ref([]);

// Fetch videos from the API
const fetchVideos = async () => {
  try {
    const response = await $api.get('video-emb/');
    videos.value = response.data;
  } catch (error) {
    console.error("There was an error fetching the videos:", error);
  }
};

// Limit to the first 50 videos
const limitedVideos = computed(() => {
  return videos.value.slice(0, 50);
});

onMounted(fetchVideos);
</script>

<style scoped>
/* Custom scrollbar styles for vertical and horizontal scrolling */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px; /* Width for vertical scrollbar */
  height: 12px; /* Height for horizontal scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4a5568; /* Color of the scrollbar thumb */
  border-radius: 8px; /* Rounded corners for the thumb */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #edf2f7; /* Color of the scrollbar track */
  border-radius: 8px; /* Rounded corners for the track */
}

/* Custom scrollbar styles for horizontal scrolling */
.custom-scrollbar-horizontal::-webkit-scrollbar {
  height: 12px; /* Height for horizontal scrollbar */
}

.custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
  background-color: #4a5568; /* Color of the scrollbar thumb */
  border-radius: 8px; /* Rounded corners for the thumb */
}

.custom-scrollbar-horizontal::-webkit-scrollbar-track {
  background-color: #edf2f7; /* Color of the scrollbar track */
  border-radius: 8px; /* Rounded corners for the track */
}

/* Custom scrollbar styles for vertical scrolling */
.custom-scrollbar-vertical::-webkit-scrollbar {
  width: 12px; /* Width for vertical scrollbar */
}

.custom-scrollbar-vertical::-webkit-scrollbar-thumb {
  background-color: #4a5568; /* Color of the scrollbar thumb */
  border-radius: 8px; /* Rounded corners for the thumb */
}

.custom-scrollbar-vertical::-webkit-scrollbar-track {
  background-color: #edf2f7; /* Color of the scrollbar track */
  border-radius: 8px; /* Rounded corners for the track */
}

/* Apply custom scrollbar styles for the entire scrolling container */
.custom-scrollbar {
  scrollbar-color: #4a5568 #edf2f7; /* For Firefox */
  scrollbar-width: thin; /* For Firefox */
}

/* Optional: Styles for specific horizontal and vertical containers */
.overflow-x-auto.custom-scrollbar {
  scrollbar-width: thin; /* For Firefox */
}

.overflow-y-auto.custom-scrollbar {
  scrollbar-width: thin; /* For Firefox */
}
</style>
