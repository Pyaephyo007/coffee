// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalItems = document.getElementById('total-items');
  const totalPrice = document.getElementById('total-price');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <input type="number" value="${item.quantity}" min="1" 
          onchange="updateQuantity(${index}, this.value)">
      </td>
      <td>$${(item.price * item.quantity).toFixed(2)}</td>
      <td><button onclick="removeItem(${index})">Remove</button></td>
    `;
    cartItems.appendChild(row);
    total += item.price * item.quantity;
  });

  totalItems.innerText = cart.length;
  totalPrice.innerText = total.toFixed(2);
}

function updateQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity, 10);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

updateCart();
