let url = "http://localhost:3002/employees";

function loadEmployees() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = function () {
    let employees = JSON.parse(xhr.responseText);
    document.getElementById("list").innerHTML = "";

    employees.forEach(emp => {
      let div = document.createElement("div");

      div.innerHTML = `
        ${emp.name} — <b>${emp.status}</b>
        <button onclick="toggle(${emp.id}, '${emp.status}')">Toggle</button>
      `;

      document.getElementById("list").appendChild(div);
    });
  };

  xhr.send();
}

loadEmployees();

function toggle(id, status) {
  let newStatus = status === "active" ? "inactive" : "active";

  let xhr = new XMLHttpRequest();
  xhr.open("PATCH", `${url}/${id}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      loadEmployees();
    } else {
      alert("Error updating status!");
    }
  };

  xhr.send(JSON.stringify({ status: newStatus }));
}
