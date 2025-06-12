document.addEventListener('DOMContentLoaded', () => {
  // 1. Highlight current nav link based on URL pathname
  const currentPath = window.location.pathname.split('/').pop(); // e.g., 'contact.html'
  const navLinks = document.querySelectorAll('nav.nav-menu a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (linkPath === 'index.html' && (currentPath === '' || currentPath === '/'))) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // 2. Smooth scroll for internal anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Search box basic handler
  const searchBox = document.querySelector('.search-box');
  if (searchBox) {
    const input = searchBox.querySelector('input[type="text"]');
    const button = searchBox.querySelector('button');

    button.addEventListener('click', () => {
      const query = input.value.trim();
      if (query) {
        // For now, just log the query
        console.log('Search query:', query);
        alert(`You searched for: "${query}"`);
        // Here you can redirect or implement search logic
        // e.g., window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
      } else {
        alert('Please enter a search term.');
      }
    });
  }
});



// scripts/scripts.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));

      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = button.getAttribute("data-price");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({ name, price });
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${name} has been added to your cart.`);
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
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
});
