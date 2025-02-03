export function setupNavigation() {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar HTML with a hamburger menu
    navbar.innerHTML = `
        <div class="menu-container">
            <button class="hamburger-menu" id="menu-toggle" aria-label="Toggle navigation">
                ☰
            </button>
            <div class="sidebar hidden" id="nav-menu">
                <ul>
                    <li><a href="index.html">🏠 Home</a></li>
                    <li><a href="about.html">🧑‍💻 About Us</a></li>
                    <li><a href="services.html">⌨️ Services</a></li>
                    <li><a href="contact.html">📬 Contact Us</a></li>
                </ul>
            </div>
        </div>
    `;

    // Get elements
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Event Listener for Hamburger Menu Toggle
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
        navMenu.classList.toggle("visible");
    });
}