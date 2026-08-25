// STEP 6: same idea as SpeakHello.js - everything is wrapped in an IIFE, so
// this file's 'speakWord' does not collide with the one in SpeakHello.js.
(function (window) {

"use strict";

// STEP 7: the object that will be exposed globally
var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: 'speak' is now a method of byeSpeaker
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

// STEP 9: expose the object to the global scope under the same name
window.byeSpeaker = byeSpeaker;

})(window);
