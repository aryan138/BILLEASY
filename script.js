document.querySelector('.hover-div').addEventListener('mouseover', function () {
  document.getElementById('image').src = 'scale-effectively.webp';
});

document.querySelector('.hover-div-tracking').addEventListener('mouseover', function () {
  document.getElementById('image').src = 'track-effectively.webp';
});

document.querySelector('.hover-div-collaborate').addEventListener('mouseover', function () {
  document.getElementById('image').src = 'collaborate-effectively.webp';
});

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./Assests/sun.png";
    logo.src = "logo-dark.png";
  } else {
    icon.src = "./Assests/moon.png";
    logo.src = "logo.png";
  }
}