if (document.getElementById("cart-items")) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  let total = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `<strong>${item.name}</strong> - $${item.price}`;
      cartContainer.appendChild(div);
      total += parseFloat(item.price);
    });
    totalPriceEl.textContent = total.toFixed(2);
  }
}
