<template>
  
  <div class="flex flex-col sm:flex-row justify-center items-center sm:items-start max-w-[1260px] m-auto">
    <div class="sm:w-2/3 w-full">
      <main class="flex flex-col items-center justify-center my-6">
        <h1 class="text-xl flex my-2 items-center justify-center text-gray-300 hover:text-gray-900 bg-gray-700 shadow-xl shadow-gray-600/50 hover:bg-gray-400 sm:w-[480px] w-[240px]   rounded-lg">Վերլուծական</h1>
  
        <div class="flex flex-col sm:flex-col items-center justify-center">
          <div v-for="post in displayedPosts" :key="post.id" class="flex flex-col w-4/5 m-4 overflow-hidden border shadow-xl shadow-gray-600/50 rounded transition-transform hover:scale-110">
            <NuxtLink :to="`/post/${post.id}`">
              <img :src="post.get_thumbnail" alt="" class="w-full object-cover h-[200px] transition-transform hover:scale-110">
              <h3 class="text-xl font-bold text-gray-700 p-2 hover:text-yellow-700">{{ post.name }}</h3>
              <p class="text-gray-700 p-2 text-sm hover:text-yellow-700">{{ post.text.slice(0, 500) }}</p>
            </NuxtLink>
          </div>
        </div>
      </main>
  
      <!-- Pagination Section -->
      <div class="flex justify-center mt-6">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="bg-gray-300 hover:bg-gray-400 h-6 w-12 page-item relative cursor-pointer transition-colors duration-300 m-1 rounded-lg"
        >
          Prev
        </button>
  
        <button
          v-for="pageNumber in pageNumbers"
          :key="pageNumber"
          @click="pageNumber === '...' ? null : clickCallback(pageNumber)"
          :class="{ 'bg-gray-600 text-white': currentPage === pageNumber, 'bg-gray-300 hover:bg-gray-400': currentPage !== pageNumber }"
          class="flex items-center justify-center bg-gray-300 h-6 w-8 page-item relative cursor-pointer transition-colors duration-300 m-1 rounded-lg"
        >
          {{ pageNumber }}
        </button>
  
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="bg-gray-300 hover:bg-gray-400 h-6 w-12 page-item relative cursor-pointer transition-colors duration-300 m-1 rounded-lg"
        >
          Next
        </button>
      </div>
  
      
      
    </div>
    <Aside />
    </div>
  </template>
  
  <script setup>
 import { ref, onMounted, computed } from 'vue';
 import { useNuxtApp } from '#app';

 const { $api } = useNuxtApp(); 
  
  const mainPost = ref([]);
  const page = ref(1);
  const postsPerPage = 7;
  const totalPosts = ref(0);
  const currentPage = ref(1);
  
  const totalPages = computed(() => Math.ceil(totalPosts.value / postsPerPage));
  
  const pageNumbers = computed(() => {
    const numbers = [];
    const maxPagesToShow = 7;
    let startPage = currentPage.value - Math.floor(maxPagesToShow / 2);
    startPage = Math.max(startPage, 1);
    let endPage = startPage + maxPagesToShow - 1;
    endPage = Math.min(endPage, totalPages.value);
  
    for (let i = startPage; i <= endPage; i++) {
      numbers.push(i);
    }
  
    if (endPage < totalPages.value) {
      numbers.push('...');
      numbers.push(totalPages.value);
    }
  
    return numbers;
  });
  
  function clickCallback(newPage) {
    page.value = newPage;
    currentPage.value = newPage;
  }
  
  function prevPage() {
    if (currentPage.value > 1) {
      clickCallback(currentPage.value - 1);
    }
  }
  
  function nextPage() {
    if (currentPage.value < totalPages.value) {
      clickCallback(currentPage.value + 1);
    }
  }
  
  onMounted(async () => {
    await getMainPost();
  });
  
  async function getMainPost() {
    try {
      const response = await $api.get('/analytical/');
      mainPost.value = response.data;
      totalPosts.value = response.data.length;
    } catch (error) {
      console.error(error);
    }
  }
  
  const displayedPosts = computed(() => {
    const startIndex = (page.value - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return mainPost.value.slice(startIndex, endIndex);
  });
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  