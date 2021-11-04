function couldYouNot() {
  document.getElementById('none').innerHTML =
    "Could you NOT decompile my code please? It's cheating and not the intended solution";
}
// Checks to see if you've figured out where the road leads
function verify01() {
  if (
    document.getElementById('first').value === 'parsley' &&
    document.getElementById('second').value === 'sage' &&
    document.getElementById('third').value === 'rosemary' &&
    document.getElementById('fourth').value === 'thyme'
  ) {
    document.getElementById('main').innerHTML =
      '<h1>Well Done!</h1><a href="#">Did you know that phones see things that desktops can\'t?</a>';
  }
}
