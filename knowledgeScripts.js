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
      '<h1>Well Done!</h1><a href="l9pzufphk4.html">Did you know that phones see things that desktops can\'t?</a>';
  }
}

function verify02()
{
  if(document.getElementById('first').value === '12930D#'){
    
    document.getElementById('main').innerHTML = "<a href='#'>Have you figured out what's hidden in Wisdom yet?</a>";
    
  }
  else
  {
    window.location.replace("index.html");
  }
}
