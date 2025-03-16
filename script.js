// Simple button animation
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  if (button) {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });

    button.addEventListener("click", () => {
      alert("XcelCoin purchase coming soon!");
    });
  }
});
