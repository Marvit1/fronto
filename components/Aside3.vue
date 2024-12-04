<template>
  <div class="flex flex-col h-[800px] relative border rounded-lg shadow-lg overflow-y-auto overflow-hidden custom-scrollbar bg-gray-50 my-6 mx-4">
    <div class="sticky top-0 z-10 flex items-center justify-center bg-gray-100 p-4 text-2xl text-black shadow-md rounded-lg hover:bg-gray-200 hover:text-yellow-400">
      <h1 class="font-semibold">Ամենադիտվածները</h1>
    </div>
    
    <div v-for="post in MainPost" :key="post.id" class="flex items-start border-b border-gray-200 transition-transform hover:scale-105">
      <NuxtLink :to="`/post/${post.id}`" class="flex items-start w-full p-4 hover:text-yellow-400 hover:bg-gray-100">
        <div :class="{ 'w-1/3': showThumbnail, 'w-0': !showThumbnail }" class="flex-shrink-0 flex items-center justify-center">
  <img :src="post.get_thumbnail" alt="" class="h-16 w-16 bg-gray-300 object-cover rounded-full" @load="showThumbnail = true" />
</div>
        <div :class="{ 'w-2/3': showThumbnail, 'w-full': !showThumbnail }" class="ml-4">
          <p class="text-sm font-medium text-gray-800">{{ post.name.slice(0, 50) }}...</p>
          <div class="flex items-center mt-1">
            <span class="text-xs text-gray-600">{{ formatDate(post.date_added) }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $api } = useNuxtApp();
const MainPost = ref([]);

const showThumbnail = ref(false);

const getMainPost = async () => {
  try {
    const response = await $api.get('/top-viewed-posts/');
    MainPost.value = response.data;
  } catch (error) {
    console.error(error);
    // Handle the error appropriately (e.g., display an error message to the user)
  }
};

const formatDate = (date) => {
  if (!date) return '';
  return `${date.slice(0, 10)}/${date.slice(11, 19)}`;
};

onMounted(() => {
  getMainPost();
});
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4a5568;
  border-radius: 4px;
}
</style>
