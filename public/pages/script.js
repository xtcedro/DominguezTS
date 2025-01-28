// script.js
import { loadHeader, loadFooter } from './assets/js/load-components.js';
import { setupNavigation } from './assets/js/navigation.js'; // Example: Another module

// Initialize components and navigation
document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
  setupNavigation(); // Example function to set up navigation if needed
});
