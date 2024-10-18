<script setup>

const chefs = [
    {id:1, name:"Abdias Curtis" , designation:"Founder", image:"/images/team-1.jpg"},
    {id:2, name:"Rodrigue Elijah" , designation:"Co-Founder", image:"/images/team-2.jpg"},
    {id:3, name:"Nel Smith" , designation:"Co-Founder", image:"/images/team-3.jpg"},
    {id:4, name:"Georges Lebron" , designation:"Co-Founder", image:"/images/team-4.jpg"},
]

</script>

<template>
    <h2 class="text-center text-3xl uppercase font-bold  pt-10">About Us</h2>
    <div class="container max-w-4xl pt-4 lg:space-x-10 mx-auto grid flex-row justify-center items-center md:grid-cols-2 m-2">
        <div class="flex-col flex m-3">
           <img src="/src/assets/img/Image.png" class="w-15 transition-transform duration-50 hover:scale-90 md:mx-auto" alt="">
        </div>
        <div class="flex-col flex m-4">
            <h2 class="my-1 font-semi-bold text-3xl">We provide healthy food for your family.</h2>
            <p class="my-1">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
            <p class="my-1">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            <button class="rounded-full w-15 my-2 p-3 bg-orange-400 hover:bg-orange-600 text-white uppercase font-bold">More About US</button>
        </div>
    </div>
    
    <!--- Master Chef Section -->
    <h2 class="text-center text-3xl  pt-4">Our Master Chef</h2>
    <div  class="flex-row grid lg:grid-cols-4 md:grid-cols-2 mx-auto pt-4">
        <div v-for="chef in chefs" :key="chef.id" class="flex-col flex m-10 p-4 border shadow-lg rounded-lg group relative">
            <img :src="chef.image" alt="" class="rounded-full w-15">
            <h4 class="my-2 font-bold text-lg text-center">{{ chef.name }}</h4>
            <p class="text-center">{{ chef.designation }}</p>
            <div class="flex-row flex justify-center my-1 py-3">
                <div class="flex-col flex ">
                    <a href="" class="opacity-0 group-hover:opacity-100">
                        <div class="bg-orange-600 rounded-full p-3 mx-1 hover:bg-zinc-500">
                        <img src="/src/assets/img/logo-twitter 2.png" class="w-5" alt="">
                        </div>
                    </a>
                </div>
                <div class="flex-col flex">
                    <a href="" class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="bg-orange-600 rounded-full p-3 mx-1 hover:bg-zinc-500">
                        <img src="/src/assets/img/logo-instagram 1.png" class="w-4" alt="">
                        </div>
                    </a>
                </div>
            </div>
      </div>  
    </div>
</template>