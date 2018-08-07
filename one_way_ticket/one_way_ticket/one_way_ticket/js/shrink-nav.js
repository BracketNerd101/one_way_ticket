$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("header").addClass("sticky-shrinknav-wrapper");
    } else{
      $("header").removeClass("sticky-shrinknav-wrapper");
    }
  });
});