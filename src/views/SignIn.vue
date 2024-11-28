<script setup>
import { SignInButton, SignedIn, SignedOut, UserButton } from 'vue-clerk'
</script>

<template>
  <div class="flex justify-center items-center">
    <SignedIn>
      <UserButton />
    </SignedIn>
    <SignedOut>
      <SignInButton mode="modal"/>
    </SignedOut>
  </div>
</template>

