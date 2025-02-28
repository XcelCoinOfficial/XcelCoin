document.addEventListener("DOMContentLoaded", function() {
    if (typeof window.solana !== "undefined") {
        console.log("Solana wallet found!");
    } else {
        alert("Please install a Solana-compatible wallet like Phantom.");
    }

    document.getElementById("connectWallet").addEventListener("click", async function() {
        if (window.solana) {
            try {
                const response = await window.solana.connect();
                console.log("Connected with public key:", response.publicKey.toString());
                alert("Wallet Connected: " + response.publicKey.toString());
            } catch (err) {
                console.error("Wallet connection failed", err);
            }
        }
    });

    document.getElementById("buyToken").addEventListener("click", async function() {
        const amount = document.getElementById("amount").value;
        if (!amount || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        const recipient = "CbUpHNo4T59NSX6FcmkDySLX6r5nmc7bWxPFJNqqaQiE"; // Senin Phantom adresin
        const solAmount = amount * 0.01; // 1 XcelCoin = 0.01 SOL

        if (window.solana && window.solana.isConnected) {
            try {
                const transaction = new window.solanaWeb3.Transaction().add(
                    window.solanaWeb3.SystemProgram.transfer({
                        fromPubkey: window.solana.publicKey,
                        toPubkey: new window.solanaWeb3.PublicKey(recipient),
                        lamports: solAmount * 1000000000, // SOL to lamports
                    })
                );

                const { signature } = await window.solana.signAndSendTransaction(transaction);
                alert(`Transaction sent! Signature: ${signature}`);
                console.log("Transaction successful: ", signature);
            } catch (err) {
                console.error("Transaction failed", err);
                alert("Transaction failed: " + err.message);
            }
        } else {
            alert("Please connect your wallet first.");
        }
    });
});
