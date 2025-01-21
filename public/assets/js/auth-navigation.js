document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    const navbar = document.querySelector(".navbar");

    if (token) {
        // User is signed in
        navbar.innerHTML = `
            <a href="index.html">🏠 Home</a>
            <a href="about.html">📖 About Us</a>
            <a href="about2.html">👨‍💻 About Pedro Dominguez</a>
            <a href="services.html">🛠️ Services</a>
            <a href="gallery.html">🖼️ Gallery</a>
            <a href="appointments.html">📅 Submit Appointments</a>
            <a href="view-appointments.html">👀 View Appointments</a>
            <a href="contact.html">📬 Contact Us</a>
            <a href="dashboard.html">📊 Dashboard</a>
            <button class="cta-button secondary" onclick="signOut()">🔓 Sign Out</button>
        `;
    } else {
        // Visitor (not signed in)
        navbar.innerHTML = `
            <a href="index.html">🏠 Home</a>
            <a href="about.html">📖 About Us</a>
            <a href="about2.html">👨‍💻 About Pedro Dominguez</a>
            <a href="services.html">🛠️ Services</a>
            <a href="register.html">📝 Register</a>
            <a href="login.html">🔑 Login</a>
        `;
    }

    // Highlight active tab
    const currentUrl = window.location.pathname;
    const links = navbar.querySelectorAll("a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });
});

// Sign Out Function
function signOut() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}