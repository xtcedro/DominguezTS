document.addEventListener("DOMContentLoaded", () => {
    /**
     * Generalized function to show a modal
     * @param {string} modalId - The ID of the modal to be shown
     */
    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");
            const content = modal.querySelector(".modal-content");
            if (content) content.focus(); // Set focus to modal content for accessibility
        }
    }

    /**
     * Generalized function to close a modal
     * @param {string} modalId - The ID of the modal to be closed
     */
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    }

    /**
     * Event listener for close buttons and modal overlays
     */
    document.addEventListener("click", (event) => {
        const target = event.target;

        // Close modal when clicking on close button
        if (target.classList.contains("close-modal")) {
            const modalId = target.getAttribute("data-modal-id");
            closeModal(modalId);
        }

        // Close modal when clicking on the modal overlay
        if (target.classList.contains("modal")) {
            const modalId = target.id;
            closeModal(modalId);
        }
    });

    /**
     * Event listener for closing modals with the Esc key
     */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            document.querySelectorAll(".modal").forEach((modal) => {
                closeModal(modal.id);
            });
        }
    });

    // Show the social modal first
    showModal("social-modal");

    // Add event listener to show the discount modal after closing the social modal
    const closeSocialModal = document.querySelector('[data-modal-id="social-modal"]');
    if (closeSocialModal) {
        closeSocialModal.addEventListener("click", () => {
            showModal("discount-modal");
        });
    }
});