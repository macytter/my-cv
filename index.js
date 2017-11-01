/*
var mn = $(".nav-bar");

$(window).scroll(function () {
  if( $(this).scrollTop() > 400) {
    mn.addClass("nav-bar-scrolled");
  } else {
    mn.removeClass("nav-bar-scrolled");
  }
});
*/

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    console.log("Going down!");
  } else {
    console.log("WEEEEE!");
  }
}
