var colors = [
  "#ffd1dc", // pastel pink
  "#e0befe", // lilac
  "#aec1ff", // powder blue
  "#c1e7e3", // cyan
  "#d291bc", // rose
  "#b6cfb6", // pine
  "#ffc8a2", // orange
]

// prev_color is possibly null
// Using random key just in case another program is using prev_color
var prev_color = localStorage.getItem("prev_color_4c541224cb0cc195");

var rand_color = colors[Math.floor(Math.random()*colors.length)];

while (prev_color == rand_color) {
    rand_color = colors[Math.floor(Math.random()*colors.length)];
}

document.querySelectorAll('cloze2_w').forEach(element => {
  element.style.backgroundColor = rand_color;
});

localStorage.setItem("prev_color_4c541224cb0cc195", rand_color);

prev_color = localStorage.getItem("prev_color_4c541224cb0cc195");
