
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const summary = document.getElementById("summary");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");


const err1 = document.getElementById("err1");
const err2 = document.getElementById("err2");
const err3 = document.getElementById("err3");



document.getElementById("next1").addEventListener("click", () => {
    if (nameInput.value.trim() === "") {
        err1.textContent = "Name cannot be empty.";
    } else {
        err1.textContent = "";
        step1.classList.remove("active");
        step2.classList.add("active");
    }
});


document.getElementById("back2").addEventListener("click", () => {
    err2.textContent = "";
    step2.classList.remove("active");
    step1.classList.add("active");
});


document.getElementById("next2").addEventListener("click", () => {
    const email = emailInput.value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        err2.textContent = "Enter a valid email.";
    } else {
        err2.textContent = "";
        step2.classList.remove("active");
        step3.classList.add("active");
    }
});


document.getElementById("back3").addEventListener("click", () => {
    err3.textContent = "";
    step3.classList.remove("active");
    step2.classList.add("active");
});


document.getElementById("finish").addEventListener("click", () => {
    const pass = passInput.value.trim();

    if (pass.length < 6) {
        err3.textContent = "Password must be at least 6 characters.";
        return;
    }

    err3.textContent = "";


    step3.classList.remove("active");
    summary.classList.add("active");

    document.getElementById("sumName").textContent = nameInput.value;
    document.getElementById("sumEmail").textContent = emailInput.value;
    document.getElementById("sumPass").textContent = passInput.value;
});
