const buttons = document.querySelectorAll("[data-theme-btn]");
const body = document.body;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-theme-btn");

        // Apply theme by setting class attribute
        body.setAttribute("class", theme);

        // Save theme in data-theme attribute
        body.setAttribute("data-theme", theme);
    });
});
