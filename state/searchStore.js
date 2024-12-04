import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    searchQuery: '',
    searchResults: [],
    selectedPost: null,
  }),
  actions: {
    async searchPosts() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        return;
      }
      const { $api } = useNuxtApp(); // Access $api from Nuxt app context

      try {
        const response = await $api.get(`search-posts/`, {
          params: { query: this.searchQuery }
        });
        console.log('API Response:', response.data); // Debugging line
        this.searchResults = response.data;
      } catch (error) {
        console.error('Search error:', error);
        this.searchResults = [];
        // Provide user feedback for the error
      }
    },
    handleSearchInput(event) {
      this.searchQuery = event.target.value; // Update the query with the input value
    },
  },
});
