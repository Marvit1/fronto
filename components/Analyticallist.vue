<template>
  <NuxtLink to="/analiticl">
    <div class="flex sm:w-[600px] w-[300px] justify-center  text-black hover:bg-gray-700 hover:text-yellow-500 bg-gray-100 shadow-xl rounded-lg hover:scale-105 mx-2 relative">
      <h1 class="text-2xl p-4">Վերլուծական</h1>
    </div>
  </NuxtLink>

  <main class="flex items-center justify-center w-full my-6 p-2 bg-gray-100 rounded-lg hover:bg-gray-700">
    <div class="flex flex-col sm:flex-row items-center justify-center w-full sm:w-full relative">
      <div v-for="post in ainPost.slice(2, 3)" :key="post.id" class="flex flex-col w-full relative m-4 overflow-hidden border border-gray-300 shadow-lg rounded-lg transition-transform hover:scale-105">
        <NuxtLink :to="`/post/${post.id}`">
          <img :src="post.get_thumbnail" alt="" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-t-lg">
          <div class="p-4 bg-black bg-opacity-70 text-white text-center rounded-b-lg">
            <h6 class="text-sm font-bold hover:text-yellow-300 line-clamp-3">{{ post.name }}</h6>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>

  <main class="flex items-center justify-center w-full my-6 p-2 bg-gray-100 rounded-lg hover:bg-gray-700">
    <div class="flex flex-col sm:flex-row items-center justify-center w-full sm:w-full relative">
      <div v-for="post in ainPost.slice(0, 1)" :key="post.id" class="flex flex-col w-full relative m-4 overflow-hidden border border-gray-300 shadow-lg rounded-lg transition-transform hover:scale-105">
        <NuxtLink :to="`/post/${post.id}`">
          <img :src="post.get_thumbnail" alt="" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-t-lg">
          <div class="p-4 bg-black bg-opacity-70 text-white text-center rounded-b-lg">
            <h6 class="text-sm font-bold hover:text-yellow-300 line-clamp-3">{{ post.name }}</h6>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>

 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const ainPost = ref([]);
const { $api } = useNuxtApp();

const getainPost = async () => {
  try {
    const response = await $api.get('/analytical/');
    ainPost.value = response.data;
  } catch (error) {
    console.error(error);
    // Handle the error appropriately (e.g., display an error message to the user)
  }
};

onMounted(() => {
  getainPost();
});
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
