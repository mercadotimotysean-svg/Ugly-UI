document.addEventListener("DOMContentLoaded", () => {
  const info = document.createElement("div");
  info.style.opacity = "0.9";
  info.style.fontSize = "0.9rem";
  info.style.margin = "16px 0";
  info.textContent =
    "This page is a static demo. The JS has an intentional linting issue (missing semicolon).";
  document.querySelector(".wrap").appendChild(info);
});
