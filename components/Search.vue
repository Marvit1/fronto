<template>
  <div class="flex flex-col items-center justify-center my-4 mx-6">
    <div class="relative w-full max-w-lg mx-auto">
      <input
        v-model="store.searchQuery"
        placeholder="Որոնում..."
        @focus="clearPlaceholder"
        class="w-full border-2 border-gray-300 bg-gray-50 h-12 px-4 pr-12 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-yellow-500 focus:bg-white transition duration-300 ease-in-out hover:bg-gray-100 placeholder-gray-500"
        type="search"
        name="search"
        aria-label="Search"
        @input="store.handleSearchInput"
      />
      <svg @click="performSearch" class="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5-5m0 0a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useSearchStore } from '~/state/searchStore'; // Ensure this path is correct
import { useRouter } from 'vue-router';

const store = useSearchStore();
const router = useRouter();

const clearPlaceholder = (event) => {
  event.target.placeholder = ''; // Clear the placeholder of the input
};

const performSearch = async () => {
  await store.searchPosts(); // Fetch search results
  router.push({ name: 'SearchResultsPage' }); // Navigate to the search results page
};
</script>

<style scoped>
/* Add any scoped styles here if necessary */
</style>
