document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.solana) {
        try {
            const response = await window.solana.connect();
            alert(`Connected: ${response.publicKey.toString()}`);
        } catch (err) {
            console.error(err);
        }
    } else {
        alert('Solana wallet not found! Please install Phantom wallet.');
    }
});

document.getElementById('buyToken').addEventListener('click', () => {
    let amount = document.getElementById('amount').value;
    if (amount > 0) {
        alert(`You are trying to buy ${amount} XcelCoin.`);
    } else {
        alert('Please enter a valid amount.');
    }
});
