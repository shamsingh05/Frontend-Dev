// 1. Add new post
$("#addPost").click(() => {
  $("#posts").append("<p class='post'>New Blog Post</p>");
});

// 2. Prepend featured post
$("#addFeatured").click(() => {
  $("#posts").prepend("<p class='post featured'>🌟 Featured Post</p>");
});

// 3. Remove last post
$("#removeLast").click(() => {
  $("#posts .post").last().remove();
});

// 4. Add tags before/after all posts
$(".post").before("<span class='tag'>#Tag</span>");

// 5. Highlight posts containing specific keyword
$(".post").each(function () {
  if ($(this).text().toLowerCase().includes("blog")) {
    $(this).css("background", "yellow");
  }
});
