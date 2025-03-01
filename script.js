document.addEventListener("DOMContentLoaded", function() {
    // Ön Satış Geri Sayım
    function startCountdown() {
        const countdownElement = document.getElementById("countdown");
        const targetDate = new Date("2025-03-10T00:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                countdownElement.innerHTML = "Ön Satış Başladı!";
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}g ${hours}s ${minutes}d ${seconds}s`;
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    startCountdown();

    // Cüzdan Bağlama Fonksiyonu (Solana Phantom)
    async function connectWallet() {
        if (window.solana && window.solana.isPhantom) {
            try {
                const response = await window.solana.connect();
                alert("Cüzdan Bağlandı: " + response.publicKey.toString());
            } catch (err) {
                console.error("Cüzdan Bağlanamadı", err);
            }
        } else {
            alert("Lütfen Phantom cüzdanınızı yükleyin.");
        }
    }

    window.connectWallet = connectWallet;
});
