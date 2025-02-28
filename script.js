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
