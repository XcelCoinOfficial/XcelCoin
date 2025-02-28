document.addEventListener("DOMContentLoaded", function () {
    console.log("XcelCoin website loaded!");

    const infoSection = document.getElementById("info");
    if (infoSection) {
        infoSection.innerHTML += "<p>Stay tuned for more updates!</p>";
    }
});
document.addEventListener("DOMContentLoaded", async function () {
    if (window.solana && window.solana.isPhantom) {
        console.log("Phantom Wallet Found");
        await connectWallet();
    } else {
        alert("Phantom Wallet not found! Please install it.");
    }
});

async function connectWallet() {
    try {
        const response = await window.solana.connect();
        console.log("Connected to wallet:", response.publicKey.toString());
        document.getElementById("buy-button").addEventListener("click", async function () {
            await sendSolanaPayment();
        });
    } catch (err) {
        console.error("Wallet connection failed", err);
    }
}

async function sendSolanaPayment() {
    try {
        const recipient = "XCELCOİN_CÜZDAN_ADRESİ"; // BURAYA XcelCoin'in Solana cüzdan adresini koy
        const amount = 0.01 * 10 ** 9; // 0.01 SOL (1 SOL = 10^9 lamports)

        const transaction = {
            recentBlockhash: (await window.solana.request({ method: "getRecentBlockhash" })).blockhash,
            feePayer: window.solana.publicKey,
            instructions: [{
                keys: [
                    { pubkey: window.solana.publicKey, isSigner: true, isWritable: true },
                    { pubkey: recipient, isSigner: false, isWritable: true }
                ],
                programId: "11111111111111111111111111111111",
                data: new Uint8Array([amount]),
            }]
        };

        const signedTransaction = await window.solana.signTransaction(transaction);
        const signature = await window.solana.request({
            method: "sendTransaction",
            params: [signedTransaction]
        });

        alert("Transaction Sent! Tx Hash: " + signature);
    } catch (err) {
        console.error("Transaction failed", err);
    }
}
