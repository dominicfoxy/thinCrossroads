// ### knowledgeScripts.js
// ### 
// ### This file is used for the thin Crossroads project. It is the primary verifier for the puzzles
// ### in the 'knowledge' path. Contains functions and variables referenced in said path
// ### If you're reading this, either you are viewing the GIT repo afterwards, or you are cheating
// ### Close this file without reading further, you'll just spoil the answers to the puzzles



// a dummy function, not designed to ever be run.
// A message for those attempting to read this JS file if they attempt to decompile the script
function couldYouNot() {
  document.getElementById('none').innerHTML =
    "Could you NOT decompile my code please? It's cheating and not the intended solution";
}
// verifier script for knowledge 1
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

// verifier script for knowledge 2
function verify02()
{
  if(document.getElementById('first').value === '12930D#'){
    
    document.getElementById('main').innerHTML = "<a href='greenpepper.html'>Have you figured out what's hidden in Wisdom yet?</a>";
    
  }
  else
  {
    window.location.replace("index.html");
  }
}

// 'secret' printing class. Used to extract the answer from knowledge #3
function printer(texts, id){
  document.getElementById(id).innerHTML = texts;
}
// answer for knowledge #3
var check03 = "WEREWOLF T&A";
var link03 = "index.html";