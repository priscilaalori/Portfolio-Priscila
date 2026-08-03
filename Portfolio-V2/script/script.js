
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".proyecto-card");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function actualizarCarrusel(){

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

}

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    actualizarCarrusel();

});

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    actualizarCarrusel();})
