$(".answer").hide();

$(".question").click(function () {
  $(this).next(".answer").toggle();
});

$(".question").hover(
  function () { $(this).css("color", "blue"); },
  function () { $(this).css("color", "black"); }
);

$(".question").dblclick(() => {
  $(".answer").hide();
});

$(".answer").attr("contenteditable", "true");

$(".answer").focus(function () {
  $(this).parent().css("background", "#ffd");
});

$(".answer").blur(function () {
  $(this).parent().css("background", "white");
});
