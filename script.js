// Geri Sayım Zamanlayıcısı
function startCountdown() {
    const endDate = new Date("2025-03-10T00:00:00").getTime();
    
    const interval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Ön Satış Başladı!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}g ${hours}s ${minutes}d ${seconds}s`;
    }, 1000);
}

// Cüzdan Bağlama
async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            alert(`Cüzdan Bağlandı: ${response.publicKey.toString()}`);
        } catch (err) {
            console.error(err);
        }
    } else {
        alert("Lütfen Phantom cüzdanınızı yükleyin!");
    }
}

// Sayfa yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", function () {
    startCountdown();
    document.getElementById("connect-wallet").addEventListener("click", connectWallet);
});
