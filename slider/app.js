const slides = document.querySelectorAll(".slide");

let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

function prev() {
    if (counter > 0) {
        counter--;
    }
    slideImage();
}

function next() {
    if (counter < slides.length - 1) {
        counter++;
    }
    slideImage();
}

function slideImage() {
    slides.forEach((slide) => {
        slide.style.transform = `translatex(-${counter * 100}%)`
    })
}