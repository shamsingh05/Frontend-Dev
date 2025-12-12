document.getElementById("loading").innerText = "Loading...";

let u = fetch("http://localhost:3004/users");
let o = fetch("http://localhost:3004/orders");
let p = fetch("http://localhost:3004/products");

Promise.all([u, o, p])
  .then(res => Promise.all(res.map(r => r.json())))
  .then(data => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("users").innerText = "Users: " + data[0].length;
    document.getElementById("orders").innerText = "Orders: " + data[1].length;
    document.getElementById("products").innerText = "Products: " + data[2].length;
  })
  .catch(() => {
    document.getElementById("warning").innerText = "Some data could not be loaded.";
  });
