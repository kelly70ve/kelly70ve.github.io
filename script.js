$(document).ready(function () {
  $(".card-img-top")
    .mouseover(function () {
      var src =
        $(this)
          .attr("src")
          .match(/[^\.]+/) + ".gif";
      $(this).attr("src", src);
    })
    .mouseout(function () {
      var src = $(this).attr("src").replace(".gif", ".png");
      $(this).attr("src", src);
    });
});
