$("#hide").click(() => $(".banner").hide());
$("#show").click(() => $(".banner").show());
$("#slide").click(() => $(".banner").slideToggle());
$("#fade").click(() => $(".banner").fadeToggle());

setInterval(() => {
  $(".banner").fadeOut(800).fadeIn(800);
}, 5000);
