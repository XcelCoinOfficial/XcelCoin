// Countdown Timer
const countdown = document.getElementById("countdown");

// Hedef tarih (örnek: 30 Mart 2025 23:59:59)
const targetDate = new Date("2025-03-30T23:59:59").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "⏰ Presale Sona Erdi!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}g ${hours}s ${minutes}d ${seconds}s`;
};

setInterval(updateCountdown, 1000);
updateCountdown();
