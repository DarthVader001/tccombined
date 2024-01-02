const cardBunch = document.querySelectorAll(".card__inner");


cardBunch.forEach(function (card){
  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });
})



// 2nd---page

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main-gallery",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center-gallery",{
   height: "100vh",
},'a')
.to("#top-gallery",{
    top: "-50%",
 },'a')
 .to("#bottom-gallery",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content-gallery",{
   delay: -0.2,
   marginTop: "0%"
})


// 3rd Page



// homepage js

const button = document.querySelector(".button");
const mobileMenu = document.querySelector(".mobile-menu");
var elements = document.querySelectorAll(".mobile_nav_elements");
let isMenuOpen = false;  // Flag to track menu state

function toggleMenu() {
  if (isMenuOpen) {
    // If menu is open, force hide it without animation
    mobileMenu.classList.toggle("show-out");
    mobileMenu.style.transform = "translateX(-110%)";  // Set initial position
    mobileMenu.style.opacity = "0";
    isMenuOpen = false;
  } else {
    // If menu is closed, toggle the "show" class for animation
    mobileMenu.classList.toggle("show");
    isMenuOpen = true;
  }
}

button.addEventListener("click", toggleMenu);
elements.forEach(element => {
  element.addEventListener("click" ,toggleMenu );
});

