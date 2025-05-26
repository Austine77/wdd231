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
