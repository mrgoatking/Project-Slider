const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;


let slideNumber = 0;

// Slider next button
nextBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  if (slideNumber === slides.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }

  slides[slideNumber].classList.add('active');
});

// Slider prev button
prevBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  if (slideNumber === 0) {
    slideNumber = slides.length - 1;
  } else {
    slideNumber--;
  }

  slides[slideNumber].classList.add('active');
});
