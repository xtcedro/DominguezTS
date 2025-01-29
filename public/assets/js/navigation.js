export function setupNavigation() {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar HTML with proper list structure
    navbar.innerHTML = `
        <ul class="nav-links">
            <li><a href="index.html">🏠 Home</a></li>
            <li><a href="about.html">📖 About Us</a></li>
            <li><a href="services.html">🛠️ Services</a></li>
            <li><a href="contact.html">📬 Contact Us</a></li>
        </ul>
    `;

    // Highlight the active tab based on the current page
    const currentPath = window.location.pathname.split("/").pop(); // Get the current file name
    const links = navbar.querySelectorAll(".nav-links a");

    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
}