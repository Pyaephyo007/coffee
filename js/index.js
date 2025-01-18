function updateQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let quantity = parseInt(quantityInput.value);

  // Update quantity and ensure it doesn't go below 1
  quantity = Math.max(1, quantity + change);
  quantityInput.value = quantity;

  // Update total price
  const pricePerItem = 7650000; // Price per item in MMK
  document.querySelector(".total-price").textContent = `${pricePerItem * quantity} MMK`;
  document.getElementById("subtotal").textContent = `${pricePerItem * quantity} MMK`;
  document.getElementById("grand-total").textContent = `${pricePerItem * quantity} MMK`;
}

function removeItem() {
  document.querySelector(".cart-item").remove();
  document.getElementById("subtotal").textContent = `0 MMK`;
  document.getElementById("grand-total").textContent = `0 MMK`;
}

function clearCart() {
  document.querySelector(".cart-item").remove();
  document.getElementById("subtotal").textContent = `0 MMK`;
  document.getElementById("grand-total").textContent = `0 MMK`;
  alert("Your cart is now empty!");
}

document.addEventListener("DOMContentLoaded", () => {
    const decreaseBtn = document.querySelector(".decrease");
    const increaseBtn = document.querySelector(".increase");
    const countSpan = document.querySelector(".count");
    const priceTag = document.querySelector(".price");
    const subtotalTag = document.querySelector(".subtotal");
    const totalTag = document.querySelector(".total");

    const pricePerItem = 7650000; // Price per item in MMK
    let quantity = 1;

    const updatePrice = () => {
        const subtotal = pricePerItem * quantity;
        priceTag.textContent = `K ${subtotal.toLocaleString()}`;
        subtotalTag.textContent = `K ${subtotal.toLocaleString()}`;
        totalTag.textContent = `K ${subtotal.toLocaleString()}`;
    };

    decreaseBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            countSpan.textContent = quantity;
            updatePrice();
        }
    });

    increaseBtn.addEventListener("click", () => {
        quantity++;
        countSpan.textContent = quantity;
        updatePrice();
    });

    // Apply Gift Card (Dummy Functionality)
    document.querySelector(".apply-btn").addEventListener("click", () => {
        alert("Gift card applied (example functionality)!");
    });

    // Complete Order Button
    document.querySelector(".complete-order").addEventListener("click", () => {
        alert("Order completed!");
    });
});
