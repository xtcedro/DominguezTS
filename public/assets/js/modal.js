document.addEventListener("DOMContentLoaded", () => {
    // Get the modals
    const discountModal = document.getElementById("discount-modal");
    const socialModal = document.getElementById("social-modal");

    // Get the close buttons
    const closeDiscountModal = document.getElementById("close-modal");
    const closeSocialModal = document.getElementById("close-social-modal");

    // Function to show a modal
    function showModal(modal) {
        modal.style.display = "block";
    }

    // Function to close a modal
    function closeModal(modal) {
        modal.style.display = "none";
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