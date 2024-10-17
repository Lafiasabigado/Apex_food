<script setup>
import Card from '../components/Card.vue';
import About from '../components/About.vue';
import Header from '../components/Header.vue';
import Footer from  '../components/Footer.vue';


import { useDark,useToggle } from '@vueuse/core';


</script>

<template>
  <div>
  <Header></Header>
  <About></About>
  <Card></Card>
  <Footer></Footer>
  </div>
</template>