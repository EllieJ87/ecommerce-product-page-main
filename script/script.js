const thumbnails = document.querySelectorAll('.thumbnail-image-container') 
const mainImage = document.querySelector('.product-image')

const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')

const lightBoxOverlay = document.querySelector('.lightbox-overlay') 
const mainImagesContainer = document.querySelector('.main-images-container')

let lightboxThumbnails;
let lightboxMainImage;

thumbnailClick = (event) => {
  thumbnails.forEach(img => {
    img.classList.remove('active')
  })
  event.target.parentElement.classList.add('active')
  mainImage.src = event.target.src.replace('-thumbnail', '')
}
// NOT ADDING THE ACTIVE CLASS .. :(

nextBtnClick = () => {
  let imageIndex = getCurrentImageIndex()
  imageIndex++
  if (imageIndex > 4) {
    imageIndex = 1
  }
  setMainImage(imageIndex)
}

previousBtnClick = () => {
  let imageIndex = getCurrentImageIndex()
  imageIndex--
  if (imageIndex < 1) {
    imageIndex = 4
  }
  setMainImage(imageIndex)
}

getCurrentImageIndex = () => {
  const imageIndex = parseInt(mainImage.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''))
  return imageIndex
}

setMainImage = (imageIndex) => {
  mainImage.src = `images/image-product-${imageIndex}.jpg`
  thumbnails.forEach(img => {
    img.classList.remove('active')
  })
  thumbnails[imageIndex-1].classList.add('active')
}

MainImageClick = () => {
  if(window.innerWidth >= 800) {
    console.log('image clicked')
    if(lightBoxOverlay.childElementCount == 1) {
      const newLightbox = mainImagesContainer.cloneNode(true)
      lightBoxOverlay.appendChild(newLightbox)

      const overlayCloseBtn = document.querySelector('#overlayClose')
      overlayCloseBtn.addEventListener('click', closeLightbox)
      
      lightboxThumbnails = lightBoxOverlay.querySelectorAll('.thumbnail-image-container')
      lightboxMainImage = lightBoxOverlay.querySelector('.product-image')

      lightboxThumbnails.forEach(img => {
        img.addEventListener('click', lightboxThumbnailClick)
      })

      /*
      lightboxGallery = overlay.querySelectorAll('.pic');
      lightboxHero = overlay.querySelector('.product-hero');
      lightboxGallery.forEach(img => {
        // new click event for the thumbnail images (shuold be the same function as above)
        img.addEventListener('click', onThumbClickLightbox);
      }); 
      */

      const lightboxNextBtn = document.querySelector('.next')
      const lightboxPreviousBtn = document.querySelector('.previous')

      lightboxNextBtn.addEventListener('click', lightboxNextBtnClick)
      lightboxPreviousBtn.addEventListener('click', lightboxNextBtnClick)
    }

    lightBoxOverlay.classList.remove('hidden')
  }
}

closeLightbox = () => {
  lightBoxOverlay.classList.add('hidden')
}

lightboxThumbnailClick = (event) => {
  lightboxThumbnails.forEach(img => {
    img.classList.remove('active')
  })
  event.target.parentElement.classList.add('active')
  lightboxMainImage.src = event.target.src.replace('-thumbnail', '')
}

lightboxNextBtnClick = () => {
  let imageIndex = lightboxGetCurrentImageIndex()
  imageIndex++
  if (imageIndex > 4) {
    imageIndex = 1
  }
  lightboxSetMainImage(imageIndex)
}

lightboxNextBtnClick = () => {
  let imageIndex = lightboxGetCurrentImageIndex()
  imageIndex--
  if (imageIndex < 1) {
    imageIndex = 4
  }
  lightboxSetMainImage(imageIndex)
}

lightboxGetCurrentImageIndex = () => {
  const imageIndex = parseInt(lightboxMainImage.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product', ''))
  return imageIndex
}

lightboxSetMainImage = (imageIndex) => {
  lightboxMainImage.src = `images/image-product-${imageIndex}.jpg`
  lightboxThumbnails.forEach(img => {
    img.classList.remove('active')
  })
  lightboxThumbnails[imageIndex-1].classList.add('active')
}


thumbnails.forEach(img => {
  img.addEventListener('click', thumbnailClick)
})

nextBtn.addEventListener('click', nextBtnClick)
previousBtn.addEventListener('click', previousBtnClick)

mainImage.addEventListener('click', MainImageClick)













































// let thumbnails = document.getElementsByClassName('thumbnail')
// let activeImages = document.getElementsByClassName('active')

// // ------------------- THUMBNAIL CHANGES -----------------//
// for (let i = 0; i < thumbnails.length; i++) {
  
//   thumbnails[i].addEventListener('mouseover', function() {
//     if (activeImages.length > 0) {
//       activeImages[0].classList.remove('active')
//     }
    
//     this.classList.add('active')
//     document.getElementById('main-img').src = this.src
//   })
// }

// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//     .closest("[data-carousel")
//     .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length -1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active

//   })
// })

// // ------------------- LIGHTBOX -----------------//
// const lightBox = document.getElementById("lightBox")

// const openLightBox = () => {
//   lightBox.classList.add("testing-active");
// }

// const closeLightBox = () => {
//   lightBox.classList.remove("testing-active");
// }

// const showSlides = (e) => {
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("thumbnail-lightbox");
//   if (e > slides.length) {
//     slideIndex = 1
//   }
//   if (e < 1) {
//     slideIndex = slides.length
//   }
//   for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//       // slides[i].classList.add("slides-display")
//   }
//   for (let i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   // slides[slideIndex-1].classList.add("slides-active")
//   dots[slideIndex-1].className += " active";
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// const plusSlides = (img) => {
//   showSlides(slideIndex += img);
// }

// const currentSlide = (img) => {
//   showSlides(slideIndex = img);
// }