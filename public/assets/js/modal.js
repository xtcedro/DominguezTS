document.addEventListener("DOMContentLoaded", () => {
    // Get the modals
    const discountModal = document.getElementById("discount-modal");
    const socialModal = document.getElementById("social-modal");

    // Get the close buttons
    const closeDiscountModal = document.getElementById("close-modal");
    const closeSocialModal = document.getElementById("close-social-modal");

    // Function to show a modal with animation
    function showModal(modal) {
        modal.classList.add("modal-show"); // Add the 'show' class for animation
        modal.classList.remove("modal-hide"); // Remove the 'hide' class if present
        modal.style.display = "flex"; // Ensure it's visible
    }

    // Function to close a modal with animation
    function closeModal(modal) {
        modal.classList.add("modal-hide"); // Add the 'hide' class for animation
        modal.classList.remove("modal-show"); // Remove the 'show' class if present
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal after the animation ends
        }, 300); // Match the animation duration in milliseconds
    }

    // Show the social modal first
    showModal(socialModal);

    // When the social modal is closed, show the discount modal
    closeSocialModal.addEventListener("click", () => {
        closeModal(socialModal);
        showModal(discountModal);
    });

    // Add functionality to close the discount modal
    closeDiscountModal.addEventListener("click", () => {
        closeModal(discountModal);
    });
});