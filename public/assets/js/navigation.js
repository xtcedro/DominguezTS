document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar
    navbar.innerHTML = `
        <a href="index.html">🏠 Home</a>
        <a href="about.html">📖 About Us</a>
        <a href="services.html">🛠️ Services</a>
        <a href="contact.html">📬 Contact Us</a>
    `;

    // Highlight the active tab
    const currentPath = window.location.pathname.split('/').pop(); // Get the current file name
    const links = navbar.querySelectorAll("a");

    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath.includes(currentPath)) {
            link.classList.add("active");
        }
    });
});
