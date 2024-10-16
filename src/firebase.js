

const submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
   event.preventDefault()

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed up 
   const user = userCredential.user;
   alert("Creating account....")
   window.location.href = 'sign.html'
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage)
   // ..
 });
})