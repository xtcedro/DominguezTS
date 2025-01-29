export function setupNavigation() {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar HTML with a hamburger menu
    navbar.innerHTML = `
        <div class="menu-container">
            <button class="hamburger-menu" aria-label="Toggle navigation">
                ☰
            </button>
            <ul class="nav-links">
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="about.html">📖 About Us</a></li>
                <li><a href="services.html">🛠️ Services</a></li>
                <li><a href="contact.html">📬 Contact Us</a></li>
            </ul>
        </div>
    `;

    const menuButton = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu visibility when the hamburger button is clicked
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Highlight the active tab based on the current page
    const currentPath = window.location.pathname.split("/").pop();
    const links = navbar.querySelectorAll(".nav-links a");

    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
}