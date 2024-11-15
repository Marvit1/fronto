<template>
  <NuxtLink to="/sport">
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center sm:w-full w-[300px] max-w-[1260px] text-black hover:bg-gray-700 hover:text-yellow-500 bg-gray-100 shadow-xl rounded-lg hover:scale-105 mx-2 relative">
        <h1 class="text-2xl">Լրահոս</h1>
      </div>
    </div>
  </NuxtLink>

  <div class="flex flex-col items-center justify-center">
    <main class="flex items-center justify-center w-full my-6 p-2 bg-gray-100 rounded-lg hover:bg-gray-700 max-w-[1260px]">
      <div class="flex flex-col sm:flex-row items-center justify-center w-full relative">
        <div v-for="post in ainPost.slice(0, 5)" :key="post.id" class="flex flex-col w-full relative m-4 overflow-hidden border shadow-xl shadow-gray-600/50 rounded-lg transition-transform sm:hover:scale-105">
          <NuxtLink :to="`/post/${post.id}`">
            <img :src="post.get_thumbnail" alt="" class="w-full h-48 object-cover transition duration-300 ease-in-out transform hover:scale-105 rounded-xl">
            <div class="absolute bottom-0 w-full h-[74px] bg-black bg-opacity-70 text-white text-center transition duration-300 ease-in-out opacity-50 hover:opacity-90 text-clip">
              <h3 class="sm:text-base text-xs font-bold hover:text-yellow-300 text-clip overflow-hidden">{{ post.name.slice(0, 50) }}...</h3>
              <p class="sm:text-xs text-[8px] hover:text-yellow-300">{{ post.text.slice(0, 100) }}...</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>

    <main class="flex items-center justify-center w-full my-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-700 max-w-[1260px]">
      <div class="flex flex-col sm:flex-row items-center justify-center w-full relative">
        <div v-for="post in ainPost.slice(5, 10)" :key="post.id" class="flex flex-col w-full relative m-4 overflow-hidden border shadow-xl shadow-gray-600/50 rounded-lg transition-transform sm:hover:scale-105">
          <NuxtLink :to="`/post/${post.id}`">
            <img :src="post.get_thumbnail" alt="" class="w-full h-48 object-cover transition duration-300 ease-in-out transform hover:scale-105 rounded-xl">
            <div class="absolute bottom-0 w-full h-[74px] bg-black bg-opacity-70 text-white text-center transition duration-300 ease-in-out opacity-50 hover:opacity-90 text-clip">
              <h3 class="sm:text-base text-xl font-bold hover:text-yellow-300 text-clip overflow-hidden">{{ post.name.slice(0, 50) }}...</h3>
              <p class="sm:text-xs text-base hover:text-yellow-300">{{ post.text.slice(0, 100) }}...</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const ainPost = ref([]);
const { $api } = useNuxtApp();

const getainPost = async () => {
  try {
    const response = await $api.get('/main-post/');
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
/* Scoped CSS for component */
</style>
