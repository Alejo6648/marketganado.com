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

$(".darkmode").click(function(){
	$("body").toggleClass("dark")
		.css(
			$("body").hasClass("dark") ?
		{background:"#000000", color:"#01939c"} : {background:"#01939c", color:"#202225"}
		);
});

const addToCart=document.querySelectorAll('[data-btn-action="add-btn-cart"]');

const closeModal=document.querySelector('.jsModalClose');

addToCart.forEach(btn => {
    
    btn.addEventListener('click',(event)=>{

        const nameModal=event.target.getAttribute('data-modal');

        const modal=document.querySelector(nameModal);

        modal.classList.add('active');

    })

});

closeModal.addEventListener('click',(event)=>{
    event.target.parentNode.parentNode.classList.remove('active');
})

window.onclick = (event)=>{
    const modal=document.querySelector('.modal.active');

    if(event.target == modal){
        modal.classList.remove('active');
    }
}
const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach(controller => {
controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
    card.setAttribute("data-visible", true);
    } else {
    card.setAttribute("data-visible", false);
    }
})
})

const buttonsComponent = document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons__toggle');

buttonsToggle.addEventListener('click', toggleButtons);

function toggleButtons() {
	buttonsToggle.classList.toggle('buttons__toggle--active');
	buttonsComponent.classList.toggle('buttons--active');
	document.activeElement.blur();
}

var cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "style.css";
document.head.appendChild(cssLink);
