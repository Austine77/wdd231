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



    document.addEventListener("DOMContentLoaded", () => {
      const updateElement = document.getElementById("last-update");
      if (updateElement) {
        const now = new Date();
        updateElement.textContent = `Last Update: ${now.toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })}`;
      }

      document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
          const name = button.dataset.name;
          const price = parseFloat(button.dataset.price);
          const cart = JSON.parse(localStorage.getItem("cart")) || [];
          const existing = cart.find(item => item.name === name);
          if (existing) {
            existing.quantity += 1;
          } else {
            cart.push({ name, price, quantity: 1 });
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${name} added to cart!`);
        });
      });
    });


    import { loadMarketing, loadLaptops, loadMobiles } from './scripts/productModule.js';

    document.addEventListener("DOMContentLoaded", async () => {
      const marketingEl = document.getElementById("marketing-services");
      const laptopEl = document.getElementById("laptop-section");
      const mobileEl = document.getElementById("mobile-section");

      const mkt = await loadMarketing();
      const lap = await loadLaptops();
      const mob = await loadMobiles();

      [mkt, lap, mob].forEach((items, i) => {
        const section = [marketingEl, laptopEl, mobileEl][i];
        if (items.length === 0) {
          section.innerHTML = "<p>No products available.</p>";
          return;
        }
        items.forEach(({ name, price, image }) => {
          const div = document.createElement("div");
          div.className = "product";
          div.innerHTML = `
            <img src="${image}" alt="${name}" />
            <h4>${name}</h4>
            <p>$${price}</p>
            <button class="add-to-cart" data-name="${name}" data-price="${price}">Add to Cart</button>
          `;
          section.appendChild(div);
        });
      });

      // re-bind add-to-cart buttons from dynamic products
      document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
          const name = button.dataset.name;
          const price = parseFloat(button.dataset.price);
          const cart = JSON.parse(localStorage.getItem("cart")) || [];
          const existing = cart.find(item => item.name === name);
          if (existing) {
            existing.quantity += 1;
          } else {
            cart.push({ name, price, quantity: 1 });
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${name} added to cart!`);
        });
      });
    });