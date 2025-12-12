$("#search").keyup(function () {
  let text = $(this).val().toLowerCase();
  let count = 0;

  $(".course").each(function () {
    let courseTxt = $(this).text().toLowerCase();

    if (courseTxt.includes(text)) {
      $(this).show().css("color", "green");
      count++;
    } else {
      $(this).hide();
    }
  });

  $("#count").text(count);

  // Reset when empty
  if (text === "") {
    $(".course").show().css("color", "black");
  }
});
