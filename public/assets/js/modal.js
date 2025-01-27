document.addEventListener("DOMContentLoaded", () => {
    // Get modal and buttons
    const discountModal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");

    // Check if the modal has already been shown
    if (!localStorage.getItem("modalShown")) {
        // Show the modal immediately
        discountModal.style.display = "block";

        // Mark the modal as shown in localStorage
        localStorage.setItem("modalShown", "true");
    }

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", () => {
        discountModal.style.display = "none";
    });

    // Close modal if user clicks outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === discountModal) {
            discountModal.style.display = "none";
        }
    });
});
