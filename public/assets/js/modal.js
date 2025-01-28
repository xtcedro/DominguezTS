document.addEventListener("DOMContentLoaded", () => {
    // Get modals and buttons
    const discountModal = document.getElementById("discount-modal");
    const socialModal = document.getElementById("social-modal");
    const closeDiscountModal = document.getElementById("close-modal");
    const closeSocialModal = document.getElementById("close-social-modal");

    let socialModalShown = false; // Flag to ensure social modal is shown only once

    // Check if the discount modal has already been shown
    if (!localStorage.getItem("discountModalShown")) {
        // Show the discount modal immediately
        discountModal.style.display = "block";

        // Mark the discount modal as shown in localStorage
        localStorage.setItem("discountModalShown", "true");
    }

    // Close discount modal when the close button is clicked
    closeDiscountModal.addEventListener("click", () => {
        discountModal.style.display = "none";

        // Show the social modal if it hasn't been shown yet
        if (!socialModalShown) {
            socialModal.style.display = "block";
            socialModalShown = true;
        }
    });

    // Close social modal when its close button is clicked
    closeSocialModal.addEventListener("click", () => {
        socialModal.style.display = "none";
    });

    // Close modals if user clicks outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === discountModal) {
            discountModal.style.display = "none";

            // Show the social modal if it hasn't been shown yet
            if (!socialModalShown) {
                socialModal.style.display = "block";
                socialModalShown = true;
            }
        } else if (event.target === socialModal) {
            socialModal.style.display = "none";
        }
    });
});