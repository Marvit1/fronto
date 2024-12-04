<template>
    <div class="flex flex-col sm:flex-row overflow-x-auto my-4">
      <marquee class="whitespace-no-wrap rounded-lg sm:mx-4 my-2 shadow-md">
        <div class="flex justify-between h-6">
          <NuxtLink v-for="main in mainPost" :key="main.id" :to="`/post/${main.id}`" class="whitespace-no-wrap mx-6">
            <p class="hover:text-yellow-700 text-gray-900 text-sm">{{ main.name }}</p>
          </NuxtLink>
        </div>
      </marquee>
    </div>
  <div class="overflow-x-auto">
    <!-- Main Content -->
  

    <div class="flex sm:flex-row flex-col justify-center items-center sm:w-full relative max-w-[1460px] m-auto">
      <div v-for="sect in section" :key="sect.id" class="flex flex-row items-center justify-center bg-white" style="height:450px;">
        <NuxtLink :to="`/post/${sect.id}`">
          <div class="flex flex-col sm:flex-row sm:w-full items-center justify-center shadow-xl rounded-lg">
            <div class="flex flex-col w-full sm:w-1/2 justify-center items-center p-4">
              <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-yellow-600">{{ sect.name }}</h2>
              <p class="mt-2 text-sm text-gray-500 md:text-base hover:text-yellow-600">{{ sect.text.slice(0, 200) }}</p>
            </div>
            <div class="w-full sm:w-1/2 rounded-r-lg" :style="{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }">
              <img :src="sect.get_image" class="w-full object-cover">
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const { $api } = useNuxtApp()

const section = ref([])
const mainPost = ref([])

onMounted(() => {
  getSection()
  getMainPost()
})

async function getSection() {
  try {
    const response = await $api.get('/section/')
    section.value = response.data
  } catch (error) {
    console.error(error)
    // Handle the error appropriately (e.g., display an error message to the user)
  }
}

async function getMainPost() {
  try {
    const response = await $api.get('/pol-col/')
    mainPost.value = response.data
  } catch (error) {
    console.error(error)
    // Handle the error appropriately (e.g., display an error message to the user)
  }
}
</script>

<style scoped>
/* Your scoped styles */
</style>
