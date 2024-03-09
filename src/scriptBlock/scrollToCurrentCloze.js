var onShownHook

(function () {
  function scrollToCloze () {
    const element = document.getElementsByClassName('cloze')[0]
    const elementRect = element.getBoundingClientRect()
    const absoluteElementTop = elementRect.top + window.pageYOffset
    const middle = absoluteElementTop - (window.innerHeight / 2)
    window.scrollTo(0, middle)
  }
  if (typeof onShownHook !== 'undefined') {
    // for Anki 2.1.x
    onShownHook.push(scrollToCloze)
  } else {
    // for AnkiDroid
    setTimeout(scrollToCloze, 10)
  }
})()

// Check if "foo" is in localStorage
if(localStorage.getItem("foo")) {
    // If "foo" exists, increment its value by 1
    localStorage.setItem("foo", parseInt(localStorage.getItem("foo")) + 1);
} else {
    // If "foo" doesn't exist, set its value to 0
    localStorage.setItem("foo", 0);
}
console.log( localStorage.getItem("foo") );


// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Apply class based on whether the random number is even or odd
if (randomNumber % 2 === 0) {
  //console.log(document.getElementById('.CLOZE2_W'))

} else {
 // console.log(document.getElementById('.CLOZE2_W'))
}

var allElements = document.querySelectorAll('*');

//console.log(document.querySelectorAll('cloze'));

//console.log(document.querySelectorAll('cloze_w'));

// Loop through each element and log its tag name
document.querySelectorAll('cloze_w').forEach(function(element) {
//    console.log(element.tagName);
});




// Get all elements in the document
var allElements = document.querySelectorAll('*');

// Convert the NodeList to an array for easier manipulation
var elementsArray = Array.from(allElements);

// Log each element to the console
//elementsArray.forEach(function(element) {
//  element.style.color = "green";
//    console.log(element);
//});
//document.body.style.backgroundColor = "red";
//var all = document.querySelectorAll('cloze2_w');
//
//for (var i=0, max=all.length; i < max; i++) {
// all[i].style.backgroundColor = "yellow";
//}

document.querySelectorAll('cloze2_w').forEach(element => {
  element.style.backgroundColor = "yellow";
});
