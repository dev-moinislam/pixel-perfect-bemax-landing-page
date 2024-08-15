// Toggle button functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});



// Video click functionality
function playVideo() {
  var video = document.getElementById("whyVideo");
  var playIcon = document.getElementById("playIcon");
  if (video.style.display === "none") {
      video.style.display = "block";
      playIcon.style.display = "none";
      video.play();
  } else {
      video.style.display = "none";
      playIcon.style.display = "block";
      video.pause();
  }
}
