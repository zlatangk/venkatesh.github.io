(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);


// Get the button and body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user's preference is dark mode (optional)
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

// Add a click event listener to the button
themeToggle.addEventListener('click', toggleDarkMode);

// Set the initial theme based on user preference
if (prefersDarkMode) {
    toggleDarkMode();
}
