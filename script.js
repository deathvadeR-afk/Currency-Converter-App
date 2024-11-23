document.getElementById('convert').addEventListener('click', async function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const apiKey = 'your_api_key_here'; // Replace with your API key
    const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);

            document.getElementById('result').innerText = 
                `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            alert('Error fetching exchange rates. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Unable to fetch exchange rates. Please check your connection or API.');
    }
});
