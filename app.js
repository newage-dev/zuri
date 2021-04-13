const hamburger = document.querySelector(".hamburger")
const ul = document.querySelector(".nav-links")

hamburger.addEventListener('click', function (){
    console.log(ul)
        ul.classList.toggle("show")
})