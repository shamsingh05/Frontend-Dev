// Version 1 → Carousel Rotation
jq1(".slide").click(function () {
  console.log("Slider rotating...");
});

// Version 2 → Modal Popup
jq2("#notify").click(function () {
  alert("Notification Popup!");
});

// Version 1 → Highlight Active Widget
jq1(".widget").click(function () {
  jq1(this).css("border", "2px solid blue");
});

// Version 2 → Tooltip
jq2(".item").hover(function () {
  jq2(this).attr("title", "Tooltip from jQuery v2");
});
