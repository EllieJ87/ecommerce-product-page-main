import generateToast from './toast.js';

const amtBtns = document.querySelectorAll('.amt');
const qty = document.querySelector('#qty');

// const trashBtn = document.querySelector('#trash');
const cartBody = document.querySelector('#cart__body');
const checkoutBtn = document.querySelector('#checkout');
const cartIndicator = document.querySelector('#cartIndicator');

let total = 0;
let amt = 0;

const checkoutState = {
  'default': 
    `
    <div></div>
    <p class="cart-empty">Your Cart is Empty</p>
    <div></div>
    `,
  
  'items': 
    `
    <div>
    <div class="cart-body-content">
              <img class="cart-img" src="images/image-product-1-thumbnail.jpg" alt="shoes">
              <div>
                <h5>Fall Limited Edition Sneakers</h5>
                <div class="price-info">
                  <span>$125.00</span>
                  <span>&times;</span>
                  <span id="amt">3</span>
                  <span id="total">$375</span>
                  <i id="trash" aria-label="Remove product from cart" class="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
            <button class="btn checkout">Checkout</button>
    `
}

// `
// <div>
//   <div class="cart__body--content-description flex gap-1">
//     <img class="cart__img" src="./images/image-product-1-thumbnail.jpg" alt="Shoes">
//         <div class="grid alt-bkg1">
//           <p class="product--name">Fall Limited Edition Sneakers</p>
//           <p class="product--amt flex">
//             <span>$125.00</span>
//             <span>&times;</span>
//             <span id="amt">3</span>
//             <span id="total" class="text font-bold">$375</span>
//           </p>
//         </div>
//       </div>

//       <i id="trash" class="fas fa-trash-alt"></i>

//     </div>
//     <button class="cart__body--btn rounded accent-pale bg-accent fs-2 font-bold">Checkout
//     </button>
//   </div>
//   `

// ------------------- SHOPPING CART TOGGLE -----------------//
const closeCart = () => {
	const cart = document.querySelector('#cartPanel');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}

const openShopCart = document.querySelector('#cartBtn');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('#cartPanel');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', closeCart);

const cartPanel = document.querySelector('#cartPanel');
// const cartBtn = document.querySelector('#cartBtn');

// function toggleCart(){
//   cartBtn.getAttribute('aria-expanded') === 'false'
//     ? cartBtn.setAttribute('aria-expanded', 'true')
//     : cartBtn.setAttribute('aria-expanded', 'false')
//   cartBtn.getAttribute('aria-expanded') === 'false'
//     ? cartPanel.setAttribute('disabled', 'true')
//     : cartPanel.removeAttribute('disabled')
// }

// ------------------- SHOPPING CART TOGGLE -----------------//

function updateCartState(){
  if(amt === 0){
    cartBody.innerHTML = checkoutState.default;
    cartIndicator.textContent = null;
    cartIndicator.classList.remove('cartIndicator-active');
  } else {
    total += amt;
    cartBody.innerHTML = checkoutState.items;
    const PRICE = 125;
    const productAmt = document.querySelector('#amt');
    const productTotal = document.querySelector('#total');
    productAmt.textContent = total;
    cartIndicator.textContent = total;
    cartIndicator.classList.add('cartIndicator-active');
    productTotal.textContent = `$${total * PRICE}.00`;
    // document.querySelector('.cart__body--btn').textContent = `Checkout (${`$${total * PRICE}.00`})`;
    generateToast(`${amt} Boo`)
  }
}

function handleAmtBtnClick(e){
  if(e.currentTarget.id === 'amt--decrease'){
    amt === 0 ? e.currentTarget : amt--;
  } else {
    amt++;
  }
  qty.textContent = amt;
  const amtDecreaseBtn = document.querySelector('#amt--decrease');
  if(amt === 0){
    amtDecreaseBtn.setAttribute('disabled', 'true');
    // amtDecreaseBtn.classList.remove('accent');
    // amtDecreaseBtn.classList.add('alt-bkg2');
  } else {
    amtDecreaseBtn.removeAttribute('disabled');
    // amtDecreaseBtn.classList.remove('alt-bkg2');
    // amtDecreaseBtn.classList.add('accent');
  }
}

amtBtns.forEach(b => b.addEventListener('click', handleAmtBtnClick));

// cartBtn.addEventListener('click', toggleCart);

checkoutBtn.addEventListener('click', () => {
  amt =+ qty.textContent;
  updateCartState();
});

cartPanel.addEventListener('click', (e) => {
  e.currentTarget === e.target && toggleCart();
  if(e.target === document.querySelector('#trash')){
    amt = 0;
    total = 0;
    updateCartState();
    generateToast('Items removed from cart.')
  }
});
