const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Toggle Dark Light Mode
function toggleDarkLightMode(isDarkMode) {
    nav.style.backgroundColor = isDarkMode ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor = isDarkMode ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    isDarkMode ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDarkMode ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}