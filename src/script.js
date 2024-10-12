const darkmode = document.getElementById("mode")
const html = document.documentElement;

darkmode.addEventListener('click',()=> {
   html.classList.toggle("dark");
})

/*Nav bar */

const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');

navToggle.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
});
