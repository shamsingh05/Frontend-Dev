let notifications = false;

// 1. Subscribe
$("#subscribe").click(function () {
  notifications = true;
  $("#msg").text("Notifications Enabled").css("color", "green");
});

// 2. Unsubscribe
$("#unsubscribe").click(function () {
  notifications = false;
  $("#msg").text("Notifications Disabled").css("color", "red");
});

// 3. Dynamically add new topics (with .on event)
$("#addTopic").click(function () {
  $("#topics").append("<p class='topic'>New Topic</p>");
});

// Attach event for dynamically added topics
$("#topics").on("click", ".topic", function () {
  alert("Topic clicked!");
});

// 4. Remove click event from all topics
function removeTopicEvents() {
  $("#topics").off("click", ".topic");
}

// 5. Show success message dynamically
function showMessage(text) {
  $("#msg").text(text);
}
