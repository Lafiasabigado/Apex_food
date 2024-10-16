<script setup>
    import { ref } from 'vue'
    import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
    import { useRouter } from 'vue-router';

    const email = ref("")
    const password = ref("")
    const router = useRouter();

    const register = () => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email.value, password.value)
         .then((data) => {
             console.log("Succesfull registred!!")
             console.log(auth.currentUser)
             router.push("/")
         }
        )
        .catch((error) => {
            console.log(error.code)
            alert(error.message)
        })
    };

    const signInwithGoogle = () => {

    };
</script>

<template>
    <form class="m-10 shadow-md p-8">
        <h2 class="text-orange-400 uppercase font-bold text-center text-2xl">Sign Up</h2>
        <div class="mb-6">
            <label  for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input v-model="email" id="email" type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div> 
        <div class="mb-6">
            <label  for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input v-model="password" id="password" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
        <div class="flex items-start mb-6">
            <p class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do have an account ? 
                <router-link to="/views/login">
                    <a href="" class="text-orange-600 hover:underline dark:text-blue-500">Login</a>.
                </router-link> 
            </p>
        </div>
        <button @click="register" type="submit" class="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2">Submit</button>
        <button @click="signInwithGoogle" id="signwithgoogle" type="submit" class="text-white bg-orange-400  hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 shadow dark:focus:ring-blue-800 m-2">Sign In with Google</button>
    </form>
</template>