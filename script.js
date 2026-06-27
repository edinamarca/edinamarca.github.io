const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

function updateThemeButton() {
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    themeIcon.textContent = "☀️";
    themeText.textContent = "Modo claro";
  } else {
    themeIcon.textContent = "🌙";
    themeText.textContent = "Modo oscuro";
  }
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);

  updateThemeButton();
});