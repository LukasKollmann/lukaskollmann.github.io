// var lastScrollTop = 100;
// $(document).ready(function() {
//     $("#container").scroll(function(event) {
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop) {
//             $(".link-customize, .main-nav-right, .main-nav").stop(true, true).fadeOut("slow");
//         } else {

//           $(".link-customize, .main-nav-right, .main-nav").stop(true, true).fadeIn("slow");
//         }
//          lastScrollTop = st;
//     });
// });

var title = document.getElementsByTagName("title")[0].innerHTML;

$(window).blur(function(){
  document.title = "COME ♥︎ BACK";
});
$(window).focus(function(){
  document.title = title;
});

// $(window).on('blur', function() { document.title = "COME ♥︎ BACK"; });

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



