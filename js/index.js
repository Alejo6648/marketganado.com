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
		.css( //3
			$("body").hasClass("dark") ?
		{background:"#000000", color:"#01939c"} : {background:"#01939c", color:"#202225"}
		);
});
