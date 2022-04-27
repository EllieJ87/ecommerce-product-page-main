// This is the reference to the local storage element 'shoppingCart'
let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart) {
	productsInCart = []
}

// can target the id rather 
const parentElement = document.getElementById('buyItems')
const cartSumPrice = document.getElementById('sum-prices')
const quantityNumber = document.getElementById('quantity-total')
const products = document.querySelectorAll('.product-under')

let countNum = 0

const changeCount = (num) => {
	countNum += num
	document.getElementById('count-indicator').innerHTML = countNum
} 

const countTheSumPrice = () => {
	let sum = 0
	productsInCart.forEach(item => {
		sum += item.price
	})
	return sum
}

const updateShoppingCartHTML = () => {
	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart))
	if(productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			return `

			<li class="buyItem">
				<img src="${product.image}">
				<div>
					<h5>${product.name}</h5>
					<div class="price-info">
						<h6>$125.00</h6> 
						<h6>x</h6>
						<h6 class="countOfProduct">${product.count}</h6>
						<h6 id="sum-prices" class="bold-font">$${product.price}.00</h6>
						<i id="deleteAll" class="fas fa-trash-alt"></i>
					</div>
				</div>
      </li>
      `	
		})

		parentElement.innerHTML = result.join('')
		document.querySelector('.checkout').classList.remove('hidden')
		//  The quantity number instead
		// cartSumPrice.innerHTML = countTheSumPrice()

	} else {
		document.querySelector('.checkout').classList.add('hidden')
		// NOT DISPLAYING THE EMPTY CART MESSAGE
		parentElement.innerHTML = '<h4 class="cartEmpty">Your cart is empty</h4>'
		// can add my own information needed in here
		// cartSumPrice.innerHTML = ""
		// Add document.querySelector('.checkout').classList.add('hidden')
		// For the div element to be removed
	}
}

const updateProductsInCart = (product) => {
	for(let i = 0; i < productsInCart.length; i++) {
		if(productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
 		}
	}
	productsInCart.push(product);
}

// class of products-under
products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('.cartImg').src; //change to a class and add to the image?
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

const quantityButton = document.getElementById('quantity-button')

// $('#button-plus').click(function(){
// 	console.log('You have clicked on the Plus button')
// })

// $('#button-minus').click(function(){
// 	console.log('You have clicked on the Minus button')
// })

// id of buyitems
// could remove the parent item function and just have the if statement? 
// could change these to be id's instead? as there will only be 1 of these on the page
// was parent Element
// parentElement.addEventListener('click', (e) => {
// 	const isPlusButton = e.target.classList.contains('button-plus')
// 	const isMinusButton = e.target.classList.contains('button-minus')
// 	if(isPlusButton || isMinusButton) {
// 		for(let i = 0; i < productsInCart.length; i++) {
// 			if(productsInCart[i].id === e.target.dataset.id) {
// 				if(isPlusButton) {
// 					productsInCart[i].count += 1
// 				} else if(isMinusButton) {
// 					productsInCart[i].count -= 1
// 				}
// 				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count
// 			}
// 			if(productsInCart[i].count <= 0) {
// 				productsInCart.splice(i, 1)
// 			}
// 		}
// 		updateShoppingCartHTML()
// 	}
// })

parentElement.addEventListener('click', (e) => {
	const isDeleteButton = e.target.classList.contains('deleteAll')
	console.log('delete button has been clicked', isDeleteButton)
})

updateShoppingCartHTML()