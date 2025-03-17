// Welcome popup for fun effect
window.addEventListener('load', () => {
  setTimeout(() => {
    alert("🚀 Welcome to the XcelCoin Pre-Sale!\nSecure your spot in the future of crypto!");
  }, 1000);
});

// Simple button click action (can be replaced with actual purchase flow later)
document.addEventListener('DOMContentLoaded', () => {
  const buyButton = document.querySelector('.btn-primary');
  if (buyButton) {
    buyButton.addEventListener('click', () => {
      alert("💸 Purchase process will be activated soon!\nStay tuned for updates.");
    });
  }
});
