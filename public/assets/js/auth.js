// auth.js - Handles user registration and login
document.addEventListener("DOMContentLoaded", () => {
    // Handle Register Form Submission
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            // Validate passwords match
            if (password !== confirmPassword) {
                displayMessage("Passwords do not match", "error", "registerForm");
                return;
            }

            try {
                const response = await fetch("/api/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const message = await response.text();

                if (response.ok) {
                    displayMessage(message || "Registration successful!", "success", "registerForm");
                    document.getElementById("registerForm").reset(); // Clear form
                    setTimeout(() => {
                        window.location.href = "login.html"; // Redirect to login
                    }, 2000);
                } else {
                    displayMessage(`Error: ${message || "Registration failed."}`, "error", "registerForm");
                }
            } catch (error) {
                console.error("Registration Error:", error);
                displayMessage("Failed to connect to the server.", "error", "registerForm");
            }
        });
    }

    // Handle Login Form Submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            try {
                const response = await fetch("/api/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });

                const message = await response.text();

                if (response.ok) {
                    displayMessage(message || "Login successful!", "success", "loginForm");
                    const result = await response.json();
                    localStorage.setItem("token", result.token); // Save JWT token
                    document.getElementById("loginForm").reset(); // Clear form
                    setTimeout(() => {
                        window.location.href = "dashboard.html"; // Redirect to dashboard
                    }, 2000);
                } else {
                    displayMessage(`Error: ${message || "Login failed."}`, "error", "loginForm");
                }
            } catch (error) {
                console.error("Login Error:", error);
                displayMessage("Failed to connect to the server.", "error", "loginForm");
            }
        });
    }
});

// Utility Function: Display Success or Error Messages
function displayMessage(message, type, formId) {
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = message;
    responseMessage.className = `response-message ${type}`; // Apply success or error styles
    responseMessage.style.display = "block"; // Make the message visible
}

// Utility Function: Logout User
function logoutUser() {
    localStorage.removeItem("token"); // Remove token
    window.location.href = "login.html"; // Redirect to login page
}