const input = document.getElementById('text');
  const STORAGE_KEY = 'savedText'; // Key for local storage

  // Load saved text on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedText = localStorage.getItem(STORAGE_KEY);
    if (savedText) {
      input.value = savedText;
    }
  });

  // Save text to local storage on input
  input.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, input.value);
  });