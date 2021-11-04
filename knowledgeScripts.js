function couldYouNot() {
  document.getElementById("none").innerHTML = "Could you NOT decompile my code please? It's cheating and not the intended solution";
}

function verify() {
  if (document.getElementById("first").value === "parsley") {
    document.getElementById("main").innerHTML = "<h1>Well Done!</h1>";
  }
}
