export function setupNavigation() {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar HTML with a hamburger menu and close button
    navbar.innerHTML = `
        <div class="menu-container">
            <button class="hamburger-menu" id="menu-toggle" aria-label="Open navigation">
                ☰
            </button>
            <div class="sidebar hidden" id="nav-menu">
                <button class="close-menu" id="close-menu" aria-label="Close navigation">✖</button>
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
    const closeButton = document.getElementById("close-menu");
    const navMenu = document.getElementById("nav-menu");

    // Open Sidebar on Click
    menuButton.addEventListener("click", () => {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("visible");
    });

    // Close Sidebar on Click
    closeButton.addEventListener("click", () => {
        navMenu.classList.remove("visible");
        navMenu.classList.add("hidden");
    });
}