document.getElementById("reg").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  axios.get(`http://localhost:3006/users?email=${email}`)
    .then(res => {
      if (res.data.length > 0) {
        document.getElementById("msg").innerText = "Email already registered.";
      } else {
        axios.post("http://localhost:3006/users", { name, email })
          .then(() => {
            document.getElementById("msg").innerText = "Registered successfully!";
          });
      }
    });
});
