console.log("JavaScript is working!");

// Greeting message
window.onload = function() {
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good morning and welcome, viewer!";
    } else if (hour < 18) {
        message = "Good afternoon and welcome, viewer!";
    } else {
        message = "Good evening and welcome, viewer!";
    }

    const greeting = document.getElementById("greeting");

    greeting.textContent = message;
    greeting.style.color = "whitesmoke";
    greeting.style.fontSize = "40px";
    greeting.style.fontFamily = "'Mea Culpa', cursive";
    greeting.style.textAlign = "center";
    greeting.style.marginTop = "120px";

    // Show the first video when the page loads
    showSlide(0);
};


// Video slideshow
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) {
        return;
    }

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


// Previous and next arrows
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}