let emails = ["abc@gmail.com"];

$("#register").click(function () {
  let name = $("#name").val();
  let email = $("#email").val();
  let pass = $("#pass").val();
  let valid = true;

  // Reset borders
  $("input").css("border", "1px solid #ccc");

  // 1. Name validation
  if (!name) {
    $("#name").css("border", "2px solid red");
    valid = false;
  }

  // 2. Email validation
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email) || emails.includes(email)) {
    $("#email").css("border", "2px solid red");
    valid = false;
  }

  // 3. Password validation
  if (pass.length < 8) {
    $("#pass").css("border", "2px solid red");
    valid = false;
  }

  // 4. Success
  if (valid) {
    $("#msg").text("Registration Successful!").css("color", "green");
    emails.push(email);
  } else {
    $("#msg").text("Invalid fields!").css("color", "red");
  }
});
