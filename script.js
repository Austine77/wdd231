// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const courseButtons = document.querySelectorAll('.course-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all filter buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      courseButtons.forEach(courseBtn => {
        if (filter === 'all') {
          courseBtn.style.display = 'inline-block';
        } else {
          // Show only buttons with matching class, else hide
          if (courseBtn.classList.contains(filter)) {
            courseBtn.style.display = 'inline-block';
          } else {
            courseBtn.style.display = 'none';
          }
        }
      });
    });
  });
});
