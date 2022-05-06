const amtBtns = document.querySelectorAll('.amt');
const qty = document.querySelector('#qty');

const cartBody = document.querySelector('#cartBody');
const checkoutBtn = document.querySelector('#checkout');
const cartIndicator = document.querySelector('#cartIndicator');

let total = 0;
let amt = 0;

const checkoutState = {
  'default': 
    `
    <div class="empty-cart-content">
    <div></div>
    <p class="cart-empty">Your cart is empty</p>
    <div></div>
  </div>
    `,
  
  'items': 
    `
    <div class="cart-body-content">
      <img class="cart-img" src="images/image-product-1-thumbnail.jpg" alt="shoes">
      <div class="product-description">
        <h5 class="cart-product-title">Fall Limited Edition Sneakers</h5>
        <div class="price-info">
          <span>$125.00</span>
          <span>&times;</span>
          <span id="amt">3</span>
          <span id="total">$375</span>
        </div>
      </div>
      <i id="trash" aria-label="Remove product from cart" class="fas fa-trash-alt"></i>
    </div>
    <button id="checkout" class="btn checkout">Checkout</button>
    `
}

const Toast = {
  init() {
    this.hideTimeout = null;

    this.el = document.createElement('div')
    this.el.className = 'toast-container'
    document.body.appendChild(this.el)
  },

  show(message) {
    clearTimeout(this.hideTimeout)
    this.el.textContent = message;
    this.el.className = 'toast-container toast--visible'

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove('toast--visible')
    }, 3000)

  }
}

document.addEventListener('DOMContentLoaded', () => Toast.init());

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

const overlay = document.querySelector('.cart-overlay');
overlay.addEventListener('click', closeCart);

const cartPanel = document.querySelector('#cartPanel');

// ------------------- SHOPPING CART TOGGLE -----------------//

function updateCartState(){
  if(amt === 0){
    cartBody.innerHTML = checkoutState.default;
    cartIndicator.textContent = null;
    cartIndicator.classList.remove('cart-indicator-active');
  } else {
    total += amt;
    cartBody.innerHTML = checkoutState.items;
    const PRICE = 125;
    const productAmt = document.querySelector('#amt');
    const productTotal = document.querySelector('#total');
    productAmt.textContent = total;
    cartIndicator.textContent = total;
    cartIndicator.classList.add('cart-indicator-active');
    productTotal.textContent = `$${total * PRICE}.00`;
    Toast.show(`${amt} Added to Cart`)
  }
}

function handleAmtBtnClick(e){
  if(e.currentTarget.id === 'amtDecrease'){
    amt === 0 ? e.currentTarget : amt--;
  } else {
    amt++;
  }
  qty.textContent = amt;
  const amtDecreaseBtn = document.querySelector('#amtDecrease');
  if(amt === 0){
    amtDecreaseBtn.setAttribute('disabled', 'true');
  } else {
    amtDecreaseBtn.removeAttribute('disabled');
  }
}

amtBtns.forEach(b => b.addEventListener('click', handleAmtBtnClick));

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
    Toast.show('Items removed from Cart')
    closeCart();
    qty.textContent = amt;
  } else if (e.target === document.querySelector('#checkout')) {
    amt = 0;
    total = 0;
    updateCartState();
    Toast.show('Thank you for your purchase!')
    closeCart();
    qty.textContent = amt;
  }
});

