# SP Marketing Website

Welcome to **SP Marketing**, a clean, accessible, and responsive marketing website designed to showcase digital marketing services, build brand awareness, and engage potential clients.

---

## Project Overview

SP Marketing is a multi-page website built with HTML, CSS, and JavaScript. It features:

- Home, About, Services, and Contact pages
- Responsive navigation with a hamburger menu for mobile devices
- Dynamic service listing loaded from JSON data
- Accessible modals for detailed service descriptions
- Contact form for client inquiries (form action page included)
- SEO-friendly meta tags and Open Graph metadata for better social sharing
- Organized folder structure with assets separated for maintainability

---

## Folder Structure

sp-marketing/
├── index.html # Home page
├── about.html # About us page
├── services.html # Services listing with dynamic content
├── contact.html # Contact form submission page
├── css/
│ └── styles.css # Main stylesheet
├── js/
│ ├── main.js # Main JS logic and event handling
│ └── data.js # Data fetching & service data logic
├── data/
│ └── services.json # JSON file with service details
├── images/
│ ├── logo.png
│ ├── favicon.ico
│ ├── service1.jpg
│ └── ... # Additional images for services and branding
└── README.md # This file

yaml
Copy
Edit

---

## Features

- **Responsive Design:** Works on all screen sizes with a mobile-first approach.
- **Dynamic Content:** Loads services dynamically from `services.json`.
- **Accessible Navigation:** Keyboard and screen reader friendly with ARIA attributes.
- **Modal Dialog:** Shows detailed service info in an accessible popup.
- **SEO Optimized:** Meta tags for description, author, and social sharing.
- **Form Submission:** Contact form with server-ready action page.

---

## Getting Started

1. Clone the repository or download the source code.
2. Open `index.html` in any modern browser to view the site.
3. To test dynamic service loading, run a local server (e.g., VS Code Live Server) because `fetch()` is used to load JSON data.
4. Modify `data/services.json` to update or add new services.
5. Update CSS in `css/styles.css` and JavaScript in `js/main.js` / `js/data.js` as needed.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript (ES6 Modules, Fetch API)
- JSON for data storage

---

## Accessibility & SEO

- Proper use of semantic HTML5 elements.
- ARIA attributes for menus and dialogs.
- Keyboard navigation support.
- Meta tags for SEO and Open Graph.

---

## How to Contribute

Feel free to fork the repository and submit pull requests. Suggestions and bug reports are welcome.

---

## Author

Sunday Prince Augustine  
Email: augustinesunday55@gmail.com

---

## License

This project is open source and available under the MIT License.

---

## Demo Video

Watch the [project demo video](https://youtu.be/your-video-link) for a walkthrough of the website features.

---

Thank you for checking out SP Marketing!