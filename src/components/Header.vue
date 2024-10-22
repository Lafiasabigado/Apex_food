<script setup>
   import { ref, onMounted } from 'vue'
   import { useDark,useToggle } from '@vueuse/core';

   
   const navContent = ref(null)

   const isDarkMode = useDark()

   const toggleDarkMode = useToggle(isDarkMode)

   const toggleNav = () => {
    if (navContent.value) {
    navContent.value.classList.toggle('hidden')
    }
  }

   onMounted(() => {
    navContent.value = document.getElementById('nav-content')
  })


</script>

<template>
    <!-- Navbar -->
    <nav class="bg-white shadow-lg dark:bg-zinc-950 dark:text-zinc-100">
      <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between items-center py-4">
              <!-- Logo -->
              <div class="text-3xl font-bold text-orange-500">
                  <a href="#">Apex Food</a>
              </div>

              <!-- Links for larger screens -->
              <div class="hidden md:flex space-x-6 dark:bg-zinc-950 dark:text-zinc-100 font-semibold">
                  <a href="#" class="dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Home</a>
                  <a href="#" class="dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">About</a>
                  <a href="#" class="dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Menu</a>
                  <a href="#" class="dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Pages</a>
                  <router-link to="/views/login">
                    <a href="" class="dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Log In</a>
                  </router-link>
                  <a href="#" class="dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">
                    <i id="mode" @click="toggleDarkMode()" class="fas fa-moon text-gray-500"></i> 
                  </a>
              </div>

              <!-- Icon (Small screens) -->
              <div class="md:hidden flex items-center justify-between space-x-8 py-4">
                  <button @click="toggleNav" id="nav-toggle" class="text-gray-600 focus:outline-none">
                      <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
                      </svg>
                  </button>
                  <a href="#" class="mx-6 dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">
                     <i id="mode" @click="toggleDarkMode()" class="fas fa-moon text-gray-500 w-50"></i> 
                  </a>
              </div>
          </div>
      </div>

      <!-- Mobile menu -->
      <div id="nav-content" class="hidden md:hidden dark:bg-zinc-950 dark:text-zinc-100 ">
          <ul class="p-20 text-center bg-white dark:bg-zinc-950 dark:text-zinc-100">
              <li class="py-2">
                  <a href="#" class="block dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Home</a>
              </li>
              <li class="py-2">
                  <a href="#" class="block  dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">About</a>
              </li>
              <li class="py-2">
                  <a href="#" class="block  dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Menu</a>
              </li>
              <li class="py-2">
                <a href="#" class="block  dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Pages</a>
            </li>
            <router-link to="/views/login">
                <a href="" class="dark:bg-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition duration-300">Log In</a>
            </router-link>   
          </ul>
        </div>
  </nav>
  <main class="dark:bg-zinc-950 dark:text-zinc-100">
    <div class="bg-[url('/src/assets/img/bg.svg')] w-full bg-cover bg-center relative h-screen">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="flex flex-col justify-center text-center items-center dark:text-zinc-950">
          <h2 class="text-4xl font-bold m-1">Best food for your taste</h2>
          <p class="text-wrap ">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <div class="flex flex-row justify-between gap-2 ">
            <button class="bg-orange-400 hover:bg-orange-600 p-3 mx-3 my-2 border rounded-3xl text-white">Book A Table</button>
            <button class="bg-orange-400 hover:bg-orange-600 text-white p-3 mx-3 my-2 border rounded-3xl">Explore Menu</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
  html.dark {
    color-scheme: dark;
  }
</style>