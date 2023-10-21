let zoomLevel = 100; // Initial zoom level

document.getElementById("zoom-in-button").addEventListener("click", function() {
    zoomLevel += 10;
    updateZoomDisplay();
});

document.getElementById("zoom-out-button").addEventListener("click", function() {
    zoomLevel -= 10;
    updateZoomDisplay();
});

function updateZoomDisplay() {
    // Ensure zoom level is within bounds (between 50% and 200%)
    zoomLevel = Math.max(50, Math.min(200, zoomLevel));
    
    // Set zoom display text
    document.getElementById("zoom-display").textContent = zoomLevel + "%";
    
    // Apply zoom to the content or perform any other actions as needed
    // Example: document.body.style.zoom = zoomLevel + "%";
}
const menuButton = document.getElementById('menu-button');
const menuContainer = document.getElementById('menu-container');

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('show-menu');
});

const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});




