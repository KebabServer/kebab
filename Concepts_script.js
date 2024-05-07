  // JavaScript to toggle navigation visibility on phones
const navbar = document.getElementById('navbar');

// Hide the navigation when clicked outside
document.addEventListener('click', function(event) {
    if (!navbar.contains(event.target)) {
        navbar.classList.add('nav-hidden');
    }
});

// Show the navigation when clicked
navbar.addEventListener('click', function(event) {
    navbar.classList.remove('nav-hidden');
    event.stopPropagation();
});