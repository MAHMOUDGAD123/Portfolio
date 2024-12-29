(async () => {
  const key = "__MG_theme__";
  const themesMap = new Map([
    ["light", "light"],
    ["system", "light dark"],
    ["dark", "dark"],
  ]);
  const colorScheme = themesMap.get(
    document.cookie
      .split(";")
      .find((c) => c.includes(key))
      ?.split("=")[1],
  );
  document.documentElement.style.colorScheme = colorScheme || "light dark";
})();
