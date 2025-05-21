document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set last modified date
  const lastModifiedElem = document.getElementById("lastModified");
  if (lastModifiedElem) {
    const lastModified = new Date(document.lastModified);
    lastModifiedElem.textContent = `Last Modified: ${lastModified.toLocaleString()}`;
  }

  // Hero button click alert
  const heroButton = document.querySelector(".hero button");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      alert("Welcome to Essien Udim Chamber of Commerce!");
    });
  }

  // Fetch and display business members
  fetch('members.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load members.json");
      }
      return response.json();
    })
    .then(data => {
      const directory = document.getElementById('directory');
      data.forEach(member => {
        const article = document.createElement('article');

        article.innerHTML = `
          <img src="${member.image}" alt="${member.name}" style="width:100%; max-height:150px; object-fit:cover; border-radius:6px;">
          <h4>${member.name}</h4>
          <p>${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></p>
        `;

        directory.appendChild(article);
      });
    })
    .catch(error => {
      console.error("Error loading directory data:", error);
    });
});
