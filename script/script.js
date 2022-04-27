let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')
// const mainImage = document.getElementsByClassName('product-image')

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
let lgBoxContainer = document.createElement('div')
lgBoxContainer.classList.add('lgBoxContainer')

const closeButton = document.createElement('i')
closeButton.id = 'xmark'
closeButton.classList.add('fa', 'fa-solid', 'fa-xmark')

let toggleButtons = document.createElement('div')
toggleButtons.classList.add('toggle-buttons')

const angleLeft = document.createElement('i')
angleLeft.id = 'prev'
angleLeft.classList.add('fa', 'fa-regular', 'fa-angle-left')

const angleRight = document.createElement('i')
angleRight.id = 'next'
angleRight.classList.add('fa', 'fa-regular', 'fa-angle-right')

let thumbImageContainer = document.createElement('div')
thumbImageContainer.classList.add('lgbox-thumbnail-image-container')

const thumbOne = document.createElement('img')
thumbOne.src = "images/image-product-1.jpg";
thumbOne.alt = 'thumb one'
thumbOne.classList.add('lgbox-thumbnail', 'thumbnail')

const thumbTwo = document.createElement('img')
thumbTwo.src = "images/image-product-2.jpg";
thumbTwo.alt = 'thumb two'
thumbTwo.classList.add('lgbox-thumbnail', 'thumbnail')

const thumbThree = document.createElement('img')
thumbThree.src = "images/image-product-3.jpg";
thumbThree.alt = 'thumb three'
thumbThree.classList.add('lgbox-thumbnail', 'thumbnail')

const thumbFour = document.createElement('img')
thumbFour.src = "images/image-product-4.jpg";
thumbFour.alt = 'thumb four'
thumbFour.classList.add('lgbox-thumbnail', 'thumbnail')

const lightbox = document.createElement('div')

lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('lgbox')
        const img = document.createElement('img')
        img.src = image.src
        img.classList = 'lgbox-main-img'
        
        while (lgBoxContainer.firstChild) {
            lgBoxContainer.removeChild(lgBoxContainer.firstChild)
        }

        lgBoxContainer.appendChild(closeButton)
        lgBoxContainer.appendChild(img)

        lgBoxContainer.appendChild(toggleButtons)
        toggleButtons.appendChild(angleLeft)
        toggleButtons.appendChild(angleRight)

        lgBoxContainer.appendChild(thumbImageContainer)
        
        thumbImageContainer.appendChild(thumbOne)
        thumbImageContainer.appendChild(thumbTwo)
        thumbImageContainer.appendChild(thumbThree)
        thumbImageContainer.appendChild(thumbFour)
        
        lightbox.appendChild(lgBoxContainer)

        img.addEventListener('click', e => {
            console.log('clicked image')
        })

        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].addEventListener('mouseover', function() {
                if (activeImages.length > 0) {
                    activeImages[0].classList.remove('active')
                }
                this.classList.add('active')
                img.src = this.src
            })
        }
    })
    
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('lgbox')
})


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

// var index = 0;

// show_slide = (i) => {
//   //increment/decrement slide index
//   index += i;

//   //grab all the images
//   var images = document.getElementsByClassName("image");
//   //grab all the dots
//   var dots = document.getElementsByClassName("dot");

//   // hide all the images
//   for (i = 0; i < images.length; i++) 
//     images[i].style.display = "none";
  
//   // remove the active class from the dot
//   for (i = 0; i < dots.length; i++) 
//     dots[i].className = dots[i].className.replace(" active", "");
  
//   // if index is greater than the amount of images (set it to zero)
//   if (index > images.length - 1) 
//     index = 0 ;
  
//   // if index is less than zero (set it to the length of images)
//   if (index < 0)
//     index = images.length - 1;

//   // only display the image that's next or previous
//   images[index].style.display = "block";
//   // only make the current dot active
//   dots[index].className += " active";

// }

// window.addEventListener("onload", show_slide(index));

