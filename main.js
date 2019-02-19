$(document).ready(function () {
  $(".location").click(function() {
    if (!$(this).hasClass(".active")) {
      $(".location.active").removeClass("active");
      $(this).addClass("active")
    }
  });
});
