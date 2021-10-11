let showSuccess = () => {
  function stop(e) {
    e.stopPropagation();
  }
  $("#success-text").css('color', 'rgb(85, 209, 46)');
  $("#success-text").addClass('show');
  setTimeout(function () {
  $("#success-text").removeClass('show');
}, 2000);
}

var button = document.getElementById('form-btn');
button.addEventListener("click", showSuccess);

//--------------------------

$("#bookImg").hover(function() {
  $("#bookImg").css('opacity', '100%');
}, function() {
  $("#bookImg").css('opacity', '90%');
});

var table = document.getElementById('table');

//--------------------------

$("#topLogo, #bottomLogo").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$("#navlink1").click(function() {
  $("html, body").animate({ scrollTop: $("#begining").offset().top }, 1000);
});

$("#navlink2").click(function() {
  $("html, body").animate({ scrollTop: $("#author").offset().top }, 1000);
});

$("#navlink3").click(function() {
  $("html, body").animate({ scrollTop: $("#links").offset().top }, 1000);
});

$("#navlink4").click(function() {
  $("html, body").animate({ scrollTop: $("#about-books").offset().top }, 1000);
});

$("#bookImg").click(function() {
  $("html, body").animate({ scrollTop: $("#books").offset().top }, 1000);
});

$("table tr:nth-child(2) td:nth-child(2)").click(function() {
  $("html, body").animate({ scrollTop: $("#TheSon").offset().top }, 1000);
});

$("table tr:nth-child(3) td:nth-child(2)").click(function() {
  $("html, body").animate({ scrollTop: $("#TheGod").offset().top }, 1000);
});

$("table tr:nth-child(4) td:nth-child(2)").click(function() {
  $("html, body").animate({ scrollTop: $("#ChildrenOf").offset().top }, 1000);
});

$(".scrollBook").click(function() {
  $("html, body").animate({ scrollTop: $("#books").offset().top }, 1000);
});

$("#aboutMe").click(function() {
  alert("\nThis webpage was Made by Al'khan Muktarkhan \n->\nFrom group SE-2014 \n->\nFor WEB Technologies course as final project.")
});

jQuery(document).ready(function($) {
  if ($(window).width() <= 425) {
    $("#bookImg").hide();
  }
});
