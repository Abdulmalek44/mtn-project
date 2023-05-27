let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();


jQuery(function ($) {
    var $navbar = $('.nav');
    var $navmenu = $('.nav-menu');
    $(window).scroll(function (event) {
        var $current = $(this).scrollTop();
        if ($current > 100) {
            $navbar.addClass('navbar-color');
            $navbar.removeClass('nav');
            $navmenu.addClass('ul-color');
            $navmenu.removeClass('.nav-menu');
        }
        else {
            $navbar.removeClass('navbar-color');
            $navmenu.removeClass('ul-color');
        }
    });
});

const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");

    }))


var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})