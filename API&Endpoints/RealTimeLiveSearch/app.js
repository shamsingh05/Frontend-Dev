$("#search").keyup(function () {
  let value = $(this).val();
  $("#loading").show();

  $.ajax({
    url: `http://localhost:3001/products?q=${value}`,
    method: "GET",

    success: function (data) {
      $("#loading").hide();
      $("#results").empty();

      if (data.length === 0) {
        $("#results").html("<p>No products found</p>");
        return;
      }

      data.forEach(p => {
        $("#results").append(`
          <div>
            <img src="${p.image}" width="80">
            <p>${p.name} - ₹${p.price}</p>
          </div>
        `);
      });
    }
  });
});
