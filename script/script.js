let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

// ------------------- THUMBNAIL CHANGES -----------------//
for (let i = 0; i < thumbnails.length; i++) {
  
  thumbnails[i].addEventListener('mouseover', function() {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active')
    }
    
    this.classList.add('active')
    document.getElementById('main-img').src = this.src
  })
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-carousel")
    .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length -1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

  })
})

// ------------------- LIGHTBOX -----------------//
const lightBox = document.getElementById("lightBox")

const openLightBox = () => {
  lightBox.classList.add("testing-active");
}

const closeLightBox = () => {
  lightBox.classList.remove("testing-active");
}

const showSlides = (e) => {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("thumbnail-lightbox");
  if (e > slides.length) {
    slideIndex = 1
  }
  if (e < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      // slides[i].classList.add("slides-display")
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // slides[slideIndex-1].classList.add("slides-active")
  dots[slideIndex-1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (img) => {
  showSlides(slideIndex += img);
}

const currentSlide = (img) => {
  showSlides(slideIndex = img);
}