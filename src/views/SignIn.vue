<script setup>
import { SignIn } from 'vue-clerk'
</script>

<template>
    <div class="justify-center items-center mt-20 flex">
        <SignIn path="/sign-in" after-sign-in-url="/" sign-up-url="/sign-up" />
    </div>
</template>