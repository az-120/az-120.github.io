function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const toggleButton = document.getElementById('toggleModeButton');
    const isDarkMode = body.classList.contains('dark-mode');

    toggleButton.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
}
