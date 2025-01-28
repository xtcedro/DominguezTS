document.addEventListener("DOMContentLoaded", () => {
    // Track the currently active modal
    let activeModal = null;

    /**
     * Function to show a modal by ID
     * @param {string} modalId - ID of the modal to be displayed
     */
    function showModal(modalId) {
        // Close any currently active modal
        if (activeModal) closeModal(activeModal);

        const modal = document.getElementById(modalId);
        if (modal && modal.style.display !== "block") {
            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");
            const content = modal.querySelector(".modal-content");
            if (content) content.focus(); // Focus the modal content for accessibility
            activeModal = modalId; // Set the current modal as active
        }
    }

    /**
     * Function to close a modal by ID
     * @param {string} modalId - ID of the modal to be closed
     */
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal && modal.style.display === "block") {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
            if (activeModal === modalId) activeModal = null; // Clear active modal if matching
        }
    }

    /**
     * Event listener for closing modals (buttons and overlay clicks)
     */
    document.addEventListener("click", (event) => {
        const target = event.target;

        // Close modal if close button is clicked
        if (target.classList.contains("close-modal")) {
            const modalId = target.getAttribute("data-modal-id");
            closeModal(modalId);
        }

        // Close modal if clicking outside the modal content (on the overlay)
        if (target.classList.contains("modal")) {
            const modalId = target.id;
            closeModal(modalId);
        }
    });

    /**
     * Event listener for closing modals with the Esc key
     */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && activeModal) {
            closeModal(activeModal); // Close the active modal
        }
    });

    // ** Show the social modal first **
    showModal("social-modal");

    // Add logic to show the discount modal after closing the social modal
    const closeSocialModal = document.querySelector('[data-modal-id="social-modal"]');
    if (closeSocialModal) {
        closeSocialModal.addEventListener("click", () => {
            showModal("discount-modal"); // Only show the discount modal after social modal closes
        });
    }
});