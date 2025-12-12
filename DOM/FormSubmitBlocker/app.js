const form = document.getElementById("myForm");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passField = document.getElementById("password");

const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errPass = document.getElementById("errPass");

const successMsg = document.getElementById("successMsg");

function validate() {
    let valid = true;
    successMsg.textContent = "";

    // Name check
    if (nameField.value.trim() === "") {
        errName.textContent = "Name is required";
        valid = false;
    } else {
        errName.textContent = "";
    }

    // Email check
    if (!emailField.value.includes("@")) {
        errEmail.textContent = "Invalid email";
        valid = false;
    } else {
        errEmail.textContent = "";
    }

    // Password check
    if (passField.value.length < 6) {
        errPass.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        errPass.textContent = "";
    }

    return valid;
}

form.addEventListener("submit", (e) => {
    if (!validate()) {
        e.preventDefault(); // BLOCK submission
    } else {
        e.preventDefault(); 
        successMsg.textContent = "Form Submitted Successfully!";
    }
});

// Remove error when user fixes input
[nameField, emailField, passField].forEach(input => {
    input.addEventListener("input", validate);
});
