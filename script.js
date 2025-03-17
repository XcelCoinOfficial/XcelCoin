// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Countdown Timer (Optional Section)
const countdownDate = new Date("2025-04-01T00:00:00").getTime();

const timerFunction = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timerElement = document.getElementById("countdown");
  if (timerElement) {
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  if (distance < 0) {
    clearInterval(timerFunction);
    if (timerElement) {
      timerElement.innerHTML = "Presale Ended!";
    }
  }
}, 1000);

// Buy Now Button Action (Mock Example)
const buyBtn = document.getElementById("buyNowBtn");
if (buyBtn) {
  buyBtn.addEventListener("click", () => {
    alert("Redirecting to the Presale Page...");
    window.location.href = "#buy-section"; // You can change this to a real presale page
  });
}
