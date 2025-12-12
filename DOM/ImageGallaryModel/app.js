const images = document.querySelectorAll(".gallery img");
const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");


images.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;          // load clicked image
        modalOverlay.style.display = "flex";
    });
});

modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});


modal.addEventListener("click", (event) => {
    event.stopPropagation(); // IMPORTANT
});