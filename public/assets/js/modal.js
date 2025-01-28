// Modal.js - Manage Modals Dynamically
class ModalManager {
  constructor() {
    this.activeModal = null;
    this.init();
  }

  init() {
    // Attach event listeners to open modals
    document.querySelectorAll('[data-open]').forEach((button) => {
      button.addEventListener('click', (e) => this.openModal(e.target.dataset.open));
    });

    // Attach event listeners to close buttons
    document.querySelectorAll('[data-close]').forEach((button) => {
      button.addEventListener('click', () => this.closeModal());
    });

    // Close modal on overlay click
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) this.closeModal();
      });
    });

    // Handle ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeModal();
      }
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      if (this.activeModal) this.closeModal(); // Ensure only one modal is open

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      this.activeModal = modal;

      // Focus on the modal for accessibility
      const focusable = modal.querySelector('[tabindex="-1"]');
      if (focusable) focusable.focus();
    }
  }

  closeModal() {
    if (this.activeModal) {
      this.activeModal.classList.remove('active');
      this.activeModal.setAttribute('aria-hidden', 'true');
      this.activeModal = null;
    }
  }
}

// Initialize ModalManager
document.addEventListener('DOMContentLoaded', () => {
  new ModalManager();
});