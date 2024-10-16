import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT0hbq2jhN-qThlkJHcMTApchRI6EJIW4",
  authDomain: "apex-food.firebaseapp.com",
  projectId: "apex-food",
  storageBucket: "apex-food.appspot.com",
  messagingSenderId: "219042414201",
  appId: "1:219042414201:web:c3ff0fb33bb5eb83261ea8",
  measurementId: "G-12X1ML4KPN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
.use(router)
.mount('#app')

