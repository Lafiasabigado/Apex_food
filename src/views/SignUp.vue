<script setup>
import { SignUp } from 'vue-clerk'
</script>

<template>
  <div class="justify-center flex mt-10">
    <SignUp path="/sign-up" afterSignUpUrl="/" sign-in-url="/sign-in"/>
  </div>
</template>