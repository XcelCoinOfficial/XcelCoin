const { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } = solanaWeb3;

const recipient = "CbUpHNo4T59NSX6FcmkDySLX6r5nmc7bWxPFJNqqaQiE"; // Phantom adresi
const solAmount = amount * 0.01; // 1 XcelCoin = 0.01 SOL

if (window.solana && window.solana.isConnected) {
    try {
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: window.solana.publicKey,
                toPubkey: new PublicKey(recipient),
                lamports: solAmount * 1000000000, // SOL -> Lamports
            })
        );

        const { signature } = await window.solana.signAndSendTransaction(transaction);
        alert(`Transaction sent! Signature: ${signature}`);
        console.log("Transaction successful:", signature);
    } catch (err) {
        console.error("Transaction failed", err);
        alert("Transaction failed: " + err.message);
    }
} else {
    alert("Please connect your wallet first.");
}
// Presale Geri Sayım
const countdownElement = document.getElementById("countdown");
const presaleEndDate = new Date("March 10, 2025 00:00:00").getTime(); // Bitiş tarihi

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = presaleEndDate - now;

    if (timeLeft < 0) {
        countdownElement.innerHTML = "Pre-Sale Ended";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
