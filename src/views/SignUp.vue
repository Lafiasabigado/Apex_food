<script setup>
import { SignUp } from 'vue-clerk'
</script>

<template>
  <div class="justify-center items-center mt-10 flex">
    <SignUp 
      path="/sign-up"
      afterSignUpUrl="/" 
      signInUrl="/sign-in"
    />
  </div>
</template>