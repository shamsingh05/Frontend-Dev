document.getElementById("day").addEventListener("change", loadData);

function loadData() {
  let d = document.getElementById("day").value;

  fetch(`http://localhost:3005/timetable?day=${d}`)
    .then(res => res.json())
    .then(data => {
      let out = document.getElementById("output");
      out.innerHTML = "";

      if (data.length === 0) {
        out.innerHTML = "<p>No classes today.</p>";
        return;
      }

      data.forEach(t => {
        out.innerHTML += `<p>${t.subject} — ${t.faculty} (${t.time})</p>`;
      });
    });
}

loadData();
