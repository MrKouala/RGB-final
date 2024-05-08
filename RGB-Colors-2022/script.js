// RGB Colors

document.getElementById("width").value = "400";
document.getElementById("height").value = "200";
document.getElementById("r").value = "255";
document.getElementById("g").value = "255";
document.getElementById("b").value = "0";

// Var
var r;
var g;
var b;
var width;
var height;

// Functions
function black() {
  document.getElementById("display").style.background = "rgb(0, 0, 0)";
  document.getElementById("rgb").innerHTML = "rgb(0,0,0)";

  document.getElementById("r").value = 0;
  document.getElementById("g").value = 0;
  document.getElementById("b").value = 0;
}

function white() {
  document.getElementById("display").style.background = "rgb(255, 255, 255)";
  document.getElementById("rgb").innerHTML = "rgb(255,255,255)";

  document.getElementById("r").value = 255;
  document.getElementById("g").value = 255;
  document.getElementById("b").value = 255;
}

function changeSize() {
  width = document.getElementById("width").value;
  height = document.getElementById("height").value;

  if (width < 50) {
    width = 50;
    document.getElementById("width").value = 50;
  } else if (width > 400) {
    width = 400;
    document.getElementById("width").value = 400;
  }

  if (height < 50) {
    height = 50;
    document.getElementById("height").value = 50;
  } else if (height > 400) {
    height = 400;
    document.getElementById("height").value = 400;
  }

  document.getElementById("display").style.width = width + "px";
  document.getElementById("display").style.height = height + "px";
}

function rgbfind() {
  r = document.getElementById("r").value;
  g = document.getElementById("g").value;
  b = document.getElementById("b").value;

  // Validate Colours
  if (r < 0) {
    r = 0;
    document.getElementById("r").value = 0;
  } else if (r > 255) {
    r = 255;
    document.getElementById("r").value = 255;
  }

  if (g < 0) {
    g = 0;
    document.getElementById("g").value = 0;
  } else if (g > 255) {
    g = 255;
    document.getElementById("r").value = 255;
  }

  if (b < 0) {
    b = 0;
    document.getElementById("b").value = 0;
  } else if (b > 255) {
    b = 255;
    document.getElementById("b").value = 255;
  }

  document.getElementById("display").style.background = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("rgb").innerHTML = `rgb(${r},${g},${b})`;
}

// Event listeners
document.getElementById("previewBtn").addEventListener("click", rgbfind);
document.getElementById("black").addEventListener("click", black);
document.getElementById("white").addEventListener("click", white);

document.getElementById("r").addEventListener("input", rgbfind);
document.getElementById("g").addEventListener("input", rgbfind);
document.getElementById("b").addEventListener("input", rgbfind);

document.getElementById("width").addEventListener("change", changeSize);
document.getElementById("height").addEventListener("change", changeSize);
