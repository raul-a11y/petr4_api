const API_KEY = 'd0r5h3pr01qn4tjgjokgd0r5h3pr01qn4tjgjol0'; 
const SYMBOL = 'PETR4.SA';
const priceEl = document.getElementById('price');
const timeEl = document.getElementById('timestamp');

async function fetchPrice() {
  try {
    const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${SYMBOL}&token=${API_KEY}`);
    const data = await res.json();

    const now = new Date();
    const time = now.toLocaleTimeString();

    priceEl.textContent = `R$ ${data.c.toFixed(2)}`;
    timeEl.textContent = time;
  } catch (error) {
    priceEl.textContent = 'Erro ao buscar cotação';
    console.error('Erro na API:', error);
  }
}

// Atualiza a cada 10 segundos
fetchPrice();
setInterval(fetchPrice, 10000);

