<template>
  <nav class="flex sm:flex-row flex-col sm:justify-between justify-between shadow-lg m-auto max-w-[1280px] p-4 bg-white rounded-lg">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="hover:text-gray-800 transition-colors">
        <div class="flex flex-col">
          <h1 class="font-bold text-4xl mx-8 sm:mx-4 text-gray-900">Data Politics</h1>
          <p class="sm:my-2 sm:text-sm sm:table-row hidden mx-4 text-gray-600">News for everybody for everyone</p>
        </div>
      </NuxtLink>
    </div>

    <div :class="navbarOpen ? 'flex' : 'hidden sm:flex'" class="items-center justify-center w-full sm:w-full md:w-auto mx-2 bg-gray-50 rounded-lg shadow-inner p-2">
      <ul class="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <NuxtLink to="/polit" class="hover:bg-gray-800 hover:text-white rounded-lg px-1 py-2 transition-all"><li class="text-lg">Քաղաքական</li></NuxtLink>
        <NuxtLink to="/economy" class="hover:bg-gray-800 hover:text-white rounded-lg px-1  py-2 transition-all"><li class="text-lg">Ֆինանս</li></NuxtLink>
        <NuxtLink to="/media" class="hover:bg-gray-800 hover:text-white rounded-lg px-1  py-2 transition-all"><li class="text-lg">Մամուլ</li></NuxtLink>
        <NuxtLink to="/analiticl" class="hover:bg-gray-800 hover:text-white rounded-lg px-1  py-2 transition-all"><li class="text-lg">Վերլուծական</li></NuxtLink>
        <NuxtLink to="/sport" class="hover:bg-gray-800 hover:text-white rounded-lg px-1  py-2 transition-all"><li class="text-lg">Սպորտ</li></NuxtLink>
        <NuxtLink to="/video" class="hover:bg-gray-800 hover:text-white rounded-lg px-1 py-2 transition-all"><li class="text-lg">Տեսանյութ</li></NuxtLink>
      </ul>
    </div>

    <Search />

    <div class="flex justify-center items-center flex-wrap">
      <button 
        @click="toggleNavbar"
        class="block sm:hidden items-center justify-center mt-2 mb-2 p-3 w-12 h-12 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400 focus:outline-none transition-all"
      > 
        <svg v-if="!navbarOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  components: {
    Search
  },
  data() {
    return {
      navbarOpen: false
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen
    }
  }
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
