$(document).ready(function () {
  function getGreeting() {
    let h = new Date().getHours();
    if (h < 12) return "Good Morning!";
    if (h < 18) return "Good Afternoon!";
    return "Good Evening!";
  }

  $("#greet").text(getGreeting());

  $("#changeGreet").click(() =>
    $("#greet").text("Stay focused. Keep improving!")
  );

  $("#toggleWelcome").click(() =>
    $("#welcomeMsg").toggle()
  );

  $("#greet").click(() => alert("Greeting clicked!"));
});
