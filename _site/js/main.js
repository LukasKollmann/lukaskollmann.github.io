$(function() {
  $(".menu-opener").click(function() {
    $(".main-nav").toggleClass("opened");
    $('.overlay').toggle();
    $('.main-nav-right').toggle();
  });
});

$(function() {
  $(".menu-closer").click(function() {
    $(".main-nav").removeClass("opened");
    $('.overlay').toggle();
    $('.main-nav-right').toggle();
  });
});

$(function() {
  $(".link-customize").click(function() {
    $(".options").toggleClass("opened");
    $('.overlay2').toggle();
  });
});

$(function() {
  $(".closer").click(function() {
    $(".options").removeClass("opened");
    $('.overlay2').toggle();
  });
});

$(function() {
  $(".projekte-opener").click(function() {
    $(".main-nav-right").toggleClass("opened");
    $('.overlay').toggle();
    $('.main-nav').toggle();
  });
});

$(function() {
  $(".menu-closer2").click(function() {
    $(".main-nav-right").removeClass("opened");
    $('.overlay').toggle();
    $('.main-nav').toggle();
  });
});