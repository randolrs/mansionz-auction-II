
var countDownDate = new Date("Nov 15, 2017 15:37:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var targetElement = document.getElementById("time-remaining")

  targetElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

}, 1000);

$(document).ready(function() {
    // all custom jQuery will go here
    $(".click-to-reveal").click(function (e) {
      var target = (e.target) ? $(e.target) : $(e.srcElement);
      $(".click-to-reveal").removeClass("active")
      target.addClass("active");
      var revealPanelId = "#" + target.data("reveal-panel-id");
      $(".reveal-panel").hide();
      $(revealPanelId).show();
    });
});
