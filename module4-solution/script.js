// STEP 1: the whole file is wrapped in an IIFE, so this 'names' array is
// local and does not overwrite the empty global 'names' from index.html.
(function () {

"use strict";

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10: loop over the names array
for (var i = 0; i < names.length; i++) {

  // STEP 11: first letter of the current name, lower cased
  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12: 'j' names get a goodbye, everyone else gets a hello
  if (firstLetter === "j") {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
