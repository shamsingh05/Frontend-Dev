$(".manager").click(function () {
  $(this).next().children().css("background", "yellow");
});

$(".emp").hover(
  function () { $(this).next().text("Contact: 99999"); },
  function () { $(this).next().text(""); }
);

$(".dept").click(function () {
  $(this).children().css("background", "#eef");
});

let idx = Math.floor(Math.random() * $(".emp").length);
$(".emp").eq(idx).siblings().css("background", "pink");

$(".dept").dblclick(function () {
  $(this).find("ul").slideToggle();
});
