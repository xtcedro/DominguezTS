document.addEventListener("DOMContentLoaded", function () {
    const socialModal = document.getElementById("social-modal");
    const discountModal = document.getElementById("discount-modal");
    const closeSocialModalBtn = document.getElementById("close-social-modal");
    const closeDiscountModalBtn = document.getElementById("close-modal");

    // Check localStorage to see if modals have already been shown
    const modalsShown = localStorage.getItem("modalsShown");

    // Function to show the social modal
    function showSocialModal() {
        socialModal.style.display = "block";

        closeSocialModalBtn.addEventListener("click", function () {
            socialModal.style.display = "none";
            showDiscountModal(); // Show the next modal
        });
    }

    // Function to show the discount modal
    function showDiscountModal() {
        discountModal.style.display = "block";

        closeDiscountModalBtn.addEventListener("click", function () {
            discountModal.style.display = "none";
            localStorage.setItem("modalsShown", "true"); // Mark modals as shown
        });
    }

    // Show the modals in order only if they haven't been shown before
    if (!modalsShown) {
        showSocialModal();
    }
});