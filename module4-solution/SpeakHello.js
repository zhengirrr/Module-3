// STEP 2: the entire contents of the file are wrapped in an IIFE, so
// 'speakWord' and 'speak' stay private and never touch the global scope.
(function (window) {

"use strict";

// STEP 3: the object that will be exposed globally
var helloSpeaker = {};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: 'speak' is now a method of helloSpeaker instead of a standalone
// function. It still sees speakWord through the closure.
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

// STEP 5: expose the object to the global scope under the same name
window.helloSpeaker = helloSpeaker;

})(window);
