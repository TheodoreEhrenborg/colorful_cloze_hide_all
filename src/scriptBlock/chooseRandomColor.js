// Check if "foo" is in localStorage
if (localStorage.getItem("foo")) {
    // If "foo" exists, increment its value by 1
    localStorage.setItem("foo", parseInt(localStorage.getItem("foo")) + 1);
} else {
    // If "foo" doesn't exist, set its value to 0
    localStorage.setItem("foo", 0);
}
console.log( localStorage.getItem("foo") );



var colors = [
  "#ffd1dc", // pastel pink
  "#e0befe", // lilac
  "#aec1ff", // powder blue
  "#c1e7e3", // cyan
  "#d291bc", // rose
  "#b6cfb6", // pine
  "#ffc8a2", // orange
]

var rand_color = colors[Math.floor(Math.random()*colors.length)];

// Get all elements in the document
var allElements = document.querySelectorAll('*');

// Convert the NodeList to an array for easier manipulation
var elementsArray = Array.from(allElements);

document.querySelectorAll('cloze2_w').forEach(element => {
  element.style.backgroundColor = rand_color;
});

