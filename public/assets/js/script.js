import { setupNavigation } from './navigation.js';
import { loadHeaderAndFooter } from './load-components.js';

// Call the functions
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  loadHeaderAndFooter();
});