//  9. Fetch and display currency exchange rates. 

const apiEndpoint = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ZKAzsXgm3o5NoJjygz2twTs7kpiqgXc4jUAjLmXi"; 
const apiKey = "fca_live_ZKAzsXgm3o5NoJjygz2twTs7kpiqgXc4jUAjLmXi"; 
const baseCurrency = "USD"; 
const targetCurrencies = ["EUR", "GBP", "JPY"]; 
 
// Function to fetch and display rates 
function fetchAndDisplayCurrencyRates() { 
  fetch(`${apiEndpoint}?base=${baseCurrency}&symbols=${targetCurrencies.join(',')}&apikey=${apiKey}`) 
    .then(response => response.json()) 
    .then(data => { 
      // Extract rates from the API response 
      const rates = data.rates; 
 
      // Display the rates on your webpage 
      for (const currency of targetCurrencies) { 
        const rate = rates[currency]; 
        document.getElementById(currency).textContent = `${currency}: ${rate}`; 
      } 
    }) 
    .catch(error => console.error("Error fetching currency rates:", error)); 
} 
 

fetchAndDisplayCurrencyRates(); 