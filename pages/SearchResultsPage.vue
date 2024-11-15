<template>
  <div class="container mx-auto p-4 max-w-[1260px]">
    <h1 class="text-xl font-bold mb-4">Որոնման արդյունքները</h1>

    <div v-if="paginatedSearchResults.length > 0">
      <div v-for="result in paginatedSearchResults" :key="result.id" class="p-4 bg-white shadow rounded-lg mb-4">
        <NuxtLink :to="`/post/${result.id}`">
          <h2 class="text-lg font-semibold">{{ result.name }}</h2>
        </NuxtLink>
        <!-- You can add more details about the result here -->
      </div>
    </div>
    <div v-else>
      <p>Ոչ մի արդյունք չի գտնվել:</p>
    </div>

    <!-- Pagination Section -->
    <div class="flex justify-center mt-6">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-gray-300 hover:bg-gray-400 h-8 w-12 page-item cursor-pointer transition-colors duration-300 m-1 rounded-lg flex items-center justify-center"
      >
        Prev
      </button>

      <button
        v-for="pageNumber in pageNumbers"
        :key="pageNumber"
        @click="pageNumber === '...' ? null : clickCallback(pageNumber)"
        :class="{ 'bg-gray-600 text-white': currentPage === pageNumber, 'bg-gray-300 hover:bg-gray-400': currentPage !== pageNumber }"
        class="h-8 w-8 page-item cursor-pointer transition-colors duration-300 m-1 rounded-lg flex items-center justify-center"
      >
        {{ pageNumber }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="bg-gray-300 hover:bg-gray-400 h-8 w-12 page-item cursor-pointer transition-colors duration-300 m-1 rounded-lg flex items-center justify-center"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useSearchStore } from '~/state/searchStore'; // Adjust the path as necessary

const store = useSearchStore();
const searchResults = computed(() => store.searchResults);
const currentPage = ref(1);
const postsPerPage = 5; // Adjust the number of items per page as needed

const totalPages = computed(() => Math.ceil(searchResults.value.length / postsPerPage));

const pageNumbers = computed(() => {
  const numbers = [];
  const maxPagesToShow = 5; // You can adjust this number
  let startPage = currentPage.value - Math.floor(maxPagesToShow / 2);
  startPage = Math.max(startPage, 1);
  let endPage = startPage + maxPagesToShow - 1;
  endPage = Math.min(endPage, totalPages.value);

  if (startPage > 1) numbers.push(1);
  if (startPage > 2) numbers.push('...');

  for (let i = startPage; i <= endPage; i++) {
    numbers.push(i);
  }

  if (endPage < totalPages.value - 1) numbers.push('...');
  if (endPage < totalPages.value) numbers.push(totalPages.value);

  return numbers;
});

function clickCallback(newPage) {
  currentPage.value = newPage;
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
}

const paginatedSearchResults = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return searchResults.value.slice(start, end);
});
</script>

<style scoped>
/* Improved styles for pagination buttons */
.page-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
