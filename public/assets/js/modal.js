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

    // Show the discount modal first
    showModal(discountModal);

    // When the discount modal is closed, show the social modal
    closeDiscountModal.addEventListener("click", () => {
        closeModal(discountModal);
        showModal(socialModal);
    });

    // Add functionality to close the social modal
    closeSocialModal.addEventListener("click", () => {
        closeModal(socialModal);
    });
});