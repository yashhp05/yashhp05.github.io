const btn = document.getElementById('colorBtn');
const body = document.body;

// Array of nice dark-themed colors
const themes = ['#0f172a', '#1e1b4b', '#111827', '#020617', '#171717'];
let currentTheme = 0;

btn.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length;
    body.style.backgroundColor = themes[currentTheme];
    
    // Add a little feedback in console
    console.log("Theme switched to: " + themes[currentTheme]);
});
