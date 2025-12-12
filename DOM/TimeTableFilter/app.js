const search = document.getElementById("search");
const tableBody = document.getElementById("tableBody");
const noResults = document.getElementById("noResults");

search.addEventListener("input", function () {
    const query = search.value.toLowerCase();
    let visibleCount = 0;

    [...tableBody.rows].forEach(row => {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(query)) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
});
