// Display the last modified date in the footer in a readable format
document.addEventListener("DOMContentLoaded", () => {
  const lastModifiedElem = document.getElementById("lastModified");
  if (lastModifiedElem) {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    lastModifiedElem.textContent = `Last Modified: ${lastModified.toLocaleString(undefined, options)}`;
  }

  // Alert message when the hero button is clicked
  const heroButton = document.querySelector(".hero button");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      alert("Welcome to Essien Udim Chamber of Commerce!");
    });
  }
});
