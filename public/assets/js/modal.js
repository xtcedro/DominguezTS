document.addEventListener("DOMContentLoaded", function () {
    const socialModal = document.getElementById("social-modal");
    const discountModal = document.getElementById("discount-modal");
    const closeSocialModalBtn = document.getElementById("close-social-modal");
    const closeDiscountModalBtn = document.getElementById("close-modal");

    // Check localStorage to see if modals have already been shown
    const modalsShown = localStorage.getItem("modalsShown");

    // Function to show a modal
    function showModal(modal) {
        modal.style.display = "block";
    }

    // Function to hide a modal
    function hideModal(modal) {
        modal.style.display = "none";
    }

    // Function to handle showing the social modal
    function showSocialModal() {
        showModal(socialModal);

        closeSocialModalBtn.addEventListener("click", function () {
            hideModal(socialModal);
            showDiscountModal(); // Proceed to the next modal
        });
    }

    // Function to handle showing the discount modal
    function showDiscountModal() {
        showModal(discountModal);

        closeDiscountModalBtn.addEventListener("click", function () {
            hideModal(discountModal);
            localStorage.setItem("modalsShown", "true"); // Mark modals as shown
        });
    }

    // Show modals in sequence only if they haven't been shown before
    if (!modalsShown) {
        showSocialModal();
    }
});