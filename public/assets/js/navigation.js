export function setupNavigation() {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar HTML with a hamburger menu
    navbar.innerHTML = `
        <div class="menu-container">
            <button class="hamburger-menu" id="menu-toggle" aria-label="Toggle navigation">
                ☰
            </button>
            <ul class="nav-links" id="nav-menu">
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="about.html">📖 About Us</a></li>
                <li><a href="services.html">🛠️ Services</a></li>
                <li><a href="contact.html">📬 Contact Us</a></li>
            </ul>
        </div>
    `;

    // Get elements
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Ensure menu starts hidden on mobile
    navMenu.style.display = "none";

    // Toggle menu visibility when clicking the hamburger button
    menuButton.addEventListener("click", () => {
        if (navMenu.style.display === "none") {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
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