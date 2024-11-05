<script setup>
import { SignIn, useAuth } from 'vue-clerk'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { isSignedIn } = useAuth()
const router = useRouter()
const signInMessage = ref('')

onMounted(() => {
  if (isSignedIn.value) {
    signInMessage.value = 'Vous êtes déjà connecté.'
    router.push('/')  // Redirection vers la page d'accueil si déjà connecté
  }
})

// Mettre à jour le message lorsque la connexion réussit
const handleSignIn = () => {
  signInMessage.value = 'Connexion réussie !'
  setTimeout(() => router.push('/'), 1000)  // Redirection après un court délai
}
</script>

<template>
  <div class="justify-center items-center mt-20 flex flex-col">
    <SignIn 
      path="/sign-in" 
      afterSignInUrl="/" 
      signUpUrl="/sign-up"
      @signIn={handleSignIn}
    />
    <p v-if="signInMessage" class="text-green-500 mt-4">{{ signInMessage }}</p>
  </div>
</template>
