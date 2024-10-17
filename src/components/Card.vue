<script setup>
import { computed, ref } from 'vue';

const events = [
  { id:1 , name:"Caterings", image:"/images/events1.png", description:"In the new era of technology we look in the future with certainty for life."},
  { id:2 , name:"Birthdays",image:"/images/events2.png", description:"In the new era of technology we look in the future with certainty for life."},
  { id:3 , name:"Weddings", image:"/images/events3.png", description:"In the new era of technology we look in the future with certainty for life."},
  { id:4 , name:"Events",image:"/images/events4.png", description:"In the new era of technology we look in the future with certainty for life."},
]

const items = [
  { id: 1, image: '/images/menu-6.jpg', price: '$ 9.99', name: 'Fried Eggs', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', categorie:"Breakfast" },
  { id: 2, image: '/images/menu-7.jpg', price: '$ 10.99', name: 'Scrambled Eggs', description: 'Made with eggs, milk, salt, and pepper.', categorie:"Drinks" },
  { id: 3, image: '/images/menu-8.jpg', price: '$ 11.99', name: 'Omelette', description: 'Made with eggs, cheese, and vegetables.', categorie:"Desserts" },
  { id: 4, image: '/images/menu-1.jpg', price: '$ 12.99', name: 'Boiled Eggs', description: 'Made with eggs and water.', categorie:"Desserts" },
  { id: 5, image: '/images/menu-2.jpg', price: '$ 13.99', name: 'Poached Eggs', description: 'Made with eggs and vinegar.', categorie:"Desserts" },
  { id: 6, image: '/images/menu-2.jpg', price: '$ 14.99', name: 'Egg Sandwich', description: 'Made with eggs, bread, and mayo.', categorie:"Desserts" },
  { id: 7, image: '/images/menu-3.jpg', price: '$ 15.99', name: 'Egg Salad', description: 'Made with eggs, mayo, and spices.', categorie:"Main Dishes" },
  { id: 8, image: '/images/menu-4.jpg', price: '$ 16.99', name: 'Egg Benedict', description: 'Made with eggs, English muffin, and hollandaise sauce.', categorie:"Dishes" }
];

const category = [
  {id:1, name:"All"},
  {id:2, name:"Breakfast"},
  {id:3, name:"Main Dishes"},
  {id:4, name:"Dishes"},
  {id:5, name:"Drinks"},
  {id:6, name:"Desserts"}
];

const selectedcategory = ref('All')

const filteredItems = computed(() => {
    if (selectedcategory.value === "All"){
      return items
    }
    else {
      return items.filter(item => item.categorie === selectedcategory.value)
    }
});

function selectedCategory(categorie){
   selectedcategory.value = categorie
}


const customers = [
  {id:1, speech:"“The best restaurant”", description:"Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.", image:"/images/testimonial-1.jpg",name:"Sophire Robson",address:"Los Angeles, CA"},
  {id:2, speech:"“Simply delicious”", description:"Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.", image:"/images/testimonial-2.jpg",name:"Matt Cannon",address:"San Diego, CA"},
  {id:3, speech:"“One of a kind restaurant”", description:"The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.", image:"/images/testimonial-4.jpg",name:"Andy Smith",address:"San Francisco, CA"},
  {id:4, speech:"“The best restaurant”", description:"Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.", image:"/images/abdiasdev.jpg",name:"Abdias Dev",address:"California , CA"},
]
</script>

<template>

    <!-- Menu Section -->

  <div class="text-center p-4">
    <h2 class="text-center text-3xl uppercase font-bold">Our Menu</h2>
    <p class="py-4">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
  </div>
  <div class="flex-row lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-12 grid justify-center">
    <div v-for="categorie in category" :key="categorie.id" class="flex-col justify-center mx-auto p-2 flex">
      <button @click="selectedCategory(categorie.name)" class="font-bold uppercase bg-orange-200 hover:bg-orange-400 rounded-3xl p-3">{{ categorie.name }}</button>
    </div>
  </div>
  <div class="pt-7 flex-row grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center">
        <div v-for="item in filteredItems" :key="item.id"  class="border flex m-4 p-4 flex-col justify-center items-center shadow rounded-2xl hover:bg-orange-300 transition-transform duration-50 ease-in-out hover:scale-90">
           <img :src="item.image" class="rounded-lg bg-cover" alt="">
           <h2 class="text-customRed font-bold m-2">{{ item.price }}</h2>
           <h2 class="m-1 font-bold">{{ item.name }}</h2>
           <p class="text-center m-1">{{ item.description }}</p>
           <button class="text-white font-bold uppercase bg-orange-400 hover:bg-orange-600 rounded-3xl p-2">Add to cart</button>
        </div>
  </div>

  <!-- Events Section -->

  <div class="p-4">
    <h2 class="m-1 font-semi-bold text-center text-3xl">We also offer unique services for your events</h2>
    <div class="flex-row grid md:grid-cols-2 lg:grid-cols-4">
      <div v-for="event in events" :key="event.id" class="flex-col flex m-8">
        <img :src="event.image" alt="" class="w-15 hover:scale-90 duration-50 transition-transform rounded-2xl">
        <h2 class="m-1 font-bold">{{ event.name }}</h2>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>    

  <!-- Customers Section -->
  <div class="p-8">
    <h2 class="text-center text-3xl py-2">What Our Customers Say</h2>
    <div class="flex-row grid lg:grid-cols-4 md:grid-cols-2">
      <div v-for="customer in customers" :key="customer.id" class="flex-col flex m-2 p-4 shawdow-lg border dark:hover:bg-orange-300 hover:bg-orange-100 rounded-2xl">
        <h2 class="font-bold text-customRed m-2">{{ customer.speech }}</h2>
        <p class="m-2">{{ customer.description }}</p>
        <div class="flex-row flex">
          <div class="flex-col flex my-4 p-2">
            <img :src="customer.image" class="rounded-3xl w-12" alt="">
          </div>
          <div class="flex-col flex my-4 p-2">
            <h2 class="font-bold">{{ customer.name }}</h2>
            <p>{{ customer.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
