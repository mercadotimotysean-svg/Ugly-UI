// script.js
document.addEventListener("DOMContentLoaded", () => {
  const info = document.createElement("div");
  info.style.opacity = "0.9";
  info.style.fontSize = "0.9rem";
  info.style.margin = "16px 0";
  info.textContent =
    "This page is a static demo. Watch the animated gradient on load! ✨";
  document.querySelector(".wrap").appendChild(info);

  // --- Eye-catching visual effect ---
  const body = document.body;
  let hue = 0;

  function animateBackground() {
    hue = (hue + 1) % 360;
    body.style.background = `linear-gradient(180deg, hsl(${hue}, 70%, 20%), hsl(${
      (hue + 60) % 360
    }, 80%, 15%))`;
    requestAnimationFrame(animateBackground);
  }

  animateBackground();
});

