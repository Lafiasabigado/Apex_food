<script setup>
import { SignUp, useAuth } from 'vue-clerk'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { isSignedIn } = useAuth()
const router = useRouter()
const signUpMessage = ref('')

onMounted(() => {
  if (isSignedIn.value) {
    signUpMessage.value = 'Vous êtes déjà inscrit et connecté.'
    router.push('/')  // Redirection vers la page d'accueil si déjà connecté
  }
})

// Mettre à jour le message lorsque l'inscription réussit
const handleSignUp = () => {
  signUpMessage.value = 'Inscription réussie !'
  setTimeout(() => router.push('/'), 1000)  // Redirection après un court délai
}
</script>

<template>
  <div class="justify-center items-center mt-10 flex flex-col">
    <SignUp 
      path="/sign-up"
      afterSignUpUrl="/" 
      signInUrl="/sign-in"
      @signUp={handleSignUp}
    />
    <p v-if="signUpMessage" class="text-green-500 mt-4">{{ signUpMessage }}</p>
  </div>
</template>
