document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");

    const isDark = (localStorage.getItem("theme") || "dark") === "dark";

    document.body.classList.toggle("dark", isDark);
    toggleBtn.checked = isDark;

    toggleBtn.addEventListener("change", () => {
        document.body.classList.toggle("dark", toggleBtn.checked);
        localStorage.setItem(
            "theme",
            toggleBtn.checked ? "dark" : "light"
        );
    });
});