// Set current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Sound for theme switching
const switchSound = new Audio("switch.mp3"); // Place this file in your project root

// Apply saved theme (if any)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  body.classList.remove("dark");
  body.classList.add(savedTheme);
  toggleBtn.textContent = savedTheme === "dark"
    ? "☀️ Switch to Light Mode"
    : "🌙 Switch to Dark Mode";
}

// Handle theme toggle
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");

  // Play sound
  switchSound.currentTime = 0;
  switchSound.play();

  // Add fade class for animation
  body.classList.add("fade");

  setTimeout(() => {
    // Toggle themes
    body.classList.toggle("dark", !isDark);
    body.classList.toggle("light", isDark);

    // Update button text
    toggleBtn.textContent = isDark
      ? "🌙 Switch to Dark Mode"
      : "☀️ Switch to Light Mode";

    // Save preference
    localStorage.setItem("theme", isDark ? "light" : "dark");

    // Remove fade
    body.classList.remove("fade");
  }, 200);
});
