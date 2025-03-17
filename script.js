// Buy Now button action
document.addEventListener("DOMContentLoaded", function () {
  const buyBtn = document.querySelector(".buy-button");

  if (buyBtn) {
    buyBtn.addEventListener("click", function () {
      window.location.href = "https://your-presale-link.com"; // 🔁 BURAYI kendi satış adresinle değiştir
    });
  }
});

// Basit giriş animasyonu (isteğe bağlı)
window.onload = () => {
  const features = document.querySelectorAll(".feature-box");
  features.forEach((box, index) => {
    box.style.opacity = 0;
    box.style.transform = "translateY(20px)";
    setTimeout(() => {
      box.style.transition = "all 0.6s ease";
      box.style.opacity = 1;
      box.style.transform = "translateY(0)";
    }, 300 * index);
  });
};
