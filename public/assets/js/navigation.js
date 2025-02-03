export function setupNavigation() {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar HTML with a hamburger menu
    navbar.innerHTML = `
        <button class="hamburger-menu" id="menu-toggle" aria-label="Toggle navigation">
            ☰
        </button>
        <div class="nav-links hidden" id="nav-menu">
            <a href="index.html">🏠 Home</a>
            <a href="about.html">🧑‍💻 About Us</a>
            <a href="services.html">⌨️ Services</a>
            <a href="contact.html">📬 Contact Us</a>
        </div>
    `;

    // Get elements
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Event Listener for Hamburger Menu Toggle
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}