// Display the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Alert message when the hero button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const heroButton = document.querySelector(".hero button");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      alert("Welcome to Essien Udim Chamber of Commerce!");
    });
  }
});
