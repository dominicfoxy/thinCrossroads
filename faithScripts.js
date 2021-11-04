// Script to write out a phone number, but only on a mobile device
function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === "none";
}

$(document).ready(function () {
  // function to determine if el is marked as hidden

  var hidden_box = document.getElementById("hidden-surprise");
  var state = isHidden(hidden_box);
  if (!state) {
    document.getElementById("hidden-surprise").innerHTML =
      '<a href="tel:+15878852774">587-885-2774</a>';
  }
});
