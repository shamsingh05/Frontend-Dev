    const productList = document.getElementById("productList");
    const addBtn = document.getElementById("addBtn");
    const input = document.getElementById("productInput");

    let currentlyEditing = null;

    addBtn.addEventListener("click", addProduct);

    function addProduct() {
        const text = input.value.trim();
        if (!text) return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span class="text">${text}</span>
            <div>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </div>
        `;

        productList.appendChild(li);
        input.value = "";
    }

    // EVENT DELEGATION
    productList.addEventListener("click", function (e) {
        const li = e.target.closest("li");

        if (!li) return;

        // DELETE
        if (e.target.classList.contains("deleteBtn")) {
            li.remove();
            return;
        }

        // EDIT
        if (e.target.classList.contains("editBtn")) {
            startEditing(li);
        }
    });

    function startEditing(li) {
        if (currentlyEditing) finishEditing(currentlyEditing);

        currentlyEditing = li;

        const span = li.querySelector(".text");
        const oldText = span.textContent;

        li.classList.add("editing");

        span.contentEditable = "true";
        span.focus();

        span.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                finishEditing(li);
            }
        });

        // Save previous value in case user clears everything
        li.dataset.oldText = oldText;
    }

    // AUTO-SAVE on click outside
    document.addEventListener("click", function (e) {
        if (currentlyEditing && !currentlyEditing.contains(e.target)) {
            finishEditing(currentlyEditing);
        }
    });

    function finishEditing(li) {
        const span = li.querySelector(".text");
        let newText = span.textContent.trim();

        if (newText === "") {
            newText = li.dataset.oldText; // restore old text if empty
        }

        span.textContent = newText;
        span.contentEditable = "false";
        li.classList.remove("editing");

        currentlyEditing = null;
    }