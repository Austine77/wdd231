document.addEventListener('DOMContentLoaded', () => {
  // 1. Highlight current nav link
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav.nav-menu a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (linkPath === 'index.html' && (currentPath === '' || currentPath === '/'))) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // 2. Smooth scroll
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

  // 3. Cart: add-to-cart button handler
  const buttons = document.querySelectorAll('.add-to-cart');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

  // 4. Cart display handler (only if on cart page)
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

  // 5. Last update footer
  const updateElement = document.getElementById("last-update");
  if (updateElement) {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    const formattedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    updateElement.textContent = `Last Update: ${formattedDate} ${formattedTime}`;
  }
});
