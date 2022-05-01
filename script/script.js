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



// ------------------- SHOPPING CART TOGGLE -----------------//
const closeCart = () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', closeCart);





// ------------------- LIGHTBOX -----------------//
const lightBox = document.getElementById("lightBox")

const openLightBox = () => {
  // lightBox.style.display = "block";
  lightBox.classList.add("testing-active");
}

const closeLightBox = () => {
  // lightBox.style.display = "none";
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

// ------------  CERTAIN WINDOW SIZE -------- //
// const elem = document.getElementById('thumb-1');

// document.getElementById('main-img').onclick = function () {

//     if (!$(window).width() >= 700) {
//         document.getElementById('thumb-1').style.display = 'none'
//         console.log("thumbnail has been removed")
//     } else if (!$(window).width() >= 700) {
//         console.log("thumbnail is here")

//     }
//     console.log("image has been clicked!")
// }

// 575px

// const mq = window.matchMedia( "(min-width: 700px)");

// document.getElementById('main-img').onclick = function () {
//     if (mq.matches) {
//         // document.getElementById('img-container').style.display = 'none';
//         document.getElementById('img-container').style.backgroundColor = "red";
//         console.log('image has been clicked!');
//     } else {
//         console.log('thumbnail is here');
//     }
// }



// if(screen.width<1026){//get the screen width
//     //get element form document
//     elem.style.display == 'none'//toggle visibility
//  }


