export function setupNavigation() {
    const navbar = document.querySelector(".navbar");

    // Set the navigation bar HTML with a glowing hamburger menu & sidebar
    navbar.innerHTML = `
        <div class="menu-container">
            <button class="hamburger-menu" id="menu-toggle" aria-label="Toggle navigation">
                ☰
            </button>
            <div class="sidebar hidden" id="sidebar-menu">
                <button class="close-menu" id="close-menu" aria-label="Close navigation">✖</button>
                <ul class="nav-links">
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
    const sidebarMenu = document.getElementById("sidebar-menu");
    const closeButton = document.getElementById("close-menu");

    // Event Listener for Hamburger Menu Toggle
    menuButton.addEventListener("click", () => {
        sidebarMenu.classList.remove("hidden");
        sidebarMenu.classList.add("visible");
    });

    // Event Listener for Close Button
    closeButton.addEventListener("click", () => {
        sidebarMenu.classList.remove("visible");
        sidebarMenu.classList.add("hidden");
    });

    // Highlight the active tab based on the current page
    const currentPath = window.location.pathname.split("/").pop();
    const links = sidebarMenu.querySelectorAll(".nav-links a");

    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
}