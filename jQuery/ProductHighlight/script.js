$(".product").click(function () {
  $(this).toggleClass("highlight");

  if ($(this).data("stock") === "out") {
    alert("Product is out of stock!");
  }
});

$(".product").hover(
  function () { $(this).append("<p>More details...</p>"); },
  function () { $(this).find("p").remove(); }
);

$(".fav").click(function () {
  $(this).toggleClass("selected");
});
