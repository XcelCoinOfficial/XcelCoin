// XcelCoin - Custom Script

// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll reveal effect for features
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.feature-card').forEach(card => {
  observer.observe(card);
});

// Countdown timer (optional use for pre-sale)
const countdownElement = document.getElementById("countdown");
if (countdownElement) {
  const targetDate = new Date("2025-04-01T00:00:00").getTime(); // Set your pre-sale end date here

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "Pre-Sale Ended!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
  }, 1000);
}
