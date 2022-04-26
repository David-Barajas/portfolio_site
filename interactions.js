$(document).ready( function() {
  $("#home").click( function() {
    window.open("index.html", "_blank");
  });
  $("#projects").click( function() {
    window.open("projects.html", "_blank");
  });
  $("#login").click( function() {
    window.open("login.html", "_blank");
  });
  $(".my-submit").hover( function() {
    $(this).css("background-color", "white");
    $(this).css("display", "none");
  });
  $("#me").hover( function () {
    $(this).animate({width: "250%"}, 3000);
  });
  $("#me-2").hover( function () {
    $(this).animate({width: "100%"}, 3000);
  });
  $("#davidnet").hover( function () {
    $(this).animate({width: "0.1%"}, 125000);
  });
  $("#searchbar").hover( function () {
    $(this).attr("placeholder", "...or not?");
  });
  $("#searchbar").keyup( function () {
    var k = $(this).val();
    loadData(k);
  });
  function loadData( str ) {
    if (str.length > 5) {
      (function () {window.location.href = "https://youtu.be/aGD_gJtiuak";})();
    }
  }
  function jumpscare() {
    var jumpscare = document.getElementById("jumpscare");
    jumpscare.style.visibility = "visible";
    var audio = document.getElementById("scream");
    audio.play();
  }
  setTimeout(jumpscare, 10000);
});
