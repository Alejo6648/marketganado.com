const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navegacion-links");
const links = document.querySelectorAll(".navegacion-links li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});