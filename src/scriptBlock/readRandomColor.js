color = localStorage.getItem("cloze_color_2a19a5b01acc5c9b") || "yellow";
console.log( localStorage.getItem("foo") );

document.querySelectorAll('cloze2_w').forEach(element => {
  element.style.backgroundColor = rand_color;
});
