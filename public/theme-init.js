// this script is used to stop theme flickering on page load
const key = "__MG_theme__";
const themes = new Map([
  ["light", "light"],
  ["system", "light dark"],
  ["dark", "dark"],
]);
const colorScheme = themes.get(JSON.parse(localStorage.getItem(key)));
document.documentElement.style.colorScheme = colorScheme || "light dark";
