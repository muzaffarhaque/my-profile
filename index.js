window.onscroll = function() {
    scrollFunction()
};

var La = 0;

function scrollFunction() {
    if (window.innerWidth > 700) {
        var scroll_current = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scroll_current)

        if (scroll_current > La) {
            document.querySelector(".header").style.left = "-100%";
        } else {

            document.querySelector(".header").style.left = "0px";
            hedad.style.transform="translateX(00%)";

        }

        La = scroll_current;
        console.log(La,"after")
    }
}

let icon=document.querySelector("#icon")
let hedad=document.querySelector(".header")
let so=document.querySelector("#so")
let hed=document.querySelectorAll(".anker");
hed.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const button = e.currentTarget;
        console.log("yes")
        icon.className = "fas fa-bars";
        hedad.style.transform="translateX(-100%)";
        icon.style.color="rgb(15, 145, 168)"
       
        
        // so.value=true
       })})




var options = {
    strings: [
    "UI Desiner.","Team Person",'React Developer.', 'Dedicated Programmer.',"Frontend Enthusiast","Teame Person"
    ],
    typeSpeed: 150,
    backSpeed:100,
    loop:Infinity
};

var typed = new Typed('.autotext', options);

function linkdin() {
    window.open("https://www.linkedin.com/in/mohammad-muzaffarul-haque-541b761b1/")
    // location.href="https://github.com/muzaffarhaque";
}
function github() {
    window.open('https://github.com/muzaffarhaque')
}



function showsicebar(){
    // hedad.style.transform="translateX(0%)"
    if (icon.className == "fas fa-bars") {
        icon.className = "fas fa-times";
        icon.style.color="red";
        hedad.style.transform="translateX(0%)"
    } else {
     
        icon.className = "fas fa-bars";
        hedad.style.transform="translateX(-100%)";
        icon.style.color="rgb(15, 145, 168);"
        icon.style.color="white";
       
    }
}




function scrolll() {
    var left = document.querySelector(".scroll-images");
    left.scrollBy(350, 0)
}

function scrollr() {
    var right = document.querySelector(".scroll-images");
    right.scrollBy(-350, 0)
}



if(window.innerWidth<700){
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
      });
}else{
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    //   "@1.50": {
    //     slidesPerView: 4,
    //     spaceBetween: 50,
    //   },
    },
  });
}