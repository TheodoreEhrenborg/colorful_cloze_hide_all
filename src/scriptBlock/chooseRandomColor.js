var colors = [
  "#ffd1dc", // pastel pink
  "#e0befe", // lilac
  "#aec1ff", // powder blue
  "#c1e7e3", // cyan
  "#d291bc", // rose
  "#b6cfb6", // pine
  "#ffc8a2", // orange
]

// possibly null
var prev_color = localStorage.getItem("cat");

var rand_color = colors[Math.floor(Math.random()*colors.length)];

while (prev_color == rand_color) {
    rand_color = colors[Math.floor(Math.random()*colors.length)];
}

document.querySelectorAll('cloze2_w').forEach(element => {
  element.style.backgroundColor = rand_color;
});

localStorage.setItem("cat", rand_color);

prev_color = localStorage.getItem("cat");
