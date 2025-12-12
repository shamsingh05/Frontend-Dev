function loadTasks(filter = "") {
  let url = "http://localhost:3003/tasks";

  if (filter === "Completed") {
    url += "?completed=true";
  } else if (filter !== "") {
    url += `?priority=${filter}`;
  }

  $.get(url, function (data) {
    $("#tasks").empty();

    data.forEach(t => {
      $("#tasks").append(`
        <div>
          <input type="checkbox" ${t.completed ? "checked" : ""} 
           onclick="toggle(${t.id}, ${t.completed})">
          ${t.title} — <b>${t.priority}</b>
        </div>
      `);
    });
  });
}

loadTasks();

$("#filter").change(function () {
  loadTasks($(this).val());
});

function toggle(id, completed) {
  $.ajax({
    url: `http://localhost:3003/tasks/${id}`,
    method: "PATCH",
    data: { completed: !completed },
    success: () => loadTasks($("#filter").val())
  });
}
