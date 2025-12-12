const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

// Toggle dropdown
btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Option click
document.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", () => {
        btn.textContent = opt.textContent;
        menu.style.display = "none";
    });
});

// Close dropdown when clicking outside (CAPTURING)
document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        menu.style.display = "none";
    }
}, true); // <-- capturing phase
